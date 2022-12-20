import React from 'react';
import NewEntryForm from './entries/entryForm'
// import Home from './home';
import { Routes, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='players' element={<PlayerContainer />}/>
            <Route path='players/:id/hits' element={<PlayerHitsContainer />} /> */}
            <Route path="/api/entries/new" element={<NewEntryForm />} />
       </Routes>
    )
}
