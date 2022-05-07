import React, { useState } from 'react'
import RoutesComponent from '../../routes'


const MainContainer = () => {
    const [theme, settheme] = useState('dark')
    return (
        <RoutesComponent theme={theme} settheme={settheme} />
    )
}

export default MainContainer