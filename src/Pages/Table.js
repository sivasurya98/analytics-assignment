import React from 'react'
import '../Styles/Table.css'
import { tabledata } from '../Utils/DashboardData'
import {AiOutlineSearch} from 'react-icons/ai'

function Table() {
  return (
    <div className='table'>
      <div className='table-main-container'>
            <div className='table-container'>
              <div style={{ fontWeight: 'bold' }}>Product Sell</div>
              <div className='input-cont'>
              <div class="search-bar-table">
                <i class="search-icon">
                  <AiOutlineSearch size={15}/>
                </i>
                <input className="input" type="text" placeholder="search" />
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
                <div className='table-head'>
                    <div className='table-data'>Product name</div>
                    <div className='table-right-head'>
                        <div className='table-data'>Stock</div>
                        <div className='table-data'>Price</div>
                        <div className='table-data'>Total sales</div>
                    </div>
                </div>
                {tabledata.map(obj => (
                    <div className='table-image-sub'>
                      <div className='image-container'>
                        <img className='image' width={100}  height={60} src={obj.img} alt="noimg" />
                        <div className='table-discription'>
                          <div className='fonts'>{obj.name}</div>
                          <div className='sub-fonts'>{obj.discription}</div>
                        </div>
                      </div>
                      <div className='table-data-sub'>
                        <div style={{ color: 'gray' }} className='table-dataone'>{obj.stock}</div>
                        <div style={{ fontWeight: 'bold' }} className='table-dataone'>{obj.prize}</div>
                        <div style={{ color: 'gray' }} className='table-dataone'>{obj.Totalsales}</div>
                      </div>
                    </div>
                ))}
                </div>
        </div>
    </div>
  )
}

export default Table