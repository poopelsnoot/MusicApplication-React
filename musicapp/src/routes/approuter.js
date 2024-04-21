import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Home} from '../pages/home';
import {MusicGroups} from '../pages/musicGroups';
import Error from '../pages/error';

export function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/musicGroups" element={<MusicGroups/>}/>

        <Route path="*" element={<Error details={{msg: "Page not found"}} />} />
    </Routes>
  )
}
