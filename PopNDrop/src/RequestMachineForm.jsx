import React, { useState } from 'react';
import useScrollEffect from "./useScrollEffect";
import FloatingInput from './floatingInput';

function RequestMachineForm() {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [ref, visible] = useScrollEffect();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a network request — replace with your real API call
    setTimeout(() => {
      console.log({ companyName, name, email, phone, reason, message });
      setLoading(false);
      setSubmitted(true);
      setCompanyName('');
      setName('');
      setEmail('');
      setPhone('');
      setReason('');
      setMessage('');
    }, 1000);
  };

  // Shared input classes
  const inputClass = `w-full border border-gray-300 h-11 px-4 rounded-lg text-sm
                      text-gray-800 placeholder-gray-400 font-sans
                      focus:outline-none focus:ring-2 focus:ring-amber-400
                      focus:border-transparent transition`;

  // Success state
  if (submitted) {
    return (
      <section
        id="form"
        className="flex flex-col items-center justify-center min-h-screen px-4 font-serif"
      >
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="text-amber-400 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Sent!</h2>
          <p className="text-gray-500 text-sm">
            Thanks, <span className="font-semibold text-gray-700">{name.charAt(0).toUpperCase() + name.slice(1)}</span>! We'll be in
            touch with you shortly about your request.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm text-amber-500 hover:text-amber-400 underline transition "
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="form"
      ref={ref}
      className={`flex flex-col items-center justify-center min-h-screen px-4 py-20
                  font-serif transition duration-1000 ease-in bg-gray-50
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
    >
      <div className="w-full max-w-lg">

        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-1 text-center">
          Shoot Us a Message
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8">
          Fill out the form below and we'll get back to you within 1–2 business days.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4"
        >
          {/* Company Name */}
            <FloatingInput
              label="Company Name"
              name="companyName"
              className={inputClass}
              type="text"
              value={companyName}
              placeholder="Your Company Name"
              required
              onChange={(e) => setCompanyName(e.target.value)}
            />

          {/* Your Name */}
            <FloatingInput
              label="Your Name"
              name="name"
              className={inputClass}
              type="text"
              value={name}
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />

          {/* Email + Phone side by side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <FloatingInput
                label="Email"
                name="email"
                className={inputClass}
                type="email"
                value={email}
                placeholder="Your Email Address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-1 flex-1">
              <FloatingInput
                label="Phone"
                name="phone"
                className={inputClass}
                type="tel"
                value={phone}
                placeholder="Your Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Reason for Contact
            </label>
            <select
              className={inputClass}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            >
              <option value="" disabled>Select a reason…</option>
              <option value="request-machine">Request a Machine</option>
              <option value="customer-support">Customer Support</option>
              <option value="partnership">Partnership / Business Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Message
            </label>
            <textarea
              className={`${inputClass} h-32 py-3 resize-none`}
              value={message}
              placeholder="Tell us about your location, how many machines you need, etc."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-gray-800 hover:bg-amber-400 hover:text-gray-900
                       text-white font-bold font-serif tracking-wide py-3 rounded-lg
                       transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending…" : "Submit Request"}
          </button>
        </form>

      </div>
    </section>
  );
}

export default RequestMachineForm;