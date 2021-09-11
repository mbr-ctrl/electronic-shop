import React from 'react'
import Header from './Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ElectoItems from './electroItems'


class App extends React.Component{
    render() {
        return(
            <div className="container">
                <Header/>
                <ElectoItems/>
            </div>
        )
    }
}

export default App