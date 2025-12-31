"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  const pathname = usePathname();

  // Split pathname into segments and build breadcrumb data
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => ({
    name: segment,
    path: "/" + segments.slice(0, index + 1).join("/"),
  }));

  return (
    <nav className="mb-20 relative z-20 flex">
      <div className="flex items-center grow justify-between">
        <div className="grow">
          <Link
            href="/"
            className="opacity-30 hover:opacity-60 transition-opacity"
          >
            baam@portfolio~
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.path}>
              <span className="opacity-30">/</span>
              <Link
                href={crumb.path}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {crumb.name}
              </Link>
            </span>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};
