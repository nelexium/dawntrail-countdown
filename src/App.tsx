import { motion } from "framer-motion";
import dawntrailLogo from "./assets/dawntrail-logo.png";
import watermark from "./assets/watermark.png";
import Countdown from "./Countdown";
import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("early access");
  const [hero, setHero] = useState<string>("full release");

  function handleChange() {
    if (!toggle) {
      setToggle(true);
      setLabel("full release");
      setHero("early access");
    } else {
      setToggle(false);
      setLabel("early access");
      setHero("full release");
    }
  }

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
        <div className={"video-player"}>
          <iframe
            src="https://www.youtube.com/embed/kgiuQwzB6aU?si=1Hj-9sHHR_wKgQeq&amp;loop=1&controls=0&autoplay=1&mute=1&playlist=kgiuQwzB6aU"
            width="560"
            height="349"
            frameBorder={0}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className={"contents"}>
          <div className={"hero"}>
            <h1>Time left until</h1>
            <img src={dawntrailLogo} alt="Dawntrail" />
            <h1>{hero}!</h1>
          </div>
          <Countdown type={toggle} />
        </div>
        <div className={"footer"}>
          <div className={"left"}>
            <img src={watermark} alt="Made by nelexium." />
          </div>
          <div className={"right"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleChange}
            >
              Switch to {label}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
