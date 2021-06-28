import { useState } from "react"

export const useTotalAmount = ( { cartList } ) => {
    const [values, setValues] = useState([])
    console.log(cartList)
    

    const handleCountChange = ({  }) => {
        // console.log(count.amount)
        // setValues({
        //     // ...values,
        //     // [ target.name ]: target.value
        // });
    }

    return [ values, handleCountChange];
}


    
