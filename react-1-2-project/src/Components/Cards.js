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
        <div className = 'cards-main'>
            <p className = 'index'> {index + 1 }/{data.length} </p>

            <h1 className = 'name'> {data[index].name.first} {data[index].name.last} </h1>

            <p className = 'person-info'> <b>From:</b>{data[index].city}, {data[index].country} </p>

            <p className = 'person-info'> <b>Job Title:</b> {data[index].title} </p>
            
            <p className = 'person-info'> <b>Employer: </b>{data[index].employer} </p>

            <b className = 'person-info '> Favorite Movies:</b>
           <ol className = 'person-info movie-info'> {data[index].favoriteMovies.map(el => {
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




