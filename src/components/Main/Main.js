import React from 'react'
import './Main.css'
import Covid from '../../image/Covid-logo.png';
import logo from '../../image/logo.png';
import poster from '../../image/poster.png'
import img from '../../image/img.png'
import banner1 from '../../image/banner1.png'
import banner2 from '../../image/banner2.png'
import banner3 from '../../image/banner3.png'
import banner4 from '../../image/banner4.png'
import deceased from '../../image/deceased.png'
import injection from '../../image/Injection.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Account from '../Account/Account';



export const Main = () => {

var [covidData, setData] = useState([])

var [Totalconfirmed, setCONFIRMED] = useState('')
var [Totaldeceased, setDECEASED] = useState('')
var [Totalrecovered, setRECOVERED] = useState('')
var [Totaltested, setTESTED] = useState('')

{/*  <!-- Active Link Onclick --> */}  

const [tab1,setTab1] =useState(true);
const [tab2,setTab2] =useState(false);

const [tab1active,setTab1active] =useState("nav-link active");
const [tab2active,setTab2active] =useState("nav-link");

{/*  <!-- Active Link Onclick End --> */}  


var CONFIRMED=0;
var DECEASED=0;
var RECOVERED=0;
var TESTED=0;

  
const getData=async()=>{
    const res = await axios.get ("https://data.covid19india.org/v4/min/data.min.json");
    setData(res);
    console.log(res)
   
    Object.values(res.data).forEach(function
      (i){
        CONFIRMED = CONFIRMED+(i.total.confirmed)
        DECEASED = DECEASED+(i.total.deceased)
        RECOVERED = RECOVERED +(i.total.recovered)
        TESTED = TESTED+(i.total.tested)
                      
      })

      setCONFIRMED(CONFIRMED)
      setDECEASED(DECEASED)
      setRECOVERED(RECOVERED)
      setTESTED(TESTED)

  }
  useEffect(() => {
    getData();
  },[])


const onclicktab1 =()=>{

    console.log("onclicktab1")
    setTab1(true)
    setTab2(false)
    setTab1active("nav-link active")
    setTab2active("nav-link")

  }

  const onclicktab2 =()=>{

    console.log("onclicktab2")
    setTab1(false)
    setTab2(true)
    setTab1active("nav-link")
    setTab2active("nav-link active")
  }





  return (

<div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
 {/*  <!-- Vertical Navbar --> */}    
  <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-light border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
    <div className="container-fluid">
    {/*   <!-- Toggler --> */}
      <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    {/*   <!-- Brand --> */}
      <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
        <img src={Covid} alt="..."/>
      </a>
      {/* <!-- User menu (mobile) --> */}
      <div className="navbar-user d-lg-none">
        {/* <!-- Dropdown --> */}
        <div className="dropdown">
         {/*  <!-- Toggle --> */}
          <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="avatar-parent-child">
              <img alt="Image Placeholder" src={logo} className="avatar avatar- rounded-circle"/>
              <span className="avatar-child avatar-badge bg-success"></span>
            </div>
          </a>
          {/* <!-- Menu --> */}
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
            <a href="#" className="dropdown-item">Profile</a>
            <a href="#" className="dropdown-item">Settings</a>
            <a href="#" className="dropdown-item">Billing</a>
            <hr className="dropdown-divider"/>
            <a href="#" className="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      {/* <!-- Collapse --> */}
      <div className="collapse navbar-collapse" id="sidebarCollapse">
        {/* <!-- Navigation --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a  onClick={onclicktab1} className={tab1active} >
              <i  className="bi bi-house"></i> Dashboard
            </a>
          </li>
          <li  className="nav-item">
            <a onClick={onclicktab2} className={tab2active} >
              <i  className="bi bi-person-square"></i> Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-box-arrow-left"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* <!-- Main content --> */}
  <div className="h-screen flex-grow-1 overflow-y-lg-auto">

  { tab1?  
    <>   
    <header className="bg-surface-primary border-bottom pt-6">
      <div className="container-fluid">
        <div className="mb-npx">
          <div className="row align-items-center d-flex">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
             {/*  <!-- Title --> */}
              <h1 className="h2 mb-0 ls-tight">Covid Tracker Application</h1>
              <h6>A detailed data shows the extent of the coronavirus outbreak, with tables of the number of cases by states</h6>
            </div>
            {/* <!-- Actions --> */}
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1">
              <a href="#" className="btn d-inline-flex btn-sm btn-secondary mx-3">
                  <span className=" pe-2">
                    <i className="bi bi-plus"></i>
                  </span>
                  <span>Login</span>
                </a>
                <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-3">
                  <span className=" pe-2">
                    <i className="bi bi-plus"></i>
                  </span>
                  <span >Sign Up</span>
                </a>
              </div>
            </div>
          </div>
          {/*  Nav  */}
          <ul className="nav nav-tabs mt-4 overflow-x border-0">
            <li className="nav-item ">
              <a href="#" id='repot' className="nav-link active">Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </header> 
    <main className="py-6 bg-surface-secondary">
      <div className="container-fluid">
        {/* Card stats */}
        <div className="row g-6 mb-6">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Confirmed Cases</span>
                    <span className="h3 font-bold mb-0">{Totalconfirmed}</span>
                  </div>
                  <div className="col-auto">
                  <img alt="..." src={banner1} className="avatar avatar-l rounded-circle me-2"/>
                  </div>
                </div>
                <div className="mt-2 mb-0 text-lg">
                  <span class="badge badge-pill bg-soft-danger text-danger me-2">
                    <i className="bi bi-arrow-up me-1"></i>13%
                  </span>
                  <span className="text-nowrap text-sm text-muted">Since last month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Deceased</span>
                    <span className="h3 font-bold mb-0">{Totaldeceased}</span>
                  </div>
                  <div className="col-auto">
                  <img alt="..." src={banner2} className="avatar avatar-l rounded-circle me-2"/>
                  </div>
                </div>
                <div className="mt-2 mb-0 text-lg">
                  <span className="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                    <i className="bi bi-arrow-up me-1"></i>30%
                  </span>
                  <span className="text-nowrap text-sm text-muted">Since last month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Recovered</span>
                    <span className="h3 font-bold mb-0">{Totalrecovered}</span>
                  </div>
                  <div className="col-auto">
                  <img alt="..." src={banner3} className="avatar avatar-l rounded-circle me-2"/>
                  </div>
                </div>
                <div className="mt-2 mb-0 text-lg">
                  <span className="badge badge-pill bg-opacity-30 bg-danger text-danger me-2">
                    <i className="bi bi-arrow-down me-1"></i>-5%
                  </span>
                  <span className="text-nowrap text-sm text-muted">Since last month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Vaccinated</span>
                    <span className="h3 font-bold mb-0">{Totaltested}</span>
                  </div>
                  <div className="col-auto">
                  <img alt="..." src={banner4} className="avatar avatar-l rounded-circle me-2"/>
                  </div>
                </div>
                <div className="mt-2 mb-0 text-lg">
                  <span className="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                    <i className="bi bi-arrow-up me-1"></i>10%
                  </span>
                  <span className="text-nowrap text-sm text-muted">Since last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-7">
          <div className="card-header">
            <h2 className="mb-0">Covid Status</h2>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-nowrap">
              <thead className="table-light">
                <tr>
                  <th scope="col">STATE NAME</th>
                  <th scope="col">TOTAL CONFIRMED CASES</th>
                  <th scope="col">TOTAL DECEASED</th>
                  <th scope="col">TOTAL RECOVERED</th>
                  <th scope="col">TOTAL VACCINATED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                      Andaman Nicobar
                    </a>
                  </td>
                  <td>
                    <a className="text-heading font-semibold" href="#">
                 {covidData.data && covidData.data.AN.total.confirmed}
                    </a>
                  </td>
                  <td>
                    <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                    {covidData.data && covidData.data.AN.total.deceased}
                    </a>
                  </td>
                  <td>
                    <a className="text-heading font-semibold" href="#">
                   {covidData.data && covidData.data.AN.total.recovered}
                    </a>
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                    {covidData.data && covidData.data.AN.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                    <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                    Andhra Pradesh
                    </a>
                  </td>
                  <td>
                  <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.AP.total.confirmed}
                  </a>
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                    {covidData.data && covidData.data.AP.total.deceased}
                    </a>
                  </td>
                  <td>
                    <a className="text-heading font-semibold" href="#"> 
                  {covidData.data && covidData.data.AP.total.recovered}
                    </a>
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                    {covidData.data && covidData.data.AP.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                    Arunachal Pradesh
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.AR.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.AR.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.AR.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.AR.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Assam
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.AS.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.AS.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.AS.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.AS.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Bihar
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.BR.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.BR.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.BR.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.BR.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Chandigarh
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.CH.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.CH.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.CH.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.CH.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Chhattisgarh
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.CT.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.CT.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.CT.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.CT.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Delhi
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.DL.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.DL.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.DL.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.DL.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Goa
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.GA.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.GA.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.GA.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.GA.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Gujarat
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.GJ.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.GJ.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.GJ.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.GJ.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Himachal Pradesh
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.HP.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.HP.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.HP.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.HP.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Haryana
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.HR.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.HR.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.HR.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.HR.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Jharkhand
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.JH.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.JH.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.JH.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.JH.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Jammu and Kashmir
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.JK.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.JK.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.JK.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.JK.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Karnataka
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.KA.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.KA.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.KA.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.KA.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Kerala
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.KL.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.KL.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.KL.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.KL.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Lakshadweep
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.LD.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.LD.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.LD.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.LD.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Maharashtra
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MH.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MH.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MH.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MH.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Meghalaya
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.ML.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.ML.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.ML.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.ML.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Manipur
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MN.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MN.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MN.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MN.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Manipur
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MN.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MN.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MN.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MN.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Madhya Pradesh
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MP.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MP.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MP.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MP.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Mizoram
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MZ.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MZ.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.MZ.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.MZ.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Nagaland
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.NL.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.NL.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.NL.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.NL.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Orissa
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.OR.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.OR.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.OR.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.OR.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Punjab
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.PB.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.PB.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.PB.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.PB.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Pondicherry
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.PY.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.PY.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.PY.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.PY.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Rajasthan
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.RJ.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.RJ.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.RJ.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.RJ.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Sikkim
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.SK.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.SK.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.SK.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.SK.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Telangana
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TG.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TG.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TG.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TG.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Telangana
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TG.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TG.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TG.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TG.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Tamil Nadu
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TN.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TN.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TN.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TN.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Tripura
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TR.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TR.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.TR.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.TR.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Uttar Pradesh
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.UP.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.UP.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.UP.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.UP.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  Union Territory
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.UT.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.UT.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.UT.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.UT.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img alt="..." src={img} className="avatar avatar-sm rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  West Bengal
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.WB.total.confirmed}
                  </td>
                  <td>
                  <img alt="..." src={deceased} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.WB.total.deceased}
                    </a>
                  </td>
                  <td className='textbold'>
                  {covidData.data && covidData.data.WB.total.recovered}
                  </td>
                  <td>
                    <img alt="..." src={injection} className="avatar avatar-xs rounded-circle me-2"/>
                    <a className="text-heading font-semibold" href="#">
                  {covidData.data && covidData.data.WB.total.tested}
                    </a>
                  </td>
                  <td className="text-end">
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                     <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer border-0 py-5">
            <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
          </div>
        </div>
      </div>
    </main></>:<>
    </>
  }


  {tab2?<><Account/></>:<></>}

   
  </div>
</div>
    )
}
export default Main;