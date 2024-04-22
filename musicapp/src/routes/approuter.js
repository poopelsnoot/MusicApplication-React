import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Home} from '../pages/home';
import {MusicGroups, MusicGroupsList, MusicGroupsView} from '../pages/musicGroups';
import Error from '../pages/error';

export function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>

        {/* Nested Routes */}
        <Route path="/musicGroups" element={<MusicGroups />}>
          {/* Index routes render into their parent's Outlet at their parent's URL */}
          <Route index element={<MusicGroupsList />} />
          <Route index path=":id" element={<MusicGroupsView />} />
        </Route>

        <Route path="*" element={<Error details={{msg: "Page not found"}} />} />
    </Routes>
  )
}
