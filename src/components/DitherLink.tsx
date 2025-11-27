import { ReactNode } from "react";

interface DitherLinkProps {
  href: string;
  children: ReactNode;
}

export function DitherLink({ href, children }: DitherLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="dither-link inline-block"
    >
      {children}
    </a>
  );
}
