import React from 'react'
import './Dashboard.css';
function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-2" style={{backgroundColor:'yellow'}}>
        1
        </div>
      <div className="col-sm-8" style={{backgroundColor:'aqua'}}>
     
  <div className="form-group has-search">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search"/>
  </div>
  
 
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Search this blog"/>
    <div className="input-group-append">
      <button className="btn btn-secondary" type="button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>
  
  <p className="mt-4 text-center"><a href="https://www.gungorbudak.com/blog/2018/12/12/bootstrap-4-search-box-with-search-icon/">See how it's done on my blog</a></p>
  

        </div>
      <div className="col-sm-2" style={{backgroundColor:'yellow'}}>
        1
        </div>
      </div>
      
      </div>
  )
}

export default Dashboard