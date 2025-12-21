"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 
                 bg-[var(--bg)]/30 backdrop-blur-lg border-b border-[var(--accent-light)]/30 
                 shadow-md rounded-b-lg"
    >
      <h1 className="text-2xl font-bold text-accent-light">Portfolio</h1>

      <div className="flex items-center space-x-6">
        <nav className="space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-accent transition ${
                pathname === link.href ? "font-semibold text-accent underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
