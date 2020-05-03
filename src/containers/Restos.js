import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestos } from '../store/actions'

export default () => {
    const dispatch = useDispatch()
    const restos = useSelector(state => state.restos)
    console.log(restos)
    useEffect(() => {
        dispatch(getRestos())
    }, [dispatch])
    return (
        <><h1>List</h1></>
    )
}