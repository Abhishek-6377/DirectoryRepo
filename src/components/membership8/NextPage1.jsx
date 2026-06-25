import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const NextPage1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    linkedin: '',
    website: '',
    city: '',
    whatsapp: '',
    email: '',
  })

  const [formErrors, setFormErrors] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    document.querySelector("input[name='name']")?.focus()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error while typing
    setFormErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleNext = () => {
    const errors = {}

    //Validation all fields
    Object.keys(formData).forEach((field)=>{
      if(!formData[field].trim()){
        errors[field] = "This field is required"
      }
    })
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      navigate('/next-page2', { state: { formData } })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-blue-100 to-indigo-200"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-3xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">📝 Fill Membership Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Full Name', name: 'name' },
            { label: 'Company Name', name: 'companyName' },
            { label: 'LinkedIn', name: 'linkedin' },
            { label: 'Website', name: 'website' },
            { label: 'City', name: 'city' },
            { label: 'WhatsApp', name: 'whatsapp' },
            { label: 'Email', name: 'email' },
          ].map(({ label, name }) => (
            <motion.div key={name} whileHover={{ scale: 1.02 }}>
              <label className="text-sm font-medium">{label}</label>
              <input
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`w-full mt-1 p-3 border ${
                  formErrors[name] ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:ring-2 ${
                  formErrors[name] ? 'focus:ring-red-400' : 'focus:ring-blue-400'
                }`}
              />
              {formErrors[name] && (
                <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition"
          >
            Next →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default NextPage1
