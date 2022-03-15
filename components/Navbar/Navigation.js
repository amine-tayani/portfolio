import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants} className="ul">
    {linkNames.map((linkname) => (
      <MenuItem link={linkname} key={linkname} toggle={toggle} />
    ))}
  </motion.ul>
);

const linkNames = ["home", "skills", "projects", "experiences", "contact"];
