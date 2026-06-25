import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const BASE_URL = "https://directory-b3r2.onrender.com"
const INITIAL_AMOUNT = 49

const NextPage2 = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const formData = location.state?.formData

  const [couponCode, setCouponCode] = useState("")
  const [couponMessage, setCouponMessage] = useState("")
  const [paymentAmount, setPaymentAmount] = useState(INITIAL_AMOUNT)
  const [couponApplied, setCouponApplied] = useState(false)

  if (!formData) {
    return <div className="p-10 text-red-600 text-lg">Form data missing. Please go back.</div>
  }

  const handleApplyCoupon = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/coupons/use/${couponCode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderAmount: INITIAL_AMOUNT }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setPaymentAmount(Math.round(data.orderAmountAfterDiscount))
        setCouponMessage(`✅ Applied! You saved ₹${Math.round(data.discountAmount)}`)
        setCouponApplied(true)
      } else {
        setCouponMessage(data.message || 'Invalid or expired code')
        setCouponApplied(false)
        setPaymentAmount(INITIAL_AMOUNT)
      }
    } catch (err) {
      console.error(err)
      setCouponMessage("Error applying coupon")
    }
  }

  const handleNext = () => {
    navigate("/membership7", {
      state: {
        formData,
        couponCode,
        paymentAmount,
      },
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-green-100 to-blue-200"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white p-10 rounded-3xl shadow-xl max-w-xl w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">🎁 Apply Coupon</h2>

        <motion.input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
          placeholder="Enter your coupon"
          whileFocus={{ scale: 1.02 }}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleApplyCoupon}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-2xl transition"
        >
          Apply Coupon
        </motion.button>

        {couponMessage && (
          <p className={`mt-4 text-center font-medium ${couponApplied ? 'text-green-600' : 'text-red-600'}`}>
            {couponMessage}
          </p>
        )}

        <div className="mt-6 text-center text-lg font-medium">
          Total Payable: <span className="text-purple-700 font-bold">₹{paymentAmount}</span>
        </div>

        <motion.button
          whileHover={{ scale: couponApplied ? 1.04 : 1 }}
          whileTap={{ scale: 0.95 }}
          disabled={!couponApplied}
          onClick={handleNext}
          className={`mt-6 w-full py-3 rounded-xl text-lg font-bold transition-all ${
            couponApplied
              ? 'bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white shadow-lg hover:shadow-2xl'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          Next →
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default NextPage2
