import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme/theme";
import Logo from "../../components/Logo/Logo";

const HorizontalNav = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.appSettings);
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems:'center', justifyContent: 'space-between',  backdropFilter: 'blur(6px)', position: 'sticky', top: 0, height: '66px', padding: '8px 24px', borderBottom: `1px solid ${colors.cards[900]}` }}>
        <Box sx={{ borderColor: `1px solid ${colors.cards[500]} !important`, borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', display:'flex', height: '40px', width: '40px', padding: '4px' }}>
            <Logo />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxFlex: 1, flexGrow: 1, color: `${colors.cards[300]}` }}> 
            <Box sx={{ margin: '0px 0px 0px 16px' }}>
                <Box sx={{ WebkitBoxFlex: 1, flexGrow: 1 }}>
                    <Typography variant='h5'>Company Name</Typography>
                    <Typography variant='h6'>Production</Typography>
                </Box>
            </Box>        
        </Box>
    </Box>
    </>
  )
}

export default HorizontalNav