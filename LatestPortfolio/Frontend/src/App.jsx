import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import AppLayout from "./AppLayout";

function App() {
  if (isMobile || isTablet) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          For the best experience, this application is only available on laptops
          and desktops.
          <br />I am working on providing the same experience on mobile devices.
        </h2>
      </div>
    );
  }

  return <AppLayout className="overflow-hidden" />;
}

export default App;
