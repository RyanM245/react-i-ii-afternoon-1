import React, {Component} from 'react'

class Cards extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
        <div>
            {this.props.data}

        </div>
        )
    }
}


export default Cards


// const Cards = (props) => {
// //    const {info} = props
// //    const {in} = props
//      return(
//         <div>
//             <p>Hello{props.data}</p>

//         </div>
//         )
// }




