import { useEffect } from "react";

// Small helper to set document title per page (SPA equivalent of TanStack's `head.meta.title`).
export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}
