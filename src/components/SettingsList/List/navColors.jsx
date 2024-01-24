import { Box, Chip, Typography, useTheme } from '@mui/material';
import { useContext, useState, useEffect } from 'react'
import { AppSettingsContext, chipBorders } from '../../../theme/theme';

const NavColors = () => {
  const theme = useTheme();
  const borderColor = chipBorders(theme.palette.appSettings);
  const setNavColors = useContext(AppSettingsContext);
  const [blendIsActive, setBlendIsActive] = useState(false);
  const [discreteIsActive, setDiscreteIsActive] = useState(false);
  const [evidentIsActive, setEvidentIsActive] = useState(false);
  const navModeColor = JSON.parse(localStorage.getItem("app.settings"));

  const changeBlendIn = () => {
    setNavColors.toggleBlendin();
    setBlendIsActive(true);
    setDiscreteIsActive(false);
    setEvidentIsActive(false);
  }

  const changeDiscreteIn = () => {
    setNavColors.toggleDiscrete();
    setBlendIsActive(false);
    setDiscreteIsActive(true);
    setEvidentIsActive(false);
  }

  const changeEvidentIn = () => {
    setNavColors.toggleEvident();
    setBlendIsActive(false);
    setDiscreteIsActive(false);
    setEvidentIsActive(true);
  }

  useEffect(() => {
    if (navModeColor.navColor === 'blend-in') {
        setBlendIsActive(true);
        setDiscreteIsActive(false);
        setEvidentIsActive(false);
    } else if(navModeColor.navColor === 'discrete') {
        setBlendIsActive(false);
        setDiscreteIsActive(true);
        setEvidentIsActive(false);
    } else { 
        setBlendIsActive(false);
        setDiscreteIsActive(false);
        setEvidentIsActive(true);
    }
  }, [navModeColor.navColor])

  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgb(160, 174, 192)'  }}>nav color</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexFlow: 'wrap', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', margin: '8px 0px 0px' }}>
            <Chip onClick={changeBlendIn} label="Blend-in" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px', border: blendIsActive ? `2px solid ${borderColor.bordercolor[100]}` : '' }} />
            <Chip onClick={changeDiscreteIn} label="Discrete" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px', border: discreteIsActive ? `2px solid ${borderColor.bordercolor[100]}` : ''  }} />
            <Chip onClick={changeEvidentIn} label="Evident" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px', border: evidentIsActive ? `2px solid ${borderColor.bordercolor[100]}` : ''  }} />
        </Box>
    </>
  )
}

export default NavColors