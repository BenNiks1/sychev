import axios from 'axios'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { Popup, ArcadeCanvas } from './components'
import { ListItem } from './model'

export const App: FC = () => {
  const getData = async () => {
    const { data } = await axios.get('./db.json')
    return data
  }
  const { data } = useQuery('main', getData)
  console.log(data?.listItems)
  return (
    <div className='main'>
      <header className='header container'>
        <h1 className='header__title'>Bogdan Sychev</h1>
        <ul className='header__list'>
          {data?.listItems?.map((listItem: ListItem) => (
            <li className='list-item'>
              <a
                className='list-item__link'
                href={listItem.link}
                target={listItem.target}
                rel='noreferrer'
              >
                {listItem.text}
              </a>
            </li>
          ))}
          <Popup subnav={data?.portfolio} />
          <Popup subnav={data?.resume} isResume />
        </ul>
      </header>
      <div className='intro container'>
        <div className='intro__inner'>
          <p className='intro__text'>My name is Bogdan Sychev</p>
          <p className='intro__description'>I am frontend developer</p>
        </div>
        <ArcadeCanvas />
      </div>
    </div>
  )
}
