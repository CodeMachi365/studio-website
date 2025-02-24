/**
 * TODO: backdrop to dismiss navbar when tap outside
 * TODO: animation for mobile navbar
 * TODO: remove the navbar and leave only the button for mobile navbar
 *       (e.g. you do not need the whole navbar on the mobile)
 *
 */

"use client";

import { useState } from "react";
import { NAV_SECTIONS } from "@/data/navbar";

const commonNavClasses = "h-[3.5rem] w-[90%] mx-auto";

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header
      className={["w-full", "fixed top-0 left-0 z-50", "bg-white shadow-md"]
        .join(" ")
        .trim()}
    >
      <DesktopNavbar setIsOpened={setIsOpened} />
      <MobileNavbar isOpened={isOpened} setIsOpened={setIsOpened} />
    </header>
  );
}

function DesktopNavbar(props: { setIsOpened: (isOpened: boolean) => void }) {
  const { setIsOpened } = props;

  return (
    <nav
      className={[commonNavClasses, "hidden md:flex items-center column-gap-1"]
        .join(" ")
        .trim()}
    >
      <NavbarItems isFlexRow={true} setIsOpened={setIsOpened} />
    </nav>
  );
}

export function MobileNavbar(props: {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}) {
  const { isOpened, setIsOpened } = props;

  return (
    <div className="md:hidden">
      <nav
        className={[commonNavClasses, "flex justify-between items-center"]
          .join(" ")
          .trim()}
      >
        <button
          onClick={() => setIsOpened(!isOpened)}
          className="py-2 pr-2"
          aria-label="Toggle navigation menu"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={`mobile-navbar-button-stripe-${i}`}
              className={`w-6 h-0.5 bg-black ${i < 2 ? "mb-1" : ""}`}
            ></div>
          ))}
        </button>
      </nav>

      {isOpened && (
        <div className="bg-white w-full shadow-md">
          <div className="w-[90%] mx-auto py-4">
            <NavbarItems setIsOpened={setIsOpened} isFlexRow={false} />
          </div>
        </div>
      )}
    </div>
  );
}

export function NavbarItems(props: {
  setIsOpened: (isOpened: boolean) => void;
  isFlexRow: boolean;
}) {
  const { isFlexRow, setIsOpened } = props;

  function handleOnClick() {
    setIsOpened(false);
  }

  return (
    <ul className={`flex ${isFlexRow ? "flex-row" : "flex-col"} gap-5`}>
      {NAV_SECTIONS.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} onClick={handleOnClick}>
            {section.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
