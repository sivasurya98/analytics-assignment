import React from 'react'
import '../Styles/Customer.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { customerdata } from '../Utils/DashboardData'

function Customer() {
  return (
    <div className='table-customer'>
      <div className='table-main-container'>
        <div className='table-container-customer'>
          <div style={{ fontWeight: 'bold' }}>
            Customer Info
          </div>
          <div className='input-cont-customer'>
            <div class="search-bar-table">
              <i class="search-icon">
                <AiOutlineSearch size={15}/>
              </i>
              <input className="input-customer" type="text" placeholder="search" />
            </div>
              <div>
                <select className="dropdown">
                  <option value="option1">Last 30days</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
        </div>
          <div className='table-sub-container'>
            <div className='table-head-customer'>
              <div className='table-data'>S:no</div>
                <div className='table-data'>Name</div>
                  <div className='table-right-head'>
                    <div className='table-data'>Product name</div>
                    <div className='table-data'>Price</div>
                    <div className='table-data'>Quantity</div>
                  </div>
            </div>
              {customerdata.map((obj, index) => (
                <div className='table-image-sub-customer'>
                  <div className='image-container'>
                    <div className='table-discription-customer'>
                      <div className='fonts'>{index + 1}</div>
                        <div className='fonts'>{obj.name}</div>
                      </div>
                  </div>
                  <div className='table-data-sub-customer'>
                    <div style={{ color: 'gray' }} className='table-dataone-customer'>{obj.productname}</div>
                    <div style={{ fontWeight: 'bold' }} className='table-dataone-customer'>{obj.prize}</div>
                    <div style={{ color: 'gray' }} className='table-dataone-customer'>{obj.quantity}</div>
                  </div>
                </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Customer