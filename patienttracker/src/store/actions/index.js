import { Alert, ToastAndroid } from 'react-native';
import axios from 'axios' ;

export const DetailAction = "DetailsAction" ; 

export function NewPatientAdd(PatientInfo) {
    return dispatch => {
            return axios.post('http://patienttracking.herokuapp.com/api/patientdetails', PatientInfo)
                .then(() => {
                    ToastAndroid.show('Data Saved', ToastAndroid.SHORT);
                    dispatch(PatientDetailsAction())
                })
                .catch((err) => {
                    ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
                });
            }
    }

    export function PatientDetailsAction() {
        return dispatch => {
            return axios.get('http://patienttracking.herokuapp.com/api/getAllPatient')
                .then((data) => {
                    dispatch(DetailsAction(data.data));
                })
                .catch((err) => { 
                    ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
                    
                });
    
        }
    }



function DetailsAction(payload) {
    return {
        type: DetailAction,
        payload
    }
}