import { useState } from "react";

export default function ShoppingForm({addItem}){
    const [form,setForm] = useState({product:'',qty:0})
     
    function handleChange(e){
        
        setForm((currValue)=>{
            currValue[e.target.name] = e.target.value
            return{...currValue}
        })

     }
     function handleSubmit(evt){
        evt.preventDefault()
        
        console.log(form)
        addItem(form)

     }

    return(
        <>
        <h1>Adding Product</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product:</label>
            <input type="text" name="product" id="product" placeholder="Product" onChange={handleChange}/>

            <label htmlFor="qty">Quantity: </label>
            <input type="number" name="qty" id="qty" placeholder="Qauntity" onChange={handleChange}/>

            <button >Submit</button>


        </form>
        </>

    )

}