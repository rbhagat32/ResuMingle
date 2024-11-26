import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

const Stripe = () => {
  const router = useRouter();
  const payRef = useRef<HTMLButtonElement>(null);
  const [selectedMethod, setSelectedMethod] = useState('card');

  const paymentOptions = [
    { id: 'card', label: 'Credit/Debit Card' },
    { id: 'upi', label: 'UPI' },
    { id: 'netbanking', label: 'Net Banking' },
  ];

  const pay = () => {
    localStorage.setItem('premium', 'true');
    if (payRef.current) {
      payRef.current.disabled = true;
      payRef.current.innerText = 'Processing...';
    }
    setTimeout(() => {
      toast.success('Payment successful');
      router.push('/builder');
    }, 6000);
  };

  const cancel = () => {
    toast.error('Payment cancelled');
    router.push('/builder');
  };

  return (
    <>
      <Head>
        <title>ResuMingle</title>
        <meta name="description" content="ResuMingle" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <div className="bg-gray-100 flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 border-2 border-blue-300">
          <header className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-800">RazorPay</h1>
            <p className="text-sm text-gray-500">Complete your payment securely</p>
          </header>

          <div className="mb-6">
            <div className="flex justify-around border-b">
              {paymentOptions.map((option) => (
                <button
                  key={option.id}
                  className={`pb-2 px-4 font-medium text-sm transition ${
                    selectedMethod === option.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setSelectedMethod(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {selectedMethod === 'card' && (
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                required
                type="text"
                id="card-number"
                placeholder="1234 5678 1234 5678"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry
                  </label>
                  <input
                    required
                    type="text"
                    id="expiry"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    required
                    type="text"
                    id="cvv"
                    placeholder="123"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'upi' && (
            <div>
              <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700 mb-1">
                UPI ID
              </label>
              <input
                required
                type="text"
                id="upi-id"
                placeholder="yourname@bank"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />

              <div className="mt-6 flex flex-col items-center">
                <p className="text-sm text-gray-600 mb-4">
                  Scan the QR code to complete the payment
                </p>
                <div className="w-32 h-32 bg-gray-200 rounded-md flex justify-center items-center shadow-md">
                  <img src="/qr.jpg" alt="QR Code" className="rounded" />
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'netbanking' && (
            <div>
              <label htmlFor="bank" className="block text-sm font-medium text-gray-700 mb-1">
                Select Bank
              </label>
              <select
                id="bank"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
              <label
                htmlFor="card-number"
                className="mt-5 block text-sm font-medium text-gray-700 mb-1"
              >
                Net Banking ID
              </label>
              <input
                required
                type="text"
                id="card-number"
                placeholder="1234 5678 1234 5678"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-700">Payment Summary</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-600">Amount</p>
              <p className="text-lg font-semibold text-gray-800">Rs 199</p>
            </div>
          </div>

          <button
            ref={payRef}
            onClick={pay}
            className="mt-6 w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Pay Now
          </button>

          <button
            onClick={cancel}
            className="mt-6 w-full bg-zinc-600 text-white font-medium py-2 rounded-md hover:bg-zinc-700 transition"
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Stripe;
