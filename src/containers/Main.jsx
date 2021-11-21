import React from 'react'
import { Home } from '../pages/home/Home'


export const Main = ({signOutUser}) => {



    
    return (
        <div>
            <Home signOutUser={signOutUser}/>
        </div>
    )
}
