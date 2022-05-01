import React from 'react'
import { SongsList } from '../components/SongsList'
import { Player } from '../components/Player'


export const HomePage = ({ songs }) => {
    return (
        <section className="home-page flex column justify-center">
            <h1>Welcome to Loop-Machine</h1>
            {songs && <SongsList songs={songs} />}
            {songs && <Player songs={songs} />}
        </section>
    )
}
