import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import Home from "@/pages/Home";
import Programmes from "@/pages/Programmes";
import ProgrammeDetail from "@/pages/ProgrammeDetail";
import Sambhavam from "@/pages/Sambhavam";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Expansion from "@/pages/Expansion";
import ForABetterWorld from "@/pages/ForABetterWorld";
import Journal from "@/pages/Journal";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

// TanStack Router's scrollRestoration replacement: jump to top on every path change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollToTop />
      <SiteHeader />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/programmes/:programmeId" element={<ProgrammeDetail />} />
          <Route path="/sambhavam" element={<Sambhavam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expansion" element={<Expansion />} />
          <Route path="/for-a-better-world" element={<ForABetterWorld />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  );
}
