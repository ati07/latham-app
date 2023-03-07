import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
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
// / <HomePage /> /
const appRoutes: RouteType[] = [
  {
    index: true,
    element:<DashboardIndex /> ,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    // child: [
    //   {
    //     index: true,
    //     element: <DashboardIndex />,
    //     state: "dashboard.index"
    //   },
    //   {
    //     path: "/dashboard/default",
    //     element: <DefaultPage />,
    //     state: "dashboard.default",
    //     sidebarProps: {
    //       displayText: "Default"
    //     },
    //   },
    //   {
    //     path: "/dashboard/analytics",
    //     element: <AnalyticsPage />,
    //     state: "dashboard.analytics",
    //     sidebarProps: {
    //       displayText: "Analytic"
    //     }
    //   },
    //   {
    //     path: "/dashboard/saas",
    //     element: <SaasPage />,
    //     state: "dashboard.saas",
    //     sidebarProps: {
    //       displayText: "Saas"
    //     }
    //   }
    // ]
  },
  {
    path: "/merchants",
    element: <ComingSoon />,
    state: "merchants",
    sidebarProps: {
      displayText: "Merchants",
      icon: <AppsOutlinedIcon />
    },
    // child: [
    //   {
    //     path: "/component/alert",
    //     element: <AlertPage />,
    //     state: "component.alert",
    //     sidebarProps: {
    //       displayText: "Alert"
    //     },
    //   },
    //   {
    //     path: "/component/button",
    //     element: <ButtonPage />,
    //     state: "component.button",
    //     sidebarProps: {
    //       displayText: "Button"
    //     }
    //   }
    // ]
  },
  {
    path: "/rdr",
    element: <ComingSoon />,
    state: "rdr",
    sidebarProps: {
      displayText: "RDR Alerts",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/ethoca",
    element: <ComingSoon />,
    state: "ethoca",
    sidebarProps: {
      displayText: "ETHOCA Alerts",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
  ,
  {
    path: "/chargebacks",
    element: <ComingSoon />,
    state: "chargebacks",
    sidebarProps: {
      displayText: "Chargebacks",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/users",
    element: <ComingSoon />,
    state: "users",
    sidebarProps: {
      displayText: "Users",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;