import { useContext } from 'react'
import { AppSettingsContext } from './theme/theme';
import {Box, Button} from '@mui/material'

const SampleColorsButton = () => {
    const setMode = useContext(AppSettingsContext);
  return (
    <>
     <Box>
            <Button onClick={setMode.toggleEvident}>
                toggle light
            </Button>
            <Button onClick={setMode.toggleDiscrete}>
                toggle dark
            </Button>
        </Box>
    </>
  )
}

export default SampleColorsButton