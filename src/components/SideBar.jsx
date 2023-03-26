import { Box } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box bgcolor={"red"} flex="1" padding={2} sx={{display:{xs:"none", md:"block"}}}>SideBar</Box>
  )
}

export default SideBar