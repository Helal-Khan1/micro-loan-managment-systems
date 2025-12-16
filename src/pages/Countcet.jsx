import React from "react";
// Importing icons for contact methods
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Office Location",
      detail: "H-45, Digital Innovation Zone, Sector-12, Dhaka, Bangladesh",
      href: "#",
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      detail: "support@loanlink.com",
      href: "mailto:support@loanlink.com",
    },
    {
      icon: FaPhoneAlt,
      title: "Customer Hotline",
      detail: "+880 17XX XXX XXX",
      href: "tel:+88017XXXXXXXX",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      detail: "Mon - Fri: 9:00 AM - 5:00 PM (GMT+6)",
      href: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. HEADER SECTION */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Get in Touch with LoanLink
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you simplify your microloan management process.
            Reach out to us via the contact form or use the direct methods
            below.
          </p>
        </header>

        {/* 2. CONTACT GRID: FORM & METHODS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@organization.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Regarding partnership or support"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help your organization?"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: DIRECT CONTACT METHODS */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Direct Contact Info
            </h3>
            <div className="space-y-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-start group hover:bg-gray-50 p-4 -m-4 rounded-lg transition duration-150"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition duration-150">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                      {method.title}
                    </p>
                    <p className="mt-1 text-base text-gray-500 break-words">
                      {method.detail}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. MAP/LOCATION (Optional but recommended for trust) */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.822765039265!2d90.39578135!3d23.79155255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c01b22579%3A0x2863a3e1f0e2270!2sDhaka%201212!5e0!3m2!1sen!2sbd!4v1703000000000!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
