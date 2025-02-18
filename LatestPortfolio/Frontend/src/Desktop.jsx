import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import DesktopApp from "./DesktopApp"; // Your main app component

const App = () => {
  if (isMobile || isTablet) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <h2>This application is only available on laptops and desktops.</h2>
      </div>
    );
  }

  return <DesktopApp />;
};

export default App;
