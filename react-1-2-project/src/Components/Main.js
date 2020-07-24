import React, {Component} from 'react'
import '../App.css'
import data from '../Data'
import Cards from './Cards'
import Buttons from './Buttons'


class Main extends Component{
    constructor(){
        super()
        this.state = {
            data: data,
            index: 0
           
        }

    }




    render(){
        // console.log(this.state.data)
        return(
            <div>
                <Cards info={this.state.data} in={this.state.index}/>
                <Buttons />
            </div>
        )
    }
}

export default Main