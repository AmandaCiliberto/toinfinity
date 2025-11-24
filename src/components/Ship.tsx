import { motion } from "framer-motion";

const Ship = () => {
  return (
    <div className="flex h-64 w-full items-center justify-center mt-30">
      <motion.div
        className="relative w-40 aspect-[3/5]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* ========== BODY ========== */}
        <div className="absolute inset-x-[20%] top-[4%] bottom-[26%] rounded-[999px] bg-slate-100" />
        <div className="absolute inset-x-[45%] top-[53%] bottom-[26%] rounded-[999px] bg-slate-300" />

        {/* Bottom block above flame */}
        <div className="absolute left-1/2 bottom-[26%] h-[10%] w-[40%] -translate-x-1/2 rounded-md bg-slate-800" />

        {/* ========== WINDOW ========== */}
        <div className="absolute left-1/2 top-[20%] h-[28%] w-[48%] -translate-x-1/2 rounded-full bg-cyan-900" />
        <div className="absolute left-1/2 top-[24%] h-[18%] w-[34%] -translate-x-1/2 rounded-full bg-cyan-700" />

        {/* ========== FINS ========== */}
        <div className="absolute left-[4%] top-[40%] bottom-[28%] w-[26%] rounded-[40%] bg-slate-300" />
        <div className="absolute right-[4%] top-[40%] bottom-[28%] w-[26%] rounded-[40%] bg-slate-300" />

        {/* ========== FLAMES ========== */}
        <motion.div
          className="absolute left-1/2 bottom-0 h-[34%] w-[40%] -translate-x-1/2"
          style={{ clipPath: "ellipse(50% 70% at 50% 100%)" }}
          animate={{ scaleY: [1, 1.15, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-orange-600" />
          <div className="absolute inset-[18%] rounded-full bg-orange-400" />
          <div className="absolute inset-[32%] rounded-full bg-amber-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Ship;
