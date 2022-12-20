import { SET_ENTRIES, ADD_ENTRY } from "./constants";

export function fetchEntries() {
    
    return (dispatch) => {
        fetch("http://localhost:4000/api/entries")
        .then(r => r.json())
        .then(entries => {
            dispatch({type: SET_ENTRIES, payload: entries})
        })
    }   
}

export function createEntry(entry) {

    return (dispatch) => {
        fetch("http://localhost:4000/api/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then(e => e.json())
        .then(p => dispatch({type: ADD_ENTRY, payload: p}))
    }
}
