import React from 'react'

const Viewuser = ({ViewUser,DeletR,EditR}) => {
  return (
    <div align="center">
      <h1>ViewUser</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
    ViewUser.map((user) => {
      return (
        <tr>
        <th scope="row">{user.userid}</th>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>
          <button onClick={() => DeletR(user.userid)}>Delet</button>
          <button onClick={() => EditR(user.userid)}>Edit</button>
          
        </td>
      </tr>
      )
    })
   }
   
  </tbody>
</table>
    </div>
  )
}

export default Viewuser
