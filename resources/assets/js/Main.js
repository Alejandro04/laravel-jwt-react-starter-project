import React from 'react'
import {connect} from 'react-redux'
//import Navigation from './common/dashboard/navigation'
//import Footer from './common/mainFooter'
//import Navigation from './common/navigation'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <main className="fadeIn animated">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.Auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(Main);