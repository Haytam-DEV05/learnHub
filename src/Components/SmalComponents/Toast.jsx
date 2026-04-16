// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export default function Toast({ message, type = "success" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: "-50%" }}
      animate={{ opacity: 1, y: 20, x: "-50%" }}
      exit={{ opacity: 0, y: -50, x: "-50%" }}
      className="fixed left-1/2 z-100 min-w-75"
    >
      <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl px-6 py-4 rounded-2xl flex items-center gap-4">
        <div className="bg-green-500 text-white p-2 rounded-full">
          <FaCheckCircle size={18} />
        </div>

        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">
            Notification
          </p>
          <p className="text-xs text-gray-500 font-medium">{message}</p>
        </div>
      </div>
    </motion.div>
  );
}
