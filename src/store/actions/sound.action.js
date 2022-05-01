import { soundService } from '../../services/sound.service'

export function query() {
    return async (dispatch) => {
        try {
            const songs = soundService.query()
            const action = { type: 'SET_SONGS', songs }
            dispatch(action)
        } catch (err) {
            console.log(err);
        }
    }
}


export function toggleMute(songId) {
    return async (dispatch, getState) => {
        try {
            const { songs } = getState().soundModule
            const updatedSong = songs.find(song => song.id === songId)
            if (updatedSong.vol === 1) updatedSong.vol = 0
            else updatedSong.vol = 1
            const action = { type: 'TOGGLE_MUTE', updatedSong }
            dispatch(action)
        } catch (err) {
            console.log('err :>> ', err);
        }
    }
}

export function playSound() {
    return async (dispatch) => {
        try {
            const action = { type: 'PLAY_SOUND' }
            dispatch(action)
        } catch (err) {
            console.log('err', err)
        }
    }
}
export function stopSound() {
    return async (dispatch) => {
        try {
            const action = { type: 'STOP_SOUND' }
            dispatch(action)
        } catch (err) {
            console.log('err', err)
        }
    }
}

export function loopSound() {
    return async (dispatch) => {
        try {
            const action = {type: 'TOGGLE_LOOP'}
            dispatch(action)
        } catch (err) {
            console.log('err', err)
        }
    }
}