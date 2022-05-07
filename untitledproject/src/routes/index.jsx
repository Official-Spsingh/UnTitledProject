import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../components/Landing'
import NavBar from '../components/NavBar'
import NextPage from '../components/NextPage';
const RoutesComponent = (props) => {
    const { settheme, ...otherProps } = props
    return (
        <BrowserRouter>
            <NavBar {...props} />
            <Routes>
                <Route path="/" element={<Landing {...otherProps} />} />
                <Route path="nextpage" element={<NextPage {...otherProps} />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent