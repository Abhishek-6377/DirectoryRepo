import { useState } from "react";
import {
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "../components/Sidebar";
import Coupon from "./Coupon";
import {FaRupeeSign} from 'react-icons/fa';

const stats = [
  {
    id: 1,
    name: "Total Users",
    value: "2,345",
    icon: UserGroupIcon,
    change: "+12%",
    changeType: "positive",
  },
  {
    id: 2,
    name: "Revenue",
    value: "₹34,543",
    icon: FaRupeeSign,
    change: "-2%",
    changeType: "negative",
  },
  {
    id: 3,
    name: "Conversion",
    value: "3.2%",
    icon: ChartBarIcon,
    change: "+1.1%",
    changeType: "positive",
  },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Dashboard Overview</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-md"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className={`px-5 py-3 ${stat.changeType === "positive" ? "bg-green-50" : "bg-red-50"}`}>
                <div className={`flex items-center text-sm ${stat.changeType === "positive" ? "text-green-800" : "text-red-800"}`}>
                  {stat.changeType === "positive" ? (
                    <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="ml-1.5">{stat.change}</span>
                  <span className="ml-1">from last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Component */}
        <Coupon />
      </main>
    </div>
  );
}
