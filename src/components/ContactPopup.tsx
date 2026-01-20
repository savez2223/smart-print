import { useState } from "react";
import { X } from "lucide-react";
import popupImg from "@/images/popup img.jpg";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

// Form Data Configuration - Easy to modify
const FORM_CONFIG = {
  title: "Need expert help?",
  submitButtonText: "Book Appointment",
  countries: [
    { value: "", label: "-- Select Country --" },
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
  ],
  supportOptions: [
    { value: "", label: "-- Support For --" },
    { value: "printer", label: "Printer Setup" },
    { value: "computer", label: "Computer" },
    { value: "network", label: "Network" },
    { value: "wifi", label: "WiFi" },
    { value: "mobile", label: "Mobile" },
  ],
};

const ContactPopup = ({ open, onClose }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    supportType: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl rounded-lg overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-10"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={popupImg}
              alt="Support"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {FORM_CONFIG.title}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0aa5d9]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0aa5d9]"
                required
              />

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0aa5d9]"
                required
              >
                {FORM_CONFIG.countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>

              <select
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0aa5d9]"
                required
              >
                {FORM_CONFIG.supportOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0aa5d9]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#0aa5d9] text-white py-3 rounded font-semibold hover:bg-[#088bb7] transition-colors"
              >
                {FORM_CONFIG.submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
