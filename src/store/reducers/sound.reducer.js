

const initialState = {
    songs: null,
    isPlaying: false,
    isLooping: false
}


export function soundReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_SONGS':
            newState = { ...state, songs: action.songs }
            break;
        case 'PLAY_SOUND':
            // newState = { ...state, isPlaying: true }
            newState = { ...state, isPlaying: !state.isPlaying }
            break;
        case 'STOP_SOUND':
            newState = { ...state, isPlaying: false }
            break;
        case 'TOGGLE_MUTE':
            newState = { ...state, songs: state.songs.map(song => song.id === action.updatedSong.id ? action.updatedSong : song) }
            break;
        case 'TOGGLE_LOOP':
            newState = { ...state, isLooping: !state.isLooping }
            break;

        default:
            break;
    }

    return newState

}
