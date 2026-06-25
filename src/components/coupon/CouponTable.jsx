import React from "react";

const CouponTable = ({ coupons, onToggle, onDelete }) => {
    
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-12 ml-30 w-240">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Coupons List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2 text-left">Name</th>
                            <th className="border px-4 py-2 text-left">Code</th>
                            <th className="border px-4 py-2 text-left">Expiry</th>
                            <th className="border px-4 py-2 text-left">Discount</th>
                            <th className="border px-4 py-2 text-left">Category</th>
                            <th className="border px-4 py-2 text-left">Activate/Deactivate</th>
                            <th className="border px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center text-gray-500 py-6">
                                    No coupons found.
                                </td>
                            </tr>
                        ) : (
                            coupons.map((coupon) => (
                                <tr key={coupon.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="border px-4 py-2 text-sm text-gray-700">{coupon.name}</td>
                                    <td className="border px-4 py-2 text-sm text-blue-600 font-semibold">
                                        {coupon.code !== "(No Code)" ? coupon.code : <span className="text-gray-400 italic">No Code</span>}
                                    </td>
                                    <td className="border px-4 py-2 text-sm text-gray-600">
                                        {coupon.expiry ? new Date(coupon.expiry).toLocaleDateString() : "N/A"}
                                    </td>
                                    <td className="border px-4 py-2 text-sm text-green-700 font-medium">{coupon.discount}</td>
                                    <td className="border px-4 py-2 text-sm text-gray-600">
                                        {Array.isArray(coupon.category) && coupon.category.length > 0
                                            ? coupon.category.join(", ")
                                            : "N/A"}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() => onToggle(coupon.id, coupon.active)}
                                            className={`${
                                                coupon.active
                                                    ? "bg-red-500 hover:bg-red-600"
                                                    : "bg-green-500 hover:bg-green-600"
                                            } text-white text-sm px-3 py-1 rounded transition duration-200`}
                                            aria-label={`${coupon.active ? "Deactivate" : "Activate"} coupon ${coupon.code}`}
                                        >
                                            {coupon.active ? "Deactivate" : "Activate"}
                                        </button>
                                        <p className="text-xs text-gray-500">
                                            Status: {coupon.active ? "Active ✅" : "Inactive ❌"}
                                        </p>
                                    </td>

                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() => onDelete(coupon.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition duration-200"
                                            aria-label={`Delete coupon ${coupon.code}`}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CouponTable;
