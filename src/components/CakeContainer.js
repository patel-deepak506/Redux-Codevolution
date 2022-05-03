import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number Of cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake} >Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        numberOfCakes:state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyCake:()=>dispatch(buyCake()),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
