import { SET_ENTRIES, ADD_ENTRY } from './constants'

export default function reducer(state = {
    entries: [],
    loading: false
}, action) {

    switch(action.type) {
        case SET_ENTRIES:

            return  {
                ...state,
                entries: action.payload
            };

        case ADD_ENTRY:

            return {
                ...state,
                entries: [...state.entries, action.payload]
            };

        // case DELETE_ENTRY:
        //     const newPlayers = state.players.filter(p => p.id !== action.payload)
            
        //     return {
        //         ...state,
        //         entries: newEntries
        //     }

        default:
            return state;
    }
}