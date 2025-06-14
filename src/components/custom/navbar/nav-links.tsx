import { cn } from "@/lib/utils";
import type { DlxNavbarProps } from ".";
import { DlxLink } from "../dlx-link";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

interface NavLinksProps extends DlxNavbarProps {
  isMobile?: boolean;
}

export function NavLinks({ isMobile = false, type }: NavLinksProps) {
  const textColor = type === "smoke" ? "text-jet" : "text-smoke";
  return (
    <div
      className={cn(
        "flex items-baseline font-semibold",
        isMobile ? "flex-col gap-6 text-2xl" : "flex-row space-x-1 text-md"
      )}
    >
      {navLinks.map((link) => (
        <div className="px-4 py-2" key={link.href}>
          <DlxLink href={link.href} className={textColor}>
            {link.label}
          </DlxLink>
        </div>
      ))}
    </div>
  );
}
