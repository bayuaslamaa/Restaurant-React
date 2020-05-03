import axios from 'axios'

export const SET_RESTOS = 'SET_RESTOS'
export const SET_ERRORS = 'SET_ERRORS'

export const setRestos = (data) => {
    return { type: SET_RESTOS, payload: data }
}

export const setErrors = (err) => {
    return { type: SET_ERRORS, payload: err }
}

function fetchRestos() {
    return axios({
        method: 'get',
        url: 'https://developers.zomato.com/api/v2.1/search',
        headers: {
            user_key: '82ea9762def1fe7c535f5c8f2138ff3d',
            'Access-Control-Allow-Origin': '*',
            
        }
    })
}

export const getRestos = () => {
    return dispatch => {
        fetchRestos()
            .then(({ data }) => dispatch(setRestos(data)))
            .catch(console.log)
    }
}