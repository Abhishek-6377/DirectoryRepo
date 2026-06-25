import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineReload } from "react-icons/ai";

const CouponUsageTable = () => {
  const API_URL = import.meta.env.VITE_API_URL || "https://jovial-snickerdoodle-7f8d91.netlify.app";
  const [usageData, setUsageData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsageData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/coupons/usage`);

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.usage || res.data.coupons || [];

      setUsageData(data);
    } catch (err) {
      console.error("Failed to fetch usage data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsageData();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Coupon Usage Summary
        </h2>
        <button
          onClick={fetchUsageData}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
        >
          <AiOutlineReload className="mr-1" />
          Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-gray-600 animate-pulse">Loading usage data...</p>
      ) : usageData.length === 0 ? (
        <p className="text-gray-500 italic">No coupon usage data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border px-4 py-2 text-left">Code</th>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Discount (%)</th>
                <th className="border px-4 py-2 text-left">Amount (₹)</th>
                <th className="border px-4 py-2 text-left">Times Used</th>
                <th className="border px-4 py-2 text-left">Total Discount Given</th>
              </tr>
            </thead>
            <tbody>
              {usageData.map((item) => {
                const discountPercent = parseFloat(item.discount) || 0;
                const amount = parseFloat(item.amount) || 0;
                const totalDiscount = parseFloat(item.totalDiscount) || 0;

                return (
                  <tr key={item.code} className="hover:bg-gray-50 transition">
                    <td className="border px-4 py-2">{item.code}</td>
                    <td className="border px-4 py-2">{item.name || "-"}</td>
                    <td className="border px-4 py-2">{discountPercent}%</td>
                    <td className="border px-4 py-2">₹{amount}</td>
                    <td className="border px-4 py-2">{item.usageCount ?? 0}</td>
                    <td className="border px-4 py-2 text-green-700 font-medium">
                      ₹
                      {totalDiscount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CouponUsageTable;
