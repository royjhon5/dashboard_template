import { Box, Chip, Typography, useTheme } from "@mui/material"
import { AppSettingsContext, chipBorders } from "../../../theme/theme";
import { useContext, useState, useEffect } from "react";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const PaletteMode = () => {
  const theme = useTheme();
  const borderColor = chipBorders(theme.palette.appSettings);
  const setMode = useContext(AppSettingsContext);
  const [LightisActive, setLightIsActive] = useState(false);
  const [DarkisActive, setDarkIsActive] = useState(false);
  const appMode = JSON.parse(localStorage.getItem("app.settings"));

  const setLightMode = () => {
    setLightIsActive(true);
    setDarkIsActive(false);
    setMode.toggleLightMode();
  }

  const setDarkMode = () => {
    setDarkIsActive(true);
    setLightIsActive(false);
    setMode.toggleDarkMode();
  }

  useEffect(() => {
    if (appMode.paletteMode === 'light') {
        setLightIsActive(true);
        setDarkIsActive(false);
    } else {
        setDarkIsActive(true);
        setLightIsActive(false);
    }
  }, [appMode.paletteMode])


  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgb(160, 174, 192)'  }}>color scheme</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexFlow: 'wrap', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', margin: '8px 0px 0px' }}>
        <Chip onClick={setLightMode} icon={<LightModeOutlinedIcon fontSize="medium"></LightModeOutlinedIcon>} label="Light" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px', border: LightisActive ? `2px solid ${borderColor.bordercolor[100]}` : '' }}></Chip>
        <Chip onClick={setDarkMode} icon={<DarkModeOutlinedIcon fontSize="medium"></DarkModeOutlinedIcon>} label="Dark" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px', border: DarkisActive ? `2px solid ${borderColor.bordercolor[100]}` : '' }}></Chip>
    </Box>
    </>
  )
}

export default PaletteMode