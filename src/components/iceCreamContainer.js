import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    console.log(props);
  return (
    <div>
      <h2>Number Of IceCream - {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream} >Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        numberOfIceCreams:state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyIceCream:()=>dispatch(buyIceCream()),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(IceCreamContainer)
