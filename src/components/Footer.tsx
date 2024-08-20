import { LINKS } from "@/constants";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-overlay bg-cover bg-no-repeat py-16 relative">
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image src={logo} alt="" fill className="object-contain" />
          </Link>
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <ul className="flex text-white text-xl gap-4">
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-wgite/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-wgite/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-wgite/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-wgite/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; Copyright 2024 - Calm Cafe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
