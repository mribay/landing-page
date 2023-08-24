import React from 'react'

function Resume() {
  return (
    <>
      <div className="container mx-auto">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "141.4286%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAFr8m7TJx0/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAFr8m7TJx0/view?utm_content=DAFr8m7TJx0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        >
          Resume
        </a>{" "}
        of Jimwell Ibay
      </div>
    </>
  )
}

export default Resume