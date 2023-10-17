import React from 'react'
import '../Styles/Help.css'
import {MdContactSupport} from 'react-icons/md'

function Help() {
  return (
    <div className='help-container'>
      <div className='centered-card'>
        <div className='button-card'>
          <h3>Help and support</h3>
          <button className='help-button'><MdContactSupport size={20}/></button>
        </div>
      </div>
    </div>
  )
}

export default Help