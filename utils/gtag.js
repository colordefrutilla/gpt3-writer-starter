export const GA_TRACKING_ID = "G-SNERLHZLQP";

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);
  }
};

// Log a pageview with the current URL
export const logPageView = () => {
  if (typeof window !== "undefined") {
    gtag("config", GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};
