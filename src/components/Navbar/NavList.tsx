import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const letterAnimation = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  start: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: i[0] },
  }),
  end: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1], delay: i[1] },
  }),
};

const getLetter = (name: string) => {
  let letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        animate="start"
        exit="end"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

export default function NavList() {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="hover:text-white transition-all">
            {getLetter(link.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
