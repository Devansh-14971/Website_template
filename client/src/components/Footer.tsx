import { Link } from "wouter";
import { Pill, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Pill className="h-8 w-8 text-blue-500 mr-3" />
              <span className="text-xl font-bold">MediCore Pharmaceuticals</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading pharmaceutical innovation for better patient outcomes worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Cardiovascular</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Diabetes Management</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Antimicrobial</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Respiratory Care</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Oncology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research & Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Medical Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Regulatory Affairs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Patient Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare Providers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">
              <p className="mb-2">© 2024 MediCore Pharmaceuticals. All rights reserved.</p>
              <p>This site is intended for healthcare professionals and residents of the United States.</p>
            </div>
            <div className="text-sm text-gray-400 lg:text-right">
              <a href="#" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors mr-4">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-400">
              <strong>Important Safety Information:</strong> All medications have potential side effects and contraindications. Please consult with your healthcare provider before starting any new medication. This website is for informational purposes only and does not constitute medical advice. Always follow your healthcare provider's instructions and read all medication labels carefully.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
