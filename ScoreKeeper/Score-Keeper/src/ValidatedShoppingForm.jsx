    import { useState } from "react";

    export default function ValidatedShoppingForm({addItem}){
        const [form,setForm] = useState({product:'',qty:0})
        const[Valid,setValid] = useState(false)
        function validate(p){
            if(p.length === 0){
                setValid(false)
            }else{
                setValid(true)
            }       
            
        }
        function handleChange(e){
            if(e.target.name ==='product'){
                validate(e.targer.value)
            }
            
            setForm((currValue)=>{
                currValue[e.target.name] = e.target.value
                return{...currValue}
            })

        }
        function handleSubmit(evt){
            evt.preventDefault()
            
            // console.log(form)
            addItem(form)
            setForm({product:'',qty:0})

        }

        return(
            <>
            <h1>Adding Product</h1>
                <form >
                    <label htmlFor="product">Product:</label>
                    <input type="text" name="product" id="product" placeholder="Product" onChange={handleChange} value={form.product}/>

                    <label htmlFor="qty">Quantity: </label>
                    <input type="number" name="qty" id="qty" placeholder="Qauntity" onChange={handleChange} value={form.qty}/>
                    {!Valid&&<p style= {{color:'red'}}>Username is empty</p>}
                    
                    <button onClick={handleSubmit} >Submit</button>


                </form>
            </>

        )

    }