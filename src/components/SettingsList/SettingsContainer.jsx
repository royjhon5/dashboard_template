import { Box, IconButton, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import PresetColors from "./List/presetColors";
import PaletteMode from "./List/paletteMode";
import NavColors from "./List/navColors";
import AppLayout from "./List/appLayout";
import ContentLayout from "./List/contentLayout";
import AppContrast from "./List/appContrast";
import AppFullscreen from "./List/appFullscreen";


const SettingsContainer = (props) => {
  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', width: '100%' }}>
            <Typography variant="h5">App Settings</Typography>
            <IconButton onClick={props.data}>
                <CloseIcon />
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',  flexDirection: 'column', padding: '21px' }}>
            <PresetColors />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '21px' }}>
            <PaletteMode />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '21px' }}>
            <NavColors />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '21px' }}>
            <AppLayout />
        </Box>
        <Box  sx={{ display: 'flex', flexDirection: 'column', padding: '21px' }}>
            <ContentLayout />
        </Box>
        <Box  sx={{ display: 'flex', flexDirection: 'column', padding: '21px' }}>
            <AppContrast />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '21px' }}>
            <AppFullscreen />
        </Box>
    </>
  )
}

export default SettingsContainer