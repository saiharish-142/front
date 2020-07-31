import axios from 'axios'

export function NameLoader(){
    return(dispatch)=>{
        return axios.get('http://localhost:1080/driver/').then((response)=>{
            dispatch(ShowName(response.data))
        })
    }
}

export function ShowName(drivers){
    return {
        type: 'SHOW_NAME',
        names: drivers
    }
}
export function PatientLoader(){
    return(dispatch)=>{
        return axios.get('http://localhost:1080/patient/').then((response)=>{
            dispatch(ShowPatientName(response.data))
        })
    }
}

export function ShowPatientName(patinet){
    return {
        type: 'SHOW_PATNAME',
        patient: patinet
    }
}