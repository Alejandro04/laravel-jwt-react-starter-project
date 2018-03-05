import React from 'react'
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";

import Layout from '../components/Layout'
import Example2 from '../components/Example2'
import Example3 from '../components/Example3'

const Routes= () =>
<HashRouter>
    <div>
        <Route path="/" component={Layout}/>
        <Route path="/example2" component={Example2}/>
        <Route path="/example3" component={Example3}/>
    </div>
</HashRouter>

export default Routes