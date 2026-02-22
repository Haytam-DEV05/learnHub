import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function SignUp() {
  return (
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{ background: "var(--background)" }}
    >
      <div
        className="w-full max-w-lg p-8 rounded-2xl shadow-xl"
        style={{ background: "var(--card-bg)", color: "var(--text)" }}
      >
        <h1 className="text-3xl font-bold text-center mb-2">Join LearnHub</h1>

        <p className="text-center mb-6" style={{ color: "var(--text-light)" }}>
          Start your learning journey today
        </p>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm">Full Name</label>

            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div className="relative">
                <span
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--text-light)" }}
                >
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition"
                  style={{
                    background: "transparent",
                    borderColor: "var(--text-light)",
                    color: "var(--text)",
                  }}
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <span
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--text-light)" }}
                >
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition"
                  style={{
                    background: "transparent",
                    borderColor: "var(--text-light)",
                    color: "var(--text)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm">Email Address</label>

            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-light)" }}
              >
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition"
                style={{
                  background: "transparent",
                  borderColor: "var(--text-light)",
                  color: "var(--text)",
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm">Password</label>

            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-light)" }}
              >
                <RiLockPasswordFill />
              </span>
              <input
                type="password"
                placeholder="•••••••"
                className="w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition"
                style={{
                  background: "transparent",
                  borderColor: "var(--text-light)",
                  color: "var(--text)",
                }}
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "var(--primary-dark)")
            }
            onMouseOut={(e) => (e.target.style.background = "var(--primary)")}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
