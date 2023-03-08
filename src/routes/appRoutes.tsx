import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import ComingSoon from "../assets/ComingSoon";
import DashboardPage from "../pages/dashboard/DashboardPage";
import PeopleIcon from '@mui/icons-material/People';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
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
    element: <ComingSoon />,
    state: "merchants",
    sidebarProps: {
      displayText: "Merchants",
      icon: <PeopleIcon />
    },
  },
  {
    path: "/rdr",
    element: <ComingSoon />,
    state: "rdr",
    sidebarProps: {
      displayText: "RDR Alerts",
      icon: <CircleNotificationsOutlinedIcon />
    }
  },
  {
    path: "/ethoca",
    element: <ComingSoon />,
    state: "ethoca",
    sidebarProps: {
      displayText: "ETHOCA Alerts",
      icon: <CrisisAlertOutlinedIcon />
    }
  }
  ,
  {
    path: "/chargebacks",
    element: <ComingSoon />,
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