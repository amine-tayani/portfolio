"use client";

import * as React from "react";
import Link from "next/link";

const SocialMediaLinks: React.FC = () => {
  return (
    <ul
      className="ml-1 mt-8 flex items-center absolute bottom-0 top-[70%]"
      aria-label="Social media"
    >
      <li className="mr-5 text-xs">
        <Link
          className="block hover:text-slate-200"
          href="https://github.com/amine-tayani"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </Link>
      </li>
      <li className="mr-5 text-xs">
        <Link
          className="block hover:text-slate-200"
          href="https://x.com/maximadotdev"
        >
          <span className="sr-only">Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              id="white_background"
              d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
            ></path>
          </svg>
        </Link>
      </li>
      <li className="mr-5 text-xs">
        <Link
          className="block hover:text-slate-200"
          href="https://www.linkedin.com/in/aminety"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">LinkedIn</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </Link>
      </li>
      <li className="mr-5 text-xs">
        <Link
          className="block hover:text-slate-200"
          href="https://www.figma.com/@giyoka"
        >
          <span className="sr-only">Figma</span>
          <svg
            width="100%"
            height="100%"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.5H8.5C6.567 1.5 5 3.067 5 5C5 6.933 6.567 8.5 8.5 8.5M12 1.5V8.5M12 1.5H15.5C17.433 1.5 19 3.067 19 5C19 6.933 17.433 8.5 15.5 8.5M12 8.5H8.5M12 8.5V15.5M12 8.5H15.5M8.5 8.5C6.567 8.5 5 10.067 5 12C5 13.933 6.567 15.5 8.5 15.5M12 15.5H8.5M12 15.5V19C12 20.933 10.433 22.5 8.5 22.5C6.567 22.5 5 20.933 5 19C5 17.067 6.567 15.5 8.5 15.5M15.5 8.5C17.433 8.5 19 10.067 19 12C19 13.933 17.433 15.5 15.5 15.5C13.567 15.5 12 13.933 12 12C12 10.067 13.567 8.5 15.5 8.5Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
