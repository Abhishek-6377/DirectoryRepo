import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import "react-toastify/dist/ReactToastify.css";
import CouponTable from "../components/coupon/CouponTable";

const Coupon = () => {
    const API_URL = import.meta.env.VITE_API_URL || "https://directory-b3r2.onrender.com";

    const categoryOptions = [
        { value: "New Member", label: "New Member" },
        { value: "Renew", label: "Renew" },
        { value: "Services", label: "Services" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        discount: "",
        date: "",
        category: [],
        couponCode: "",
    });

    const [errors, setErrors] = useState({ date: "", discount: "" });
    const [coupons, setCoupons] = useState([]);
    const [coupon, setCoupon] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCoupons = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/coupons`);
            const raw = Array.isArray(res.data) ? res.data : res.data.coupons || [];
            const normalized = raw.map(normalizeCoupon);
            setCoupons(normalized);
        } catch {
            toast.error("Failed to load coupons");
            setCoupons([]);
        }
    };

    useEffect(() => {
        fetchCoupons();
    }, []);

    const normalizeCoupon = (c) => ({
        id: c._id || c.id || c.couponCode || Math.random().toString(36).substring(2, 11),
        name: c.name || "N/A",
        amount: c.amount || 0,
        discount: `${c.discount || 0}%`,
        expiry: c.expiresAt || null,
        category: Array.isArray(c.category) ? c.category : [],
        code: c.code?.trim() || c.couponCode?.trim() || "(No Code)",
        active: typeof c.active === "boolean" ? c.active : false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "amount") {
            const val = Number(value);
            if (value === "" || (!isNaN(val) && val >= 1)) {
                setFormData((prev) => ({ ...prev, amount: value }));
            }
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDiscountChange = (e) => {
        const value = e.target.value;
        const num = Number(value);
        if (value === "") {
            setErrors((prev) => ({ ...prev, discount: "Discount is required" }));
        } else if (isNaN(num) || num < 1) {
            setErrors((prev) => ({ ...prev, discount: "Discount must be at least 1%" }));
        } else if (num > 100) {
            setErrors((prev) => ({ ...prev, discount: "Max 100%" }));
        } else {
            setErrors((prev) => ({ ...prev, discount: "" }));
        }
        setFormData((prev) => ({ ...prev, discount: value }));
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        const oneYearLater = new Date(today.setFullYear(today.getFullYear() + 1));

        if (selectedDate > oneYearLater) {
            setErrors((prev) => ({ ...prev, date: "Date cannot exceed one year from today" }));
        } else if (selectedDate < new Date()) {
            setErrors((prev) => ({ ...prev, date: "Date cannot be in the past" }));
        } else {
            setErrors((prev) => ({ ...prev, date: "" }));
            setFormData((prev) => ({ ...prev, date: e.target.value }));
        }
    };

    const handleCategoryChange = (selected) => {
        setFormData((prev) => ({
            ...prev,
            category: selected ? selected.map((opt) => opt.value) : [],
        }));
    };

    const generateRandomCode = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return Array.from({ length: 8 }, () =>
            chars.charAt(Math.floor(Math.random() * chars.length))
        ).join("");
    };

    const handleGenerateCoupon = async (e) => {
        e.preventDefault();
        const { name, amount, discount, date, couponCode } = formData;
        if (!name || amount === "" || !discount || !date || !couponCode) {
            toast.error("All fields including Coupon Code are required");
            return;
        }
        if (errors.date || errors.discount) {
            toast.error("Fix the errors before submitting");
            return;
        }
        try {
            setLoading(true);
            await axios.post(`${API_URL}/api/coupons/create`, {
                code: couponCode.trim().toUpperCase(),
                name: name.trim(),
                amount: parseFloat(amount),
                discount: parseFloat(discount),
                expiresAt: date ? new Date(date).toISOString() : undefined,
                category: formData.category || [],
            });
            await fetchCoupons();
            setFormData({ name: "", amount: "", discount: "", date: "", category: [], couponCode: "" });
            setCoupon(null);
            toast.success("Coupon generated successfully!");
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to generate coupon");
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = async (couponId) => {
        try {
            const res = await axios.put(`${API_URL}/api/coupons/toggle/${couponId}`);
            toast.success(res.data.message || "Status updated");
            fetchCoupons();
        } catch (err) {
            toast.error("Failed to update status");
        }
    };

    const handleDeleteCoupon = async (id) => {
        try {
            await axios.delete(`${API_URL}/api/coupons/${id}`);
            setCoupons((prev) => prev.filter((c) => c.id !== id));
            if (coupon?.id === id) setCoupon(null);
            toast.success("Coupon deleted successfully");
        } catch {
            toast.error("Failed to delete coupon");
        }
    };

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto">
                <h2 className="text-lg font-medium text-center text-gray-700 mb-4">Generate Coupon</h2>
                <form onSubmit={handleGenerateCoupon} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Campaign Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            maxLength={30}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Discount Amount</label>
                        <div className="relative">
                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">Rs</span>
                            <input
                                type="number"
                                name="amount"
                                min="1"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                                className="w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md"
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">INR</span>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Discount (%)</label>
                        <div className="relative">
                            <input
                                name="discount"
                                type="number"
                                min="1"
                                max="100"
                                value={formData.discount}
                                onChange={handleDiscountChange}
                                required
                                className={`w-full p-2 border rounded-md ${errors.discount ? "border-red-500" : "border-gray-300"}`}
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                        </div>
                        {errors.discount && <p className="text-sm text-red-600">{errors.discount}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Valid Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleDateChange}
                            min={new Date().toISOString().split("T")[0]}
                            max={new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0]}
                            required
                            className={`w-full p-2 border rounded-md ${errors.date ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.date && <p className="text-sm text-red-600">{errors.date}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Coupon Code</label>
                        <div className="flex gap-2">
                            <input
                                name="couponCode"
                                value={formData.couponCode}
                                onChange={(e) => {
                                    const rawValue = e.target.value.toUpperCase();
                                    const cleaned = rawValue.replace(/[^A-Z0-9]/g, "");
                                    setFormData((prev) => ({ ...prev, couponCode: cleaned }));
                                }}
                                maxLength={20}
                                required
                                className="flex-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Enter coupon code (A-Z, 0-9)"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    const code = generateRandomCode();
                                    setFormData((prev) => ({ ...prev, couponCode: code }));
                                    toast.info("Random code generated!");
                                }}
                                className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                            >
                                Generate Code
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <label className="text-sm font-medium text-gray-700">Select Product Category</label>
                        <Select
                            isMulti
                            options={categoryOptions}
                            value={categoryOptions.filter((opt) => formData.category.includes(opt.value))}
                            onChange={handleCategoryChange}
                            className="mt-1"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                    >
                        {loading ? (
                            <>
                                <ArrowPathIcon className="h-4 w-4 mr-2 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            "Generate Coupon"
                        )}
                    </button>
                </form>
            </div>
            <CouponTable coupons={coupons} onToggle={handleToggle} onDelete={handleDeleteCoupon}  onUseComplete={() => {
    fetchCoupons();
    // optionally trigger fetchUsageData if in same page
  }}/>
        </div>
    );
};

export default Coupon;
