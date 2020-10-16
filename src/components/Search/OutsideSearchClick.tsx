import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactElement | React.ReactElement[]
  onOutsideClick: Function
}

const OutsideSearchClick = (props: Props) => {
  const wrapperRef = useRef(null)

  const handleClick = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      props.onOutsideClick()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div style={{ width: '100%' }} ref={wrapperRef}>
      {props.children}
    </div>
  )
}

export default OutsideSearchClick
