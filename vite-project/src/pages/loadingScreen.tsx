import { motion } from "motion/react";
import "./load.sass";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loadingScreen"
      initial={{ display: "flex", opacity: 1 }}
      animate={{ display: "none", opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.img
        className="niggerScreen"
        src="../public/newsify_logo.svg"
        alt="Loading Svg"
        initial={{ rotate: 0, scale: 0.5, display: "block" }}
        animate={{ rotate: 0, scale: 1, display: "block" }}
        transition={{
          repeat: 0,
          scale: { type: "spring", bounce: 0.8, duration: 1.2 },
          duration: 1.5,
          ease: "linear",
        }}
      />
      <motion.h1
        className="LoadingTitle"
        initial={{ scale: 1, bottom: 0 }}
        animate={{ scale: 1.5, bottom: "25%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Newsify
      </motion.h1>
    </motion.div>
  );
}
