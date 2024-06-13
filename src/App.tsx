import { motion } from "framer-motion";
import dawntrailLogo from "./assets/dawntrail-logo.png";
import Countdown from "./Countdown";

export default function App() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 5, delay: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <div className={"App"}>
        <div className={"video-player"}></div>
        <div className={"contents"}>
          <div className={"hero"}>
            <h1>Time left until</h1>
            <img src={dawntrailLogo} alt="Dawntrail" />
            <h1>full release!</h1>
          </div>
          <Countdown />
        </div>
      </div>
    </motion.div>
  );
}
