import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="flex items-center justify-center">
        <h1
          className="border-r-2 border-gray-400 pr-3"
          style={{
            display: "inline-block",
            margin: "0 20px 0 0",
            paddingRight: "23px",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
          }}
        >
          404
        </h1>
        <div style={{ display: "inline-block", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "49px",
              margin: 0,
            }}
          >
            This page could not be found!
          </h2>
        </div>
      </div>
    </div>
  );
}
