import React from 'react'
import { Switch, Route} from 'react-router'

import Layout from '../HOC/Layout'
import Features from '../pages/home'




const Router = () => {
    
    return (
        <Layout>
            <Switch>
                <Route path={ "/"} exact component={Features}/>
            </Switch>
        </Layout>
    )
}

export default Router
