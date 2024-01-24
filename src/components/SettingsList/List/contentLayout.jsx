import { Box, Typography, useTheme } from "@mui/material"
import { AppSettingsContext, chipBorders, tokens } from "../../../theme/theme";
import { useContext, useEffect, useState } from "react";

const ContentLayout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.appSettings);
  const borderColor = chipBorders(theme.palette.appSettings);
  const setContentLayout = useContext(AppSettingsContext);
  const [compantIsActive, setCompactIsActive] = useState(false);
  const [wideIsActive, setWideIsActive] = useState(false);
  const ContentLayout = JSON.parse(localStorage.getItem("app.settings"));


  const changeCompact = () => {
    setContentLayout.toggleCompact();
    setCompactIsActive(true);
    setWideIsActive(false);
  }

  const changeWide = () => {
    setContentLayout.toggleWide();
    setCompactIsActive(false);
    setWideIsActive(true);
  }

  useEffect(() => {
    if (ContentLayout.stretch === true) {
        setCompactIsActive(true);
        setWideIsActive(false);
    } else {
        setCompactIsActive(false);
        setWideIsActive(true);
    }
  }, [ContentLayout.stretch])
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgb(160, 174, 192)'  }}>content</Typography>
    </Box>
    <Box sx={{ gap: '8px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0px, 140px))', margin: '8px 0px 0px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box onClick={changeCompact} sx={{ border: compantIsActive ? `2px solid ${borderColor.bordercolor[100]}` : `${colors.cards[800]}`, borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', cursor: 'pointer', display: 'flex', height: '64px', overflow: 'hidden' }}>
                <Box sx={{ backgroundColor: `${colors.cards[500]} !important`, flex: '1 1 auto', padding: '8px' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px', height: '100%', marginLeft: 'auto', marginRight: 'auto', width: '70%' }}>
                        <Box sx={{ backgroundColor: `${colors.cards[600]}`, borderColor: 'rgb(108, 115, 127)', borderRadius: '8px', borderStyle: 'dashed', borderWidth: '1px' }}></Box>
                        <Box sx={{ backgroundColor: `${colors.cards[600]}`, borderColor: 'rgb(108, 115, 127)', borderRadius: '8px', borderStyle: 'dashed', borderWidth: '1px' }}></Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '8px 0px 0px' }}>
                <Typography>Compact</Typography>
            </Box> 
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box onClick={changeWide} sx={{ border: wideIsActive ? `2px solid ${borderColor.bordercolor[100]}` : `2px solid ${colors.cards[800]}`, borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', cursor: 'pointer', display: 'flex', height: '64px', overflow: 'hidden' }}>
                <Box sx={{ backgroundColor: `${colors.cards[500]} !important`, flex: '1 1 auto', padding: '8px' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px', height: '100%', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
                        <Box sx={{ backgroundColor: `${colors.cards[600]}`, borderColor: 'rgb(108, 115, 127)', borderRadius: '8px', borderStyle: 'dashed', borderWidth: '1px' }}></Box>
                        <Box sx={{ backgroundColor: `${colors.cards[600]}`, borderColor: 'rgb(108, 115, 127)', borderRadius: '8px', borderStyle: 'dashed', borderWidth: '1px' }}></Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '8px 0px 0px' }}>
                <Typography>Wide</Typography>
            </Box> 
        </Box>
    </Box>
    </>
  )
}

export default ContentLayout