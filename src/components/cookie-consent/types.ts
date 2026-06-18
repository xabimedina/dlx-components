export type ConsentPreference = {
  version: number;
  updatedAt: string;
  analytics: boolean;
};

export type ConsentModeValue = "granted" | "denied";

export type ConsentModeState = {
  ad_storage: ConsentModeValue;
  ad_user_data: ConsentModeValue;
  ad_personalization: ConsentModeValue;
  analytics_storage: ConsentModeValue;
};

export type ConsentAction = "accept" | "reject" | "save" | "restore";
export type ConsentUpdateAction = Exclude<ConsentAction, "restore">;

export type CookieConsentTexts = {
  ariaLabel?: string;
  title?: string;
  description?: string;
  policyLabel?: string;
  rejectLabel?: string;
  acceptLabel?: string;
  preferencesLabel?: string;
};

export type ConsentUpdatePayload = {
  action: ConsentUpdateAction;
  analytics: boolean;
  preference: ConsentPreference;
  consentState: ConsentModeState;
};
