import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ComingSoon from "../assets/ComingSoon";
import DashboardPage from "../pages/dashboard/DashboardPage";
import PeopleIcon from '@mui/icons-material/People';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MerchantsPage from "../pages/merchants/MerchantsPage";
// import RdrAlertPage from "../pages/rdrAlert/rdrAlertPage";
import EthocaAlertPage from "../pages/ethocaAlert/EthocaAlertPage";
import ChargebacksPage from "../pages/chargebacks/ChargebacksPage";
import RdrAlertPage from "../pages/rdrAlert/RdrAlertPage";
// / <HomePage /> /
const appRoutes: RouteType[] = [
  {
    index: true,
    element:<DashboardPage /> ,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
  },
  {
    path: "/merchants",
    element: <MerchantsPage />,
    state: "merchants",
    sidebarProps: {
      displayText: "Merchants",
      icon: <PeopleIcon />
    },
  },
  {
    path: "/rdr",
    element: <RdrAlertPage />,
    state: "rdr",
    sidebarProps: {
      displayText: "RDR Alerts",
      icon: <CircleNotificationsOutlinedIcon />
    }
  },
  {
    path: "/ethoca",
    element: <EthocaAlertPage />,
    state: "ethoca",
    sidebarProps: {
      displayText: "ETHOCA Alerts",
      icon: <CrisisAlertOutlinedIcon />
    }
  }
  ,
  {
    path: "/chargebacks",
    element: <ChargebacksPage />,
    state: "chargebacks",
    sidebarProps: {
      displayText: "Chargebacks",
      icon: <CurrencyExchangeOutlinedIcon />
    }
  },
  {
    path: "/users",
    element: <ComingSoon />,
    state: "users",
    sidebarProps: {
      displayText: "Users",
      icon: <PermIdentityOutlinedIcon />
    }
  }
];

export default appRoutes;