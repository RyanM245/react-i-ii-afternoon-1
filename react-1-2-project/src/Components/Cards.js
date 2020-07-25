import React, {Component} from 'react'

class Cards extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        const {data,index} = this.props
        return(
        <div>
            {index + 1 }/{data.length}
            {data[index].city}
            {data[index].country}
            {data[index].name.first}
            {data[index].name.last}
           <ol> {data[index].favoriteMovies.map(el => {
                return <li>{el}</li>
            })}</ol>
            

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




