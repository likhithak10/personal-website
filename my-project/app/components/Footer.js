"use client";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";
import { PiGithubLogoBold } from "react-icons/pi";
import { MdCamera } from "react-icons/md";

export default function Footer({ className }) {
  const links = [
    {
      name: "Email",
      href: "l2koppul@uwaterloo.ca",
      icon: HiOutlineMail,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/likhitha-koppula/",
      icon: FiLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/likhithak10",
      icon: PiGithubLogoBold,
    },
    {
      name: "LRK",
      href: "https://www.instagram.com/kahtihkil.jpg/",
      icon: MdCamera,
    },
  ];

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full z-50 bg-black text-stone-500 dark:text-stone-400 mt-20 p-4 px-60 text-sm ${className}`}
    >
      <hr className="border-b border-neutral-200 dark:border-neutral-800 mb-2" />

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-wrap gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-center hover:text-neutral-800 dark:hover:text-neutral-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-120" />
            </a>
          ))}
        </div>

        <p className="whitespace-nowrap">
          Likhitha Reddy Koppula &copy; 2025
        </p>
      </div>
    </footer>
  );
}
