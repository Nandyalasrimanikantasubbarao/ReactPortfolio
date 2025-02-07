import { Outlet } from "react-router-dom";
import Navbar from "./Componets/NavBar";

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
