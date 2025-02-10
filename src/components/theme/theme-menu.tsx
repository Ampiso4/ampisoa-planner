"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const themes = [
  {
    name: "Default",
    colors: {
      primary: "#FFA09B",
      secondary: "#FCC6FF",
      background: "#FFE6C9",
      accent: "#FFC785",
    },
  },
  {
    name: "Rose",
    colors: {
      primary: "#FF8BA7",
      secondary: "#FFC6D9",
      background: "#FFE4E6",
      accent: "#FF9EAF",
    },
  },
  {
    name: "Lavender",
    colors: {
      primary: "#B8C0FF",
      secondary: "#D4DAFF",
      background: "#E7E9FF",
      accent: "#BBD0FF",
    },
  },
  {
    name: "Extra",
    colors: {
      primary: "#854836",
      secondary: "#FFB22C",
      background: "#000000",
      accent: "#F7F7F7",
    },
  },
  {
    name: "Lovely",
    colors: {
      primary: "#09122C",
      secondary: "#BE3144",
      background: "#E17564",
      accent: "#872341",
    },
  },
];

export default function ThemeMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const applyTheme = (theme: (typeof themes)[0]) => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    setCurrentTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ background: currentTheme.colors.primary }}
        />
        <span>Theme</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border bg-white shadow-lg z-50 ">
          <div className="p-2 space-y-1">
            {themes.map((theme) => (
              <button
                key={theme.name}
                className={`w-full px-4 py-2 text-left rounded-md hover:bg-gray-100 flex items-center gap-3 ${
                  currentTheme.name === theme.name ? "bg-gray-50" : ""
                }`}
                onClick={() => applyTheme(theme)}
              >
                <div className="flex gap-1">
                  {Object.values(theme.colors).map((color, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{ background: color }}
                    />
                  ))}
                </div>
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
