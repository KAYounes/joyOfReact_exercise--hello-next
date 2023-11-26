import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <footer>
          <div>
            This page was rendered on the server at{" "}
            {new Date().toLocaleString("en-us")}
          </div>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
