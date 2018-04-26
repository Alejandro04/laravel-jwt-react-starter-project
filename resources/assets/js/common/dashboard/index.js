import React from 'react'
import Menuheader from './menuheader'
import Sidebar from './sidebar'


export default class Dashboard extends React.Component {
   render() {
       return(
           <div>
                <Menuheader/>
                <Sidebar/>
           </div>
       )
   }
}