import { useState } from "react";

export default function UsernameForm(){
    const [firstName,setFirstname] = useState('')
    const [secondName,setSecondname] = useState('')
    function updateFirstName(e){
        // const copy = [...username]
        console.log('CHANGED !!')
        console.log(e.target.value)
        setFirstname(e.target.value)
    }
    function updateSecondName(e){
        // const copy = [...username]
        console.log('CHANGED !!')
        console.log(e.target.value)
        setSecondname(e.target.value)
    }
    return(

        <>  
            <label htmlFor="firstName">Enter your first name</label>
            <input type="text" name="username" id="firstName"  placeholder="First" value={firstName}
            onChange={updateFirstName}/>
            <br />
            <label htmlFor="secondName">Enter your last name </label>
            <input type="text" name="username" id=""  placeholder="second" value={secondName}
            onChange={updateSecondName}/>
            <button >Submit</button>
        </>

    )
   
}