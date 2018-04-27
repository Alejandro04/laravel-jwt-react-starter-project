import React from 'react'
import Menuheader from './menuheader'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'

export default class Dashboard extends React.Component {
   render() {
       return(
            <div className="container-scroller">
                <Menuheader/>       
                <div className="container-fluid page-body-wrapper">
                    <div className="row row-offcanvas row-offcanvas-right">
                        <Content/>  
                        <Sidebar/>
                        <Footer/>
                    </div>
                </div>
           </div>
       )
   }
}