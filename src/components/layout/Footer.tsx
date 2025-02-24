"use client";

import SOCIAL_LINKS from "@/data/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear() || "2025"} Code Machi Studio. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
