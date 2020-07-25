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
        <div>
             <button onClick = {previousPage}>&lt; Previous</button>
            <button onClick = {nextPage}>Next &gt;</button>

        </div>
        )
    }
}

export default Buttons



