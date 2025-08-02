import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#e0f7fa] to-[#fce4ec] text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">H.F Traders</h3>
            <p className="text-gray-700 mb-4">
              "Turning Waste into Worth Since 1974"
            </p>
            <p className="text-sm text-gray-600">
              Trusted scrap merchant and waste management company serving Delhi NCR for nearly 50 years.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-blue-500" />
                <span className="text-sm">
                  Sanjay Camp, Singapore Embassy, Chanakyapuri, New Delhi, Delhi 110021
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <div className="text-sm">
                  <div>9958654732</div>
                  <div>9015956211</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span className="text-sm">hftraders121@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-blue-500" />
                <div className="text-sm">
                  <div>Monday - Saturday: 9:00 AM - 7:00 PM</div>
                  <div>Sunday: 10:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Quick Services</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Free Pickup Service</li>
                <li>• Same Day Evaluation</li>
                <li>• Best Market Rates</li>
                <li>• Instant Payment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 H.F Traders. All rights reserved. | Established 1974 | Licensed Scrap Dealer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
