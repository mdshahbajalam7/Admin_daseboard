import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../Theme'
import { InputBase } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Topbar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colormode = useContext(ColorModeContext)
    return (
        <Box display={'flex'} justifyContent='space-between' p={2}>
            {/* Search Bar */}
            <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
                <IconButton type='button' sx={{ p: 1 }}><SearchOutlinedIcon /></IconButton>
            </Box>

            {/* Icons Section */}
            <Box display={'flex'}>
                <IconButton onClick={colormode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}

                </IconButton>
                <IconButton><NotificationsOutlinedIcon /></IconButton>
                <IconButton><SettingsOutlinedIcon /></IconButton>
                <IconButton><PersonOutlineOutlinedIcon /></IconButton>
            </Box>

        </Box>
    )
}

export default Topbar