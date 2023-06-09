import React, { useContext} from 'react'
import './DropDown.css'
import { Context } from '../../Utils/context/context'
import { Modal } from '../../Modal/Modal'
import arrowUp from '../../assets/Arrow/up-arrow.png'
import arrowDown from '../../assets/Arrow/down-arrow.png'

export const DropDown = () => {
    const {countiesSelected} = useContext(Context)
    const {removeCountry} = useContext(Context)

    console.log('country', countiesSelected)

    const {toggleShow, isDrop} = useContext(Context)
  return (
    <div className='WrapperList'>
      <p>Язык</p>
      <div className='list'>
          <div className='item-list'>
              {countiesSelected.map((country, key) => <div className='countries' key={key}>
                <p>
                  <img aly='#' src={country.image}/>
                  {country.value}
                  <button onClick={() => removeCountry(country.id)}>{`[x]`}</button>
                </p>
              </div> )}
          </div>
          {isDrop ? <button onClick={toggleShow} className='btnShow'><img src={arrowUp}/></button> : <button onClick={toggleShow} className='btnShow'><img src={arrowDown}/></button>}
      </div>
      <Modal isDrop={isDrop}/>
    </div>
    
  )
}
