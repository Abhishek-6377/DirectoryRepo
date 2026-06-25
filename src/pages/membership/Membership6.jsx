import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Membership6 = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const passedData = location.state
  const [formData, setFormData] = useState(passedData?.formData || {
    name: '',
    companyName: '',
    linkedin: '',
    website: '',
    city: '',
    whatsapp: '',
    email: '',
  })

  const [couponCode] = useState(passedData?.couponCode || "")
  const [paymentAmount] = useState(passedData?.paymentAmount || 49)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!passedData) {
      navigate('/next-page1')
    }
  }, [passedData, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // 1️⃣ Duplicate Check
      const duplicateRes = await fetch(`${import.meta.env.VITE_API_URL || "https://directory-b3r2.onrender.com"}/api/membership/check-duplicate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, whatsapp: formData.whatsapp }),
      });

      const dupResult = await duplicateRes.json();

      if (!duplicateRes.ok) {
        const dupErrors = {};
        if (dupResult.errors?.email) dupErrors.email = dupResult.errors.email;
        if (dupResult.errors?.whatsapp) dupErrors.whatsapp = dupResult.errors.whatsapp;

        setErrors(dupErrors);
        setIsSubmitting(false);
        return;
      }

      // 2️⃣ Google Sheet
      await fetch('https://v1.nocodeapi.com/abhi76899/google_sheets/MHypEsKbhZybqhaB?tabId=Sheet6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([[new Date().toLocaleString(), ...Object.values(formData), couponCode, paymentAmount]]),
      });

      // 3️⃣ Save to MongoDB
      await fetch(`${import.meta.env.VITE_API_URL || "https://directory-b3r2.onrender.com"}/api/membership/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, couponCode, paymentAmount }),
      });

      // 4️⃣ Send Mail
      await fetch(`${import.meta.env.VITE_API_URL || "https://directory-b3r2.onrender.com"}/api/send-mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          couponCode,
          paymentAmount,
        }),
      });

      // 5️⃣ Done
      navigate("/thank-you");
    } catch (err) {
      console.error("Submit error:", err);
      setErrors({ form: "❌ Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-200 p-6"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-3xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">🚀 Final Submit</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "companyName", "linkedin", "website", "city"].map((field) => (
              <motion.div key={field} whileHover={{ scale: 1.02 }}>
                <label className="text-sm font-medium capitalize">{field}</label>
                <input
                  name={field}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </motion.div>
            ))}

            {/* WhatsApp */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="text-sm font-medium">WhatsApp Number</label>
              <input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
                }
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
              />
              {errors.whatsapp && (
                <p className="text-sm text-red-600 mt-1">{errors.whatsapp}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="text-sm font-medium">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </motion.div>
          </div>

          {/* Coupon code */}
          <div>
            <label className="text-sm font-medium">Coupon Code</label>
            <input
              value={couponCode}
              readOnly
              className="w-full mt-1 p-3 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Total */}
          <div className="mt-2 text-lg font-medium">
            Total Payable: <span className="text-purple-700 font-bold">₹{paymentAmount}</span>
          </div>

          {/* Form error */}
          {errors.form && (
            <p className="text-red-600 text-center">{errors.form}</p>
          )}

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 transition shadow-xl hover:shadow-2xl"
          >
            {isSubmitting ? "Submitting..." : "🎉 Submit Membership"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Membership6;
