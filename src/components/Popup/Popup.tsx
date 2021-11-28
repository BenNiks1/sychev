import { FC, useEffect, useRef, useState } from 'react'
import { ReactComponent as ArrowTop } from '../../assets/arrow-top.svg'
import { Subnav, SubnavPopup } from '../../model'

interface PopupProps {
  subnav: Subnav
  isResume?: boolean
}

export const Popup: FC<PopupProps> = ({ subnav, isResume }) => {
  const [isVisiblePopup, setIsVisiblePopup] = useState<boolean>(false)
  const portfolioSubnav = useRef()

  const toggleVisiblePopup = () => {
    setIsVisiblePopup(!isVisiblePopup)
  }
  const handleOutsideClick = (e: any) => {
    if (!e.path.includes(portfolioSubnav.current)) {
      setIsVisiblePopup(false)
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    // @ts-expect-error
    <li className='list-item' ref={portfolioSubnav}>
      <div className='list-item__link' onClick={toggleVisiblePopup}>
        {subnav?.name}
        <ArrowTop
          className={!isVisiblePopup ? 'rotated' : ''}
          viewBox='0 0 10 6'
        />

        {isVisiblePopup && (
          <ul className='subnav__list'>
            {subnav.popup.map((popup: SubnavPopup, index: number) => (
              <li className='subnav__list-item' key={index}>
                {isResume ? (
                  <>
                    <a href={popup.link} download={popup.download}>
                      {popup.text}
                    </a>
                    <p>{popup.extension}</p>
                  </>
                ) : (
                  <>
                    <a href={popup.link} target={popup.target}>
                      {popup.text}
                    </a>
                    <a href={popup.srcLink} target={popup.target}>
                      {popup.extension}
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}
