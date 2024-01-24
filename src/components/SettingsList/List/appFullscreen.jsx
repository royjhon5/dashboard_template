import { Box, Chip, Typography } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const AppFullscreen = () => {
    const setFullscreen = () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      };
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgb(160, 174, 192)'  }}>application size</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexFlow: 'wrap', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', margin: '8px 0px 0px' }}>
    <Chip onClick={() => setFullscreen()} label="Full screen" avatar={<FullscreenIcon/>} size="medium" clickable sx={{ fontSize: '13px', borderRadius: '12px' }} />
    </Box>
    </>
  )
}

export default AppFullscreen