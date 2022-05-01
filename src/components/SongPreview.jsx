import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stopSound, toggleMute } from '../store/actions/sound.action'

export const SongPreview = ({ song, name, bgColor, id, vol }) => {

    const { isPlaying, isLooping } = useSelector(state => state.soundModule)
    const [audio, setAudio] = useState(new Audio(song))
    const [currTime, setCurrTime] = useState(null)
    const dispatch = useDispatch()
    let intervalId = useRef()


    useEffect(() => {
        if (vol === 0) audio.volume = 0
        else audio.volume = 1
        if (isPlaying) {
            audio.play()
            intervalId = setInterval(() => {
                setCurrTime(audio.currentTime)
            }, 300);
            audio.onended = function () {
                dispatch(stopSound())
            }
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            setCurrTime(0)
            clearInterval(intervalId)
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [isPlaying, vol])


    useEffect(() => {
        if (isLooping) audio.loop = true
        else audio.loop = false
    }, [isLooping])



    const onToggleMute = () => {
        dispatch(toggleMute(id))
    }


    console.log('audio.duration', audio.duration)
    return (
        <section className="song-preview flex align-center space-between" style={{ backgroundColor: bgColor }}>
            <div className="curser" style={{ left: currTime * 20 }}></div>
            <p>{name}</p>
            <button onClick={onToggleMute}>{vol === 0 ? <i className="fas fa-volume-up"></i> : <i className="fas fa-volume-off"></i>}</button>
        </section>
    )
}
