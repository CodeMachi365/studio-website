"use client";

import { useState } from "react";
import { NAV_SECTIONS } from "@/data/navbar";
import ThemeButton from "@/components/ui/ThemeButton";

const commonNavClasses = "max-width-container w-[90%] mx-auto h-[3.5rem]";

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header
      className={[
        "w-full fixed top-0 left-0 z-50",
        "flex items-center justify-between",
        "bg-surface-variant shadow-md dark:shadow-none",
        "dark:bg-surface-variant-dark dark:text-on-surface-variant-dark",
      ]
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
      className={[
        commonNavClasses,
        "w-[90%] mx-auto",
        "hidden md:flex items-center justify-between pr-10",
      ]
        .join(" ")
        .trim()}
    >
      <NavbarItems isFlexRow={true} setIsOpened={setIsOpened} />
      <ThemeButton />
    </nav>
  );
}

function NavbarItems(props: {
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

function MobileNavbar(props: {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}) {
  const { isOpened, setIsOpened } = props;

  return (
    <nav className={`${commonNavClasses} md:hidden`}>
      <div
        className={["w-full h-full flex justify-between items-center"]
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
              className={`w-6 h-0.5 bg-on-surface-variant dark:bg-on-surface-variant-dark ${
                i < 2 ? "mb-1" : ""
              }`}
            ></div>
          ))}
        </button>
        <ThemeButton />
      </div>
      {isOpened && <MobileDropdownMenu setIsOpened={setIsOpened} />}
    </nav>
  );
}

function MobileDropdownMenu(props: {
  setIsOpened: (isOpened: boolean) => void;
}) {
  const { setIsOpened } = props;

  return (
    <>
      <div className="absolute top-[3.5rem] left-0 w-screen shadow-md bg-surface-variant dark:bg-surface-variant-dark">
        <div className="p-[5%]">
          <NavbarItems setIsOpened={setIsOpened} isFlexRow={false} />
        </div>
      </div>
      <MobileDropdownMenuBackdrop setIsOpened={setIsOpened} />
    </>
  );
}

function MobileDropdownMenuBackdrop(props: {
  setIsOpened: (isOpened: boolean) => void;
}) {
  const { setIsOpened } = props;

  function handleOnClick() {
    setIsOpened(false);
  }

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen bg-black/50 z-[-1]"
      onClick={handleOnClick}
    />
  );
}
