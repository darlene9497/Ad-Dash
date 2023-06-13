import React from 'react'
import Chart from '../../Components/Charts/Chart'
import Featured from '../../Components/Featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widget from '../../Components/Widget/Widget'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  )
}
