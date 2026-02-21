import { SiMinutemailer } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-14">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Footer */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold text-(--text)">
            Subscribe to our newsletter
          </h3>
          
          <p className="text-(--text-light) max-w-xl mx-auto">
            Get the latest courses and learning tips delivered to your inbox.
          </p>

          <form className="mt-6 flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-(--text)"
              />
              <SiMinutemailer className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 text-center border-t border-gray-200 pt-6">
          <h2 className="text-sm text-(--text-light)">
            All Rights Reserved By Haitam Nefal | &copy; {new Date().getFullYear()}
          </h2>
        </div>
      </div>
    </footer>
  );
}