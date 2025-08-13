// /src/utils/prefetch.js
// CPR v3 — minimal, idempotent prefetchers for routes that actually exist.
// Uses dynamic import() so Vite can split & prewarm chunks on hover/visibility.

const once = (fn) => {
  let done = false;
  let p = null;
  return () => {
    if (done) return p || Promise.resolve();
    done = true;
    p = (fn && fn()) || Promise.resolve();
    return p;
  };
};

// ✅ Eager routes in App.jsx (already bundled) → no-op prefetchers
export const prefetchScrollLibrary = () => Promise.resolve();
export const prefetchNextArkYouth  = () => Promise.resolve();

// ✅ Lazily-loaded routes → real prefetchers
export const prefetchAIAllies       = once(() => import("../pages/AIAllies"));
export const prefetchAffiliateTools = once(() => import("../pages/AffiliateTools"));

// ℹ️ Future routes (keep commented until pages exist to avoid import errors):
// export const prefetchBitsysWorld      = once(() => import("../pages/BitsysWorld"));
// export const prefetchYouthGateway     = once(() => import("../pages/YouthScrollGateway"));
// export const prefetchBitcoinIntro     = once(() => import("../pages/scrolls/bitcoin-intro"));
// export const prefetchWalletSafety     = once(() => import("../pages/scrolls/wallet-safety"));
// export const prefetchQuillshadeReveal = once(() => import("../pages/scrolls/quillshade-reveal"));
// export const prefetchInheritance      = once(() => import("../pages/scrolls/inheritance-purpose"));
