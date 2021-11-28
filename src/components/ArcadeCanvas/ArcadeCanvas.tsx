import { FC } from 'react'
import tvImg from '../../assets/tv.png'
import { Canvas } from './Canvas'

export const ArcadeCanvas: FC = () => (
  <div className='tv-canvas'>
    <Canvas />
    <img src={tvImg} alt='arcade' className='tv-canvas__img' />
  </div>
)
