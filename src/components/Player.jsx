import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loopSound, playSound, stopSound } from '../store/actions/sound.action'

export const Player = ({ songs }) => {

    const { isPlaying, isLooping } = useSelector(state => state.soundModule)
    const dispatch = useDispatch()

    const onPlaySound = () => {
        dispatch(playSound())
    }

    const onStopSound = () => {
        dispatch(stopSound())
    }

   
    const onLoopSound = () => {
        dispatch(loopSound())
    }
    
    return (
        <section className="player">
            <div className="btn-container flex justify-center">
                <button onClick={onPlaySound} className={`${isPlaying ? 'playing' : ''}`}><i className="fas fa-play"></i></button>
                <button onClick={onStopSound} ><i className="fas fa-stop"></i></button>
                <button onClick={onLoopSound} className={`${isLooping ? 'looping' : ''}`}><i className="fas fa-redo-alt"></i></button>
            </div>
        </section>
    )
}
