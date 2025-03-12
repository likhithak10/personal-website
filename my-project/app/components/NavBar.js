"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "about", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "experience", href: "/experience" },
    { name: "writing", href: "/writing" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-nav flex justify-between items-center px-50 py-4 bg-black text-white">
      <nav>
        <ul className="flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name} className="relative group">
                <a href={item.href} className="py-2 block">
                  {item.name}
                </a>
                <span
                  className={`
                    absolute
                    bottom-0
                    right-0
                    h-0.5
                    bg-[#bfc2c1]
                    transition-all
                    duration-1000
                    ease-out
                    ${
                      isActive
                        ? "left-0 w-full" 
                        : "w-0 group-hover:left-0 group-hover:w-full" 
                    }
                  `}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="font-nav text-lg">likhitha koppula</div>
    </header>
  );
}
