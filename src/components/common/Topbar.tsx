import { IconButton, Toolbar, Typography } from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../redux/features/appState/appStateSlice";
import { RootState } from '../../redux/app/store'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar = () => {
  const { sidebar } = useSelector((state: RootState) => state.appState)
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    dispatch(setSidebar(true))
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        // width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        // ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar style={{display: 'flex',justifyContent: 'space-between'}}>
        {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(sidebar && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton> */}
        <Typography variant="h6" noWrap component="div">
          <img width='200px' height='50px' src='https://cdn-ieoom.nitrocdn.com/XrlcMEpKXkhpdcpugCgoCveHYaewvcpt/assets/images/optimized/wp-content/uploads/2023/02/89eb4cc10ad56b9f8ebe49674fb8b343.LogoCharge-1.svg' alt='img' />
        </Typography>
        <LogoutOutlinedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;