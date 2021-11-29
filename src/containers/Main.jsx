import React from 'react'
import { Home } from '../pages/home/Home'


export const Main = ({signOutUser, user}) => {



    
    return (
        <div>
            <Home signOutUser={signOutUser} user={user}/>
        </div>
    )
}
