import { Box, Chip, Typography, useTheme } from "@mui/material"
import { AppSettingsContext, chipBorders } from "../../../theme/theme";
import { useContext, useEffect, useState } from "react";

const AppContrast = () => {
  const theme = useTheme();
  const colors = chipBorders(theme.palette.appSettings);
  const [normal, setNormal] = useState(false);
  const [high, setHigh] = useState(false);
  const setAppContrast = useContext(AppSettingsContext);
  const appContrast = JSON.parse(localStorage.getItem("app.settings"));

  const changeNormal = () => {
    setAppContrast.toggleNormal();
    setNormal(true);
    setHigh(false);
  }

  const changeHigh = () => {
    setAppContrast.toggleHigh();
    setNormal(false);
    setHigh(true)
  }

  useEffect(() => {
    if (appContrast.contrast === 'normal') {
        setNormal(true);
        setHigh(false);
    } else {
        setNormal(false);
        setHigh(true)
    }
  }, [appContrast.contrast])

  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgb(160, 174, 192)'  }}>contrast</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexFlow: 'wrap', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', margin: '8px 0px 0px' }}>
        <Chip onClick={changeNormal} label="Normal" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px', border: normal ? `2px solid ${colors.bordercolor[100]}` : '' }} />
        <Chip onClick={changeHigh} label="High" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px', border: high ? `2px solid ${colors.bordercolor[100]}` : ''  }} />
    </Box>
    </>
  )
}

export default AppContrast