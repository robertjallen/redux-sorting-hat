import React, {useContext} from 'react'
import {LegosContext} from '../contexts/LegosContext'
import LegoCard from './LegoCard'

export default function LegosList() {
    // declare a variable for your state using useSelector
    // const state = useSelector(state => state)
    

    let {legos} = useContext(LegosContext)
    

    console.log(legos)
    return (
        <>     
            {legos &&
            legos.map(lego => {
              return  <LegoCard lego={lego}/>
            }) 
            }
        </>
    )
}
