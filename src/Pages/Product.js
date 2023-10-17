import React, { useState } from 'react'
import { Productdata } from '../Utils/DashboardData'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {BiRightArrowAlt} from 'react-icons/bi'
import '../Styles/Product.css'

function Product() {
    const itemsperpage = 5;
    const [currentpage, setcurrentpage] = useState(1)
    const totalitems = Productdata.length;
    const totalpages = Math.ceil (totalitems / itemsperpage)
    const startindex = (currentpage -1) * itemsperpage
    const endindex = startindex + itemsperpage;
    const currentdata = Productdata.slice(startindex, endindex)
    const handlepagechange = (page) => {
        setcurrentpage(page)
    }
  return (
    <div className='total-table'>
      <div className='table-main-container'>
        <div className='table-container'>
          <div className='product-font'>Product Sell</div>
            <div className='input-cont'>
              <div class="search-bar-table">
                <i class="search-icon">
                  <AiOutlineSearch size={15}/>
                </i>
                <input class="input" type="text" placeholder="search" />
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
            {currentdata.map(obj => (
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
        <div className='pagination'>
        <div style={{ display: 'flex', gap: '5px' }}>
          <h3>Showing of result:</h3>
          <p style={{ marginTop: '3px'}}>{`${itemsperpage} of ${Productdata.length}`}</p>
        </div>
          <button className='page-button' onClick={()=>handlepagechange(currentpage -1)} disabled={currentpage === 1}><BiLeftArrowAlt size={20}/></button>
          <span>Page{currentpage} of {totalpages}</span>
          <button className='page-button' onClick={()=> handlepagechange(currentpage + 1)} disabled={currentpage === totalpages}><BiRightArrowAlt size={20} /></button>
        </div>
    </div>
  )
}

export default Product