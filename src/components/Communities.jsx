import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Communities = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Love for</p>
          <h2 className={styles.sectionHeadText}>Communities.</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Communities, "");
