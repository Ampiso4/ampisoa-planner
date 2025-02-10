import ThemeMenu from "@/components/theme/theme-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Main Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-[#2D1810]">
              Ampisoa
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard"
                className="text-[#2D1810]/70 hover:text-[#2D1810] transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/events"
                className="text-[#2D1810]/70 hover:text-[#2D1810] transition-colors"
              >
                Events
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <ThemeMenu />
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="button-primary">Sign Up</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" className="md:hidden" aria-label="Menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
