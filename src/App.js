import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { query } from './store/actions/sound.action'


import { HomePage } from './pages/HomePage'

export const App = () => {

  const { songs } = useSelector(state => state.soundModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(query())
  }, [])

  return (
    <div className="app main-layout">
      <HomePage songs={songs}/>
    </div>
  )
}
