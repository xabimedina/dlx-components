"use client";

import { useEffect, useMemo, useState } from "react";
import type React from "react";

import { Button } from "@/components/button";
import {
  applyConsentPreference,
  readConsentPreference,
  saveConsentPreference,
} from "./storage";
import type { ConsentUpdateAction, ConsentUpdatePayload, CookieConsentTexts } from "./types";

const DEFAULT_TEXTS: Required<CookieConsentTexts> = {
  ariaLabel: "Aviso de cookies",
  title: "Cookies",
  description:
    "Usamos cookies analíticas de Google Analytics a través de Google Tag Manager para entender cómo se usa la web y mejorar la experiencia. Puedes aceptar, rechazar o configurar esta categoría.",
  policyLabel: "Ver política de cookies",
  rejectLabel: "Rechazar",
  acceptLabel: "Aceptar",
  preferencesLabel: "Configurar cookies",
};

export type CookieConsentProviderProps = {
  children?: React.ReactNode;
  policyHref?: string;
  texts?: CookieConsentTexts;
  onConsentUpdate?: (payload: ConsentUpdatePayload) => void;
};

export function CookieConsentProvider({
  children,
  policyHref = "/politica-de-cookies",
  texts,
  onConsentUpdate,
}: CookieConsentProviderProps) {
  const [showBanner, setShowBanner] = useState(false);
  const copy = useMemo(() => ({ ...DEFAULT_TEXTS, ...texts }), [texts]);

  useEffect(() => {
    const storedPreference = readConsentPreference();

    if (storedPreference) {
      applyConsentPreference(storedPreference.analytics, {
        action: "restore",
        emitEvent: false,
      });
    } else {
      setShowBanner(true);
    }

    window.openConsentPreferences = () => {
      setShowBanner(true);
    };

    return () => {
      delete window.openConsentPreferences;
    };
  }, []);

  const persistConsent = (analytics: boolean, action: ConsentUpdateAction) => {
    const preference = saveConsentPreference(analytics);
    const consentState = applyConsentPreference(analytics, { action, emitEvent: true });

    onConsentUpdate?.({
      action,
      analytics,
      preference,
      consentState,
    });

    setShowBanner(false);
  };

  return (
    <>
      {children}

      {showBanner ? (
        <section
          aria-label={copy.ariaLabel}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-jet/10 bg-smoke px-4 py-5 text-jet shadow-2xl"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-2">
              <h2 className="font-kanit text-2xl font-bold uppercase tracking-wide">
                {copy.title}
              </h2>
              <p className="text-sm leading-relaxed text-jet/75">{copy.description}</p>
              <a
                href={policyHref}
                className="text-sm font-semibold underline underline-offset-4"
              >
                {copy.policyLabel}
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <Button
                className="border border-jet/25 bg-transparent px-6 py-3 text-jet hover:bg-jet hover:text-smoke"
                onClick={() => persistConsent(false, "reject")}
                type="button"
              >
                {copy.rejectLabel}
              </Button>
              <Button
                variant="accent"
                className="px-6 py-3"
                onClick={() => persistConsent(true, "accept")}
                type="button"
              >
                {copy.acceptLabel}
              </Button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
