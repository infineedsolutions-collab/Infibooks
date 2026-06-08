import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "InfiBooks - AI-Powered CFO, Bookkeeping & Finance Automation Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #FBFAF7 0%, #FFFFFF 55%, #EEF4F8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              height: "56px",
              width: "56px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              background: "linear-gradient(120deg, #2E6E9C, #7CC6E0)",
              color: "white",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            i
          </div>
          <div style={{ fontSize: "30px", fontWeight: 800, color: "#1B2430" }}>
            InfiBooks
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "999px",
                background: "rgba(216,177,95,0.15)",
                color: "#B88A44",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              DUBAI CFO ADVISORY · AI FINANCE AUTOMATION
            </div>
          </div>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              color: "#1B2430",
              lineHeight: 1.1,
              maxWidth: "950px",
            }}
          >
            AI-Powered CFO Intelligence for Modern Businesses
          </div>
          <div style={{ marginTop: "20px", fontSize: "26px", color: "#667085", maxWidth: "900px" }}>
            Clean books · CFO dashboards · cash-flow visibility · finance automation
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: "8px",
            width: "100%",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #2E6E9C, #4F93BC, #7CC6E0, #D8B15F)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
