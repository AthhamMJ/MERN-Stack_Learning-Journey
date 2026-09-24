import { useReducer } from "react"

    const PRODUCT_NAME = "Notebook"
    const PRODUCT_PRICE = 500

    const initialState = {
        quantity: 0
    }

    function quantityReducer(state, action){
        switch (action.type) {
            case "INCREASE":
                return { quantity: state.quantity + 1}
            case "DECREASE": 
                return { quantity: Math.max(0, state.quantity - 1) }
            case "RESET":
                return { quantity: 0 }
            default: 
            return state
        }
    }

export default function Task5() {

    const[state, dispatch] = useReducer(quantityReducer, initialState)

    const totalPrice =  state.quantity * PRODUCT_PRICE

    return(
        <div>
            <h2>Product Count App</h2>
            <p>Product: {PRODUCT_NAME}</p>
            <p>Price: Rs. {PRODUCT_PRICE}</p>
            <p>Quantity: {state.quantity}</p>
            <p>Total: Rs. {totalPrice}</p>

            <button onClick={()=> dispatch({type: "INCREASE"})}>+</button>
            <button onClick={()=> dispatch({type: "DECREASE"})}>-</button>
            <button onClick={()=> dispatch({type: "RESET"})}>reset</button>
        </div>
    )
}