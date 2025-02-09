import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
