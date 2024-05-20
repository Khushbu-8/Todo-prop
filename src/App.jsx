
import { useState } from "react"
import Adduser from "./pages/Adduser"
import Viewuser from "./pages/Viewuser"

function App() {
  const [allData, setAllData] = useState([]);
  const [single,setSingle] = useState("");
  const [editid,setEditid] = useState("");

  const AddUser = (data) =>{
    setAllData([...allData, data]);
   alert("added...")

  }
  const DeletR=(id) =>{
    setAllData(allData.filter((data)=> data.userid != id));
    alert("deleted..")
  }
  const EditR=(id) =>{
    setSingle(allData.find(val => val.userid == id))
    setEditid(id)
  }
  const UpdateUser = (data) =>{
    let upUser = allData.map((val) =>{
      if(val.userid == editid){
          val.name = data.name,
          val.phone = data.phone

      }
      return val;
    })
    setAllData(upUser);
    setEditid("");
    alert("updated..");

  }

  return (
   <>
  <Adduser 
  AddUser={AddUser} 
  single={single}
  UpdateUser={UpdateUser}
   Ediid={editid}
   />

  <Viewuser
   ViewUser={allData} 
   DeletR={DeletR} 
   EditR={EditR}
   />
  
   </>
  )
}

export default App
