import React from 'react'
import Banner from './Banner'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component{
    render() {
        return(
            <div className="container">
                <Banner/>
            </div>
        )
    }
}

export default App