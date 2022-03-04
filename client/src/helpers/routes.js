import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export function IsUserRedirect({user, children, ...resProps})
{
    return (
        <Route {...resProps}
            render={
                () => {
                    if(!user)
                    {
                        return <Redirect to='/login'></Redirect>
                    }
                    else 
                    {
                        return children
                    }
                }
            } 
        />
    )
}

export function ProtectedRoute({user, children, ...resProps})
{
    return <Route {...resProps}
                render={() => {
                   if(!user)
                   {
                       return <Redirect to='/login'></Redirect>
                   }
                   else 
                   {
                       return children;
                   } 
                }} />
}