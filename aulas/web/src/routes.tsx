import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Landing  from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMaps';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


//define componente Routes 
function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={OrphanagesMap}></Route>
                
                <Route path="/orphanages/create" component={CreateOrphanage}/>
                <Route path="/orphanages/:id" component={Orphanage}/>

              </Switch>
        </BrowserRouter>
    )
}


export default Routes;
