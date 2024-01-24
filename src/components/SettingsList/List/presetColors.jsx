import { Box, Typography, Chip, useTheme } from "@mui/material"
import { useContext } from "react"
import { AppSettingsContext, presetColors } from "../../../theme/theme"
import LensIcon from '@mui/icons-material/Lens';

const PresetColors = () => {
  const theme = useTheme();
  const colors = presetColors(theme.palette.appSettings);
  const setPresets = useContext(AppSettingsContext)

  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgb(160, 174, 192)'  }}>primary color</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexFlow: 'wrap', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', margin: '8px 0px 0px' }}>
            <Chip onClick={setPresets.toggleGreen} icon={<LensIcon style={{ fill: '#16B364' }} fontSize="large"></LensIcon>} label="Green" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px' , border: `2px solid ${colors.greenborder[100]}`  }} />
            <Chip onClick={setPresets.toggleBlue} icon={<LensIcon style={{ fill: '#2970FF' }} fontSize="large"></LensIcon>} label="Blue" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px' , border: `2px solid ${colors.blueborder[100]}`  }} />
            <Chip onClick={setPresets.toggleIndigo} icon={<LensIcon style={{ fill: '#6366F1' }} fontSize="large"></LensIcon>} label="Indigo" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px' , border: `2px solid ${colors.indigoborder[100]}` }} />
            <Chip onClick={setPresets.togglePurple} icon={<LensIcon style={{ fill: '#9E77ED' }} fontSize="large"></LensIcon>} label="Purple" size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px' , border: `2px solid ${colors.purpleborder[100]}` }} />
        </Box>
    </>
  )
}

export default PresetColors