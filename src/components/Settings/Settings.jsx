import { Fragment, useState } from "react"
import { tokens } from "../../theme/theme";
import { Drawer, Fab } from "@mui/material";
import { useTheme } from "@emotion/react";
import SettingsContainer from '../SettingsList/SettingsContainer'
import SettingsIcon from "../Icons/SettingsIcon";

const Settings = () => {
  const [drawer, setDrawer] = useState({right: false});
  const theme = useTheme();
  const colors = tokens(theme.palette.appSettings)
  const openDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      } 
      setDrawer({...drawer, [anchor]: open })
  };
  return (
    <>
        {['right'].map((anchor) => (
            <Fragment key={anchor}>
                <Fab color="primary" size="small" onClick={openDrawer(anchor, true)}>
                    <SettingsIcon/>
                </Fab>
                <Drawer 
                PaperProps={{ sx: { width: '100%', maxWidth: '440px', background: `${colors.cards[500]} !important`, boxShadow: 1, color: `${colors.black[100]}` } }}
                BackdropProps={{ invisible: true }}
                anchor={anchor}
                open={drawer[anchor]}
                onClose={openDrawer(anchor, false)}
                >
                    <SettingsContainer data={openDrawer(anchor, false)} />
                </Drawer>
            </Fragment>
        ))}

    </>
  )
}

export default Settings