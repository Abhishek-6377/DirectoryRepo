import React, { useState } from 'react';
import { SiPaytm, SiGooglepay, SiPhonepe } from 'react-icons/si';

const PaymentPage = () => {
  const [method, setMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');
  const [selectedUpiApp, setSelectedUpiApp] = useState(null);

  const handleCardChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    await axios.post("https://directory-b3r2.onrender.com/api/pay", {
  method,
  amount: 499,
  ...(method === "card" && { card: cardData }),
  ...(method === "upi" && { upi: { app: selectedUpiApp, upiId } }),
});

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Complete Your Payment</h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setMethod('card')}
            className={`px-5 py-2 text-sm font-medium rounded-full border transition ${
              method === 'card'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            Credit/Debit Card
          </button>
          <button
            onClick={() => setMethod('upi')}
            className={`px-5 py-2 text-sm font-medium rounded-full border transition ${
              method === 'upi'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            UPI
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Inputs */}
          {method === 'card' && (
            <>
              <div>
                <label className="text-sm font-medium text-gray-700">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={cardData.cardName}
                  onChange={handleCardChange}
                  className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardData.cardNumber}
                  onChange={handleCardChange}
                  maxLength={16}
                  className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="text-sm font-medium text-gray-700">Expiry</label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardData.expiry}
                    onChange={handleCardChange}
                    placeholder="MM/YY"
                    className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    value={cardData.cvv}
                    onChange={handleCardChange}
                    maxLength={4}
                    className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                    placeholder="•••"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* UPI Section */}
{method === 'upi' && (
  <>
    <label className="text-sm font-medium text-gray-700">Choose UPI App</label>
    <div className="grid grid-cols-3 gap-4 mt-2">
      {/* Paytm */}
      <button
        type="button"
        onClick={() => {
          setSelectedUpiApp('Paytm');
          setUpiId('');
        }}
        className={`flex flex-col items-center p-4 rounded-xl transition text-white font-semibold ${
          selectedUpiApp === 'Paytm'
            ? 'bg-[#00baf2] shadow-lg'
            : 'bg-[#00baf2]/80 hover:bg-[#00baf2]'
        }`}
      >
        <SiPaytm size={28} />
        <span className="mt-2 text-sm">Paytm</span>
      </button>

      {/* PhonePe */}
      <button
        type="button"
        onClick={() => {
          setSelectedUpiApp('PhonePe');
          setUpiId('');
        }}
        className={`flex flex-col items-center p-4 rounded-xl transition text-white font-semibold ${
          selectedUpiApp === 'PhonePe'
            ? 'bg-[#4a0fdc] shadow-lg'
            : 'bg-[#4a0fdc]/80 hover:bg-[#4a0fdc]'
        }`}
      >
        <SiPhonepe size={28} />
        <span className="mt-2 text-sm">PhonePe</span>
      </button>

      {/* Google Pay */}
      <button
        type="button"
        onClick={() => {
          setSelectedUpiApp('GooglePay');
          setUpiId('');
        }}
        className={`flex flex-col items-center p-4 rounded-xl transition text-white font-semibold ${
          selectedUpiApp === 'GooglePay'
            ? 'bg-[#4285f4] shadow-lg'
            : 'bg-[#4285f4]/80 hover:bg-[#4285f4]'
        }`}
      >
        <SiGooglepay size={28} />
        <span className="mt-2 text-sm">GPay</span>
      </button>
    </div>

    <div className="mt-4">
      <label className="text-sm font-medium text-gray-700">Or enter UPI ID</label>
      <input
        type="text"
        value={upiId}
        onChange={(e) => {
          setUpiId(e.target.value);
          setSelectedUpiApp(null);
        }}
        className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
        placeholder="example@upi"
      />
    </div>
  </>
)}


          {/* Total Amount */}
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>Total</span>
              <span>₹499.00</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
