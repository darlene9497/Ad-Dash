import React from 'react'
import './single.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/Charts/Chart'
import Meza from '../../Components/Table/Table'

export default function Single() {
  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://img.freepik.com/free-photo/tiger-leather-jacket-stands-street-front-neon-sign-that-says-i-am-tiger_1340-39347.jpg?size=626&ext=jpg"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">My Name</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">myemail@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 2345 67 89</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  My Address, Nairobi
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Kenya</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Transactions</h1>
        <Meza/>
      </div>
    </div>
  </div>
  )
}
