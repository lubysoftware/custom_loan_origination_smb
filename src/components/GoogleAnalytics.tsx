declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}

export function trackFormStart() {
  pushDataLayer({ event: "form_start", form_id: "contact" });
}

export function trackFormSubmit() {
  pushDataLayer({ event: "form_submit", form_id: "contact" });
}
