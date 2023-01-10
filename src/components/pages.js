import React from 'react';
import NewEntryForm from './entries/entryForm';
import Entries from './entries/entries';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { fetchEntries } from '../redux/entryActions';
// import Home from './home';
import { Routes, Route } from 'react-router-dom';

export default function Pages() {


    const dispatch = useDispatch();

    // const [entries, setEntries] = useState([])

    useEffect(() => {
        dispatch(fetchEntries())
    }, []);


    return (
       <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='players' element={<PlayerContainer />}/>
            <Route path='players/:id/hits' element={<PlayerHitsContainer />} /> */}
            <Route path="/api/entries/new" element={<NewEntryForm />} />
            <Route path="/api/entries" element={<Entries />} />
       </Routes>
    )
}
