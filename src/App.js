import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions'
import './App.css';
// import Test from './test';
// import { Provider } from 'react-redux'
// import { store } from './Store/store';


function App(props) {
  console.log(props.name)
  console.log(props.patient)
  const nameS = props.name.map((name) => <div key={name._id}><h3>username:{name.username}</h3><h4>mobile number:{name.mobileNo}</h4></div> )
  const namep = props.patient.map((name) => <div key={name._id}><h3>Name: {name.username}</h3><h4>case: {name.caseP}</h4><h4>driver mobileNo:{name.drivermobileNo}</h4><h4>patient mobileNo:{name.patientmobileNo}</h4></div> )
  // console.log(nameS)
  useEffect(() => {
    props.NameLoader()
    props.PatientLoader()
  }, [])
  return (
    <div className="App">
      <div>
        {nameS}
      </div>
      <div>
        {namep}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, actionCreators)(App)
