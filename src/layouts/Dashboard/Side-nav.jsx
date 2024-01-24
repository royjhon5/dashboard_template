import { Box, Typography, useTheme } from "@mui/material"
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import { navColors, tokens } from "../../theme/theme";
import Logo from '../../components/Logo/Logo'

const SideNav = () => {
  const theme = useTheme();
  const setNavColor = navColors(theme.palette.appSettings);
  const setBorderColor = tokens(theme.palette.appSettings);
  return (
    <>
      <Box sx={{ position: 'sticky', display: 'flex', height: '100vh', top: 0, bottom: 0, zIndex: 10000, }}>
        <Sidebar breakPoint='md' width='280px' backgroundColor={`${setNavColor.navcolor[100]}`} style={{ borderRight: `1px solid ${setBorderColor.cards[900]}`, color: `${setBorderColor.cards[300]}` }} >
            <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', padding: '24px' }}>
                <Box sx={{ borderColor: `1px solid ${setBorderColor.cards[500]}`, borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', display:'flex', height: '40px', width: '40px', padding: '4px' }}>
                    <Logo/>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxFlex: 1, flexGrow: 1 }}> 
                    <Box sx={{ margin: '0px 0px 0px 16px' }}>
                        <Box sx={{ WebkitBoxFlex: 1, flexGrow: 1 }}>
                            <Typography variant='h5'>Company Name</Typography>
                            <Typography variant='h6'>Production</Typography>
                        </Box>
                    </Box>        
                </Box>
            </Box>
            <Box component="nav">
                <Menu iconshape="square" menuItemStyles={{ button: { height: '36px', borderRadius: '8px', padding: '6px 9px', marginTop: '5px', }}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', WebkitBoxFlex: 1, flexGrow: 1, paddingLeft: '16px', paddingRight: '16px' }}>
                        <MenuItem>
                        hello
                        </MenuItem>
                    </Box>
                </Menu>
            </Box>
        </Sidebar>
      </Box>
    </>
  )
}

export default SideNav