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
        // this.nextPage = this.nextPage.bind(this)
    }

    nextPage = () => {
        const {data,index} = this.state
       if(index < data.length - 1 ){
        this.setState({index:index + 1}) 
       }else{
        this.setState({index: 0})
       }
    }

    previousPage = () =>{
        const {data,index} = this.state
        if(index > 0){
        this.setState({index: index - 1})
        }else{
         this.setState({index:data.length - 1}) 
        }
    }



    render(){
        const {data,index} = this.state
        return(
            <div>
            <div>
                <Cards data={data} index={index}/>
                <Buttons nextPage={this.nextPage} previousPage={this.previousPage} />
            </div>
            </div>
        )
    }
}

export default Main

