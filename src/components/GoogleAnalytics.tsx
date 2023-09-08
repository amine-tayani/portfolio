'use client';

import Script from 'next/script'
import { useEffect } from "react";
import {pageview} from "@/lib/gtagHelper"
import {usePathname, useSearchParams} from 'next/navigation'



export default function GoogleAnalytics(){



    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
    
        pageview(NEXT_PUBLIC_APP_GA_MEASUREMENT_ID, url);
        
    }, [pathname, searchParams, NEXT_PUBLIC_APP_GA_MEASUREMENT_ID]);


    return (
        <>
            <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}`}/>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
)}