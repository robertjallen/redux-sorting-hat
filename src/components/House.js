import React, {useContext} from 'react'
import {HouseContext} from '../contexts/HouseContext'

export default function House(props) {

    // declare a variable for your state using useSelector
    // const state = useSelector(state => state)
    
    let {house} = useContext(HouseContext)

    return (
        <>     
            {house && <h1>Its official youve been placed in {house}</h1>}
        </>
    )
}
