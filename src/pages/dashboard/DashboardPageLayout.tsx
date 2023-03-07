import { Outlet } from "react-router-dom";
import DashboardIndex from "./DashboardIndex";

const DashboardPageLayout = () => {
  return (
    <><Outlet />
    <DashboardIndex /></>
  );
};

export default DashboardPageLayout;