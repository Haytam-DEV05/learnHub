import { SiMinutemailer } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="py-14 transition-colors duration-300"
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--text-light)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Footer */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">
            Subscribe to our newsletter
          </h3>

          <p
            className="max-w-xl mx-auto"
            style={{ color: "var(--text-light)" }}
          >
            Get the latest courses and learning tips delivered to your inbox.
          </p>

          <form className="mt-6 flex items-center justify-center gap-3 max-w-md mx-auto">
            {/* Input */}
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-xl border outline-none transition"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--text-light)",
                  color: "var(--text)",
                }}
              />

              <SiMinutemailer
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-light)" }}
              />
            </div>

            {/* Button */}
            <button
              className="px-6 py-3 rounded-xl font-medium transition"
              style={{
                background: "var(--primary)",
                color: "#fff",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "var(--primary-dark)")
              }
              onMouseOut={(e) => (e.target.style.background = "var(--primary)")}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Footer */}
        <div
          className="mt-12 text-center pt-6"
          style={{
            borderTop: "1px solid var(--text-light)",
          }}
        >
          <h2 className="text-sm" style={{ color: "var(--text-light)" }}>
            All Rights Reserved By Haitam Nefal | &copy;{" "}
            {new Date().getFullYear()}
          </h2>
        </div>
      </div>
    </footer>
  );
}
