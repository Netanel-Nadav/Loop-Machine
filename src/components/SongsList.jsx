import React from 'react'
import { SongPreview } from './SongPreview'

export const SongsList = ({ songs }) => {

    return (
        <div className="songs-list">
            {songs.map(song => <SongPreview song={song.sound} key={song.id} name={song.name} bgColor={song.bgColor} id={song.id} vol={song.vol}/>)}
        </div>
    )
}
