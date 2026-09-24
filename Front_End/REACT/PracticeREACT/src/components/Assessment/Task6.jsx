import { useMemo, useState } from "react"

export default function Task6(){
    
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [discount, setDiscount] = useState(0)

    const totalPrice = useMemo(() => {
        const total = price * quantity;
        const discountPrice = (total * discount) / 100
        const finalPrice = total - discountPrice

        return finalPrice
    }, [price, quantity, discount])

    
    return(
        <div>
            <label htmlFor="">Price</label><input type="number" value={price} onChange = {(e)=>setPrice(Number(e.target.value))} />
            <label htmlFor="">Quantity</label><input type="number" value={quantity} onChange ={(e) =>setQuantity(Number(e.target.value))}/>
            <label htmlFor="">Discount</label><input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))}/>

            <h3>Total Price: {totalPrice}</h3>
        </div>
    )
}