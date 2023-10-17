import React from 'react';
import '../Styles/Home.css';
import subscrption from '../assets/subscription_icon.png';
import invoice from '../assets/invoice.png'
import lock from '../assets/lock.png'
import money from '../assets/money.png'
import Coloumchart from '../Container/Coloumchart';
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import Table from './Table';

function Home() {
  return (
    <div className='home-main-container'>
      <div className="headings">
        <div>
          <h2 className="content">Hello I'm Surya &nbsp;👋,</h2>
        </div>
        <div className="search-bar">
          <i className="search-icon">
            <AiOutlineSearch size={15}/>
          </i>
          <input className="search-input" type="text" placeholder="search" />
        </div>
      </div>
      <div className='home-container'>
        <div className='card'>
          <div className='card-png'>
            <img src={subscrption} alt='subscrption' width={50} />
          </div>
          <div className='card-fonts'>
            <span className='earnings'>Earnings</span>
            <span className='amount'>$198K</span>
            <p className='month'><span className='color'><AiOutlineArrowUp className='icons' size={15}/>37.8</span>this month</p>
          </div>
        </div>
        <div className='card'>
          <div className='card-invoice-png'>
            <img src={invoice} alt='subscrption' />
          </div>
          <div className='card-fonts'>
            <span className='earnings'>Orders</span>
            <span className='amount'>$2.4K</span>
            <p className='month'><span className='colortwo'><AiOutlineArrowDown size={15}/>2%</span>this month</p>
          </div>
        </div>
        <div className='card'>
          <div className='card-png'>
            <img src={money} alt='subscrption' />
          </div>
          <div className='card-fonts'>
            <span className='earnings'>Balance</span>
            <span className='amount'>$2.4K</span>
            <p className='month'><span className='colortwo'><AiOutlineArrowDown size={15}/>2%</span>this month</p>
          </div>
        </div>
        <div className='card'>
          <div className='card-lock-png'>
            <img src={lock} alt='subscrption' className='lock-png' />
          </div>
          <div className='card-fonts'>
            <span className='earnings'>Total sales</span>
            <span className='amount'>$89K</span>
            <p className='month'><span className='color'><AiOutlineArrowUp size={15} />11%</span>this week</p>
          </div>
        </div>
      </div>
      <div className='main-chart'>
        <Coloumchart /> 
      </div>
      <div>
       <Table />
      </div>
    </div>
  );
}

export default Home;
