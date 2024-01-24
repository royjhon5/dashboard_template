import { Box, Typography, useTheme } from "@mui/material"
import { AppSettingsContext, chipBorders, tokens } from "../../../theme/theme";
import LayoutLogo from "./logo/LayoutLogo";
import { useContext, useEffect, useState } from "react";


const AppLayout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.appSettings);
  const borderColor = chipBorders(theme.palette.appSettings);
  const setAppLayout = useContext(AppSettingsContext);
  const [verticalIsActive, setVerticalIsActive] = useState(false);
  const [horizontalIsActive, setHorizontalIsActive] = useState(false);
  const AppLayoutDesign = JSON.parse(localStorage.getItem('app.settings'));

  const changeVertical = () => {
    setAppLayout.toggleVertical();
    setVerticalIsActive(true);
    setHorizontalIsActive(false);
  }

  const changeHorizontal = () => {
    setAppLayout.toggleHorizontal();
    setVerticalIsActive(false);
    setHorizontalIsActive(true);
  }

  useEffect(() => {
    if (AppLayoutDesign.layout === 'vertical') {
        setVerticalIsActive(true);
        setHorizontalIsActive(false);
    } else {
        setVerticalIsActive(false);
        setHorizontalIsActive(true);
    }
  }, [AppLayoutDesign.layout])


  return (
    <>
     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgb(160, 174, 192)'  }}>layout</Typography>
            </Box>
            <Box sx={{ display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(2, minmax(0px, 140px))', margin: '8px 0px 0px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box onClick={changeVertical} sx={{ backgroundColor: `${colors.cards[500]}`, border: verticalIsActive ? `2px solid ${borderColor.bordercolor[100]}` : `${colors.cards[800]}`, borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', cursor: 'pointer', display: 'flex', height: '88px' }}>
                        <Box sx={{ display: 'flex', flex: '1 1 auto' }}>
                            <Box sx={{ borderRight: '1px dashed rgb(108, 115, 127)', padding: '4px 8px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'inline-flex', height: '12px', width: '12px' }}>
                                        <LayoutLogo />
                                    </Box>
                                    <Box sx={{ backgroundColor: `${borderColor.bordercolor[100]}`, borderRadius: '2px', height: '4px', width: '26px', margin: '8px 0px 0px' }}></Box>
                                    <Box sx={{ backgroundColor: `${colors.cards[700]}`, borderRadius: '2px', height: '4px', width: '26px', margin: '6px 0px 0px' }}></Box>
                                    <Box sx={{ backgroundColor: `${colors.cards[700]}`, borderRadius: '2px', height: '4px', width: '26px', margin: '6px 0px 0px' }}></Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flex: '1 1 auto', padding: '8px', width: '100%' }}>
                            <Box sx={{ backgroundColor: `${colors.cards[600]}`, borderColor: 'rgb(108, 115, 127)', borderRadius: '8px', borderStyle: 'dashed', borderWidth: '1px', flex: '1 1 auto' }}></Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', margin: '8px 0px 0px' }}><Typography>Vertical</Typography></Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box onClick={changeHorizontal} sx={{ backgroundColor: `${colors.cards[500]}`, border: horizontalIsActive ? `2px solid ${borderColor.bordercolor[100]}` : `${colors.cards[800]}`, borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', cursor: 'pointer', display: 'flex', height: '88px' }}>
                        <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
                            <Box sx={{ borderBottom: '1px dashed rgb(108, 115, 127)', paddingLeft: '8px', paddingRight: '8px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center' }}>
                                    <Box sx={{ display: 'inline-flex', height: '12px', width: '12px' }}><LayoutLogo/></Box>
                                    <Box sx={{ backgroundColor: `${borderColor.bordercolor[100]}`, borderRadius: '2px', height: '4px', width: '16px', margin: '0px 0px 0px 8px' }}></Box>
                                    <Box sx={{ backgroundColor: `${colors.cards[700]}`, borderRadius: '2px', height: '4px', width: '16px', margin: '0px 0px 0px 8px' }}></Box>
                                    <Box sx={{ backgroundColor: `${colors.cards[700]}`, borderRadius: '2px', height: '4px', width: '16px', margin: '0px 0px 0px 8px' }}></Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flex: '1 1 auto', padding: '8px' }}>
                                <Box sx={{ backgroundColor: `${colors.cards[600]}`, borderColor: 'rgb(108, 115, 127)', borderRadius: '8px', borderStyle: 'dashed', borderWidth: '1px', flex: '1 1 auto' }}></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', margin: '8px 0px 0px' }}><Typography>Horizontal</Typography></Box>
                </Box>
            </Box>
    </>
  )
}

export default AppLayout