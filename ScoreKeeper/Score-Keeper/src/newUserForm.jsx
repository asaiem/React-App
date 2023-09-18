import { useState } from "react";

export default function UsernameForm(){
    const [form,setForm] = useState({
        firstName:'',
        secondName:'',
        password:''
    })
    function handelChange(evt){
        const inputName = evt.target.name
        const newValue = evt.target.value
        // console.log(inputName,inputValue)
        setForm((inputValue)=>{
            return{
                ...inputValue,
                [inputName]:newValue
            }
            
            // inputValue[inputName] = newValue;
            // return{...inputValue}

        })
    }
    function handleSubmit(){
        console.log(form)
    }
    return(

        <>  
            <label htmlFor="firstName">Enter your first name</label>
            <input type="text" name="firstName" id="firstName"  placeholder="First" value={form.firstName}
            onChange={handelChange}/>
            <br />
            <label htmlFor="secondName">Enter your last name </label>
            <input type="text" name="secondName" id=""  placeholder="second" value={form.secondName}
            onChange={handelChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"  placeholder="password" value={form.password}
            onChange={handelChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </>

    )
   
}