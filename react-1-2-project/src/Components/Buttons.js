import React, {Component} from 'react'


class Buttons extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const {previousPage,nextPage} = this.props
        return(
        <div className = 'button-main'>
             <button onClick = {previousPage} className = 'button'>&lt; Previous</button>
            <button onClick = {nextPage} className = 'button'>Next &gt;</button>

        </div>
        )
    }
}

export default Buttons



