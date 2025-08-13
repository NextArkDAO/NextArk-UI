// super‑light page SEO setter (no libs)
export function setSEO({ title, description, canonical, og = {} }) {
  if (title) document.title = title;

  const set = (sel, attrs) => {
    let el = document.head.querySelector(sel);
    if (!el) { el = document.createElement(attrs.tag || 'meta'); document.head.appendChild(el); }
    Object.entries(attrs).forEach(([k,v]) => { if (k!=='tag') el.setAttribute(k, v); });
  };

  if (description) set('meta[name="description"]', { name: 'description', content: description });

  if (canonical) {
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel','canonical'); document.head.appendChild(link); }
    link.setAttribute('href', canonical);
  }

  // OG fallbacks (optional but good)
  if (og.title || title) set('meta[property="og:title"]', { property:'og:title', content: og.title || title });
  if (og.description || description) set('meta[property="og:description"]', { property:'og:description', content: og.description || description });
  if (og.image) set('meta[property="og:image"]', { property:'og:image', content: og.image });
  if (og.type) set('meta[property="og:type"]', { property:'og:type', content: og.type });
}
