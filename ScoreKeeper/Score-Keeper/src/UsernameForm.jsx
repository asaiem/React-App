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
            <input type="text" name="username" id=""  placeholder="First" value={firstName}
            onChange={updateFirstName}/>
            <br />
            <input type="text" name="username" id=""  placeholder="second" value={secondName}
            onChange={updateSecondName}/>
            <button >Submit</button>
        </>

    )
   
}