export const pageview = (url : string) => {
    window.gtag("config", NEXT_PUBLIC_APP_GA_MEASUREMENT_ID, {
        page_path: url,
    });
};