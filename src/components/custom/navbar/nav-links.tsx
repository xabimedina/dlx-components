import { cn } from "@/lib/utils";
import type { DlxNavbarProps } from ".";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

interface NavLinksProps extends DlxNavbarProps {
  isMobile?:boolean
}

export function NavLinks({ isMobile = false, type }: NavLinksProps) {
  return (
    <div
      className={cn(
        "flex items-baseline font-semibold",
        isMobile ? "flex-col gap-6 text-2xl" : "flex-row space-x-1 text-md"
      )}
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={cn(
            "relative px-4 py-2 transition-all duration-200 group",
            type === 'smoke' ? 'text-jet' : 'text-smoke'
          )}
        >
          {link.label}
          <UnderlineNavLink />
        </a>
      ))}
    </div>
  );
}

const UnderlineNavLink = () => (
  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-saffron transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
);
