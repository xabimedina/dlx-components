"use client";

import type React from "react";

import { Button } from "@/components/button";

export type ConsentPreferencesButtonProps = React.ComponentProps<typeof Button>;

export function ConsentPreferencesButton({
  children = "Configurar cookies",
  variant = "accent",
  className = "px-6 py-3",
  onClick,
  ...props
}: ConsentPreferencesButtonProps) {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        window.openConsentPreferences?.();
      }}
      type="button"
      {...props}
    >
      {children}
    </Button>
  );
}
