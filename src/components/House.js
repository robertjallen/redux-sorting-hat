import React from 'react'
import {useSelector} from 'react-redux'

export default function House() {

    // declare a variable for your state using useSelector
    const state = useSelector(state => state)


    return (
        <>     
            {state.house && <h1>Its official youve been placed in {state.house}</h1>}
        </>
    )
}
