import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App";
import Archive from "./pages/archive";
import Popular from "./pages/popular";
import Settings from "./pages/settings";
import NotFound from "./pages/notfound404";
import Navigation from "./pages/nav";
import "./main.sass";
import LoadingScreen from "./pages/loadingScreen";
import Onboarding from "./pages/onboarding";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingScreen />
      <Onboarding />
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
