import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Adduser = ({AddUser,single,Ediid, UpdateUser}) => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    
   useEffect(()=>{
    setName(single.name),
    setPhone(single.phone)
   },[single]);
   
    const hendleSubmit =(event) =>{
        event.preventDefault();
        console.log(event);
        let obj ={
            userid: Date.now(),
            name:name,
            phone:phone,

        }
        if(Ediid){
          UpdateUser(obj)
        }else{
          AddUser(obj); 
        }
 
 setName("")
 setPhone("")

       
    }
   return (
    <div align="center">
      <h1>Add User</h1>
    <form action="" onSubmit={hendleSubmit} >
      <label htmlFor="">Name : </label>
      <input type="text" onChange={(e) => setName(e.target.value) } value={name} /><br></br><br></br> 
      <label htmlFor="">Phone : </label>
      <input type="text" onChange={(e) => setPhone(e.target.value) } value={phone}/><br></br><br></br>
      <input type="submit"  />
      
    </form>
    </div>
  )
}

export default Adduser
