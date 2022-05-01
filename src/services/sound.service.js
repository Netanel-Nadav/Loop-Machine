// Sound Imports
import tamb from '../assets/sound/_tambourine_shake_higher.mp3'
import allTrack from '../assets/sound/ALL-TRACK.mp3'
import bVock from '../assets/sound/B-VOC.mp3'
import drums from '../assets/sound/DRUMS.mp3'
import heVoc from '../assets/sound/HE-HE-VOC.mp3'
import highVoc from '../assets/sound/HIGH-VOC.mp3'
import jibrish from '../assets/sound/JIBRISH.mp3'
import lead from '../assets/sound/LEAD-1.mp3'
import uho from '../assets/sound/UUHO-VOC.mp3'



import { utilService } from './util.service'


export const soundService = {
    query,
}

function query() {
    return [
        {
            name: 'clip1',
            sound: tamb,
            id: utilService.getRandomId(),
            bgColor: '#470e58',
            vol: 1
        },
        {
            name: 'clip2',
            sound: allTrack,
            id: utilService.getRandomId(),
            bgColor: '#72178d',
            vol: 1
        },
        {
            name: 'clip3',
            sound: bVock,
            id: utilService.getRandomId(),
            bgColor: '#9b33bb',
            vol: 1
        },
        {
            name: 'clip4',
            sound: drums,
            id: utilService.getRandomId(),
            bgColor: '#bb33a4',
            vol: 1
        },
        {
            name: 'clip5',
            sound: heVoc,
            id: utilService.getRandomId(),
            bgColor: '#8d1b7a',
            vol: 1
        },
        {
            name: 'clip6',
            sound: highVoc,
            id: utilService.getRandomId(),
            bgColor: '#610d53',
            vol: 1
        },
        {
            name: 'clip7',
            sound: jibrish,
            id: utilService.getRandomId(),
            bgColor: '#c4049a',
            vol: 1
        },
        {
            name: 'clip8',
            sound: lead,
            id: utilService.getRandomId(),
            bgColor: '#f851d4',
            vol: 1
        },
        {
            name: 'clip9',
            sound: uho,
            id: utilService.getRandomId(),
            bgColor: '#ffa3eb',
            vol: 1
        },
    ]
}


