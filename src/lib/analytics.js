export const GA_TRACKING_ID = "G-88S17Y02RM"; // Replace with your Google Analytics tracking ID

// Log the pageview with their URL
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
