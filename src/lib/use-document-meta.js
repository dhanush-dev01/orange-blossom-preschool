import { useEffect } from "react";

// Set a meta tag by name or property, creating it if missing. Returns nothing.
function setMeta(key, value, keyAttr = "name") {
  if (typeof document === "undefined") return;
  const selector = `meta[${keyAttr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (value == null || value === "") {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(keyAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

// Small helper to set title + description + Open Graph + Twitter card per page.
// Mirrors the SEO defaults from the Website Planning sheet.
export function useDocumentMeta({ title, description, image, url } = {}) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [title, description, image, url]);
}
