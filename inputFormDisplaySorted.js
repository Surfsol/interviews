import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ user, setUser, handleSubmit }) {
 
 console.log({user})
 
 const handleChange = (e) => {
   e.preventDefault()
   setUser({
     ...user,
     [e.target.name] : e.target.value
   })
 }


  
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        value={user.userFirstname}
        onChange={(e)=>handleChange(e)}
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        value={user.userLastname}
        onChange={handleChange}
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        value={user.userPhone}
        onChange={handleChange}
        type='number'
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Submit' 
      />
    </form>
  )
}

function InformationTable({allUsers}) {

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
    {allUsers.map((item) => {
        <tr>
          <th style={style.tableCell}>{item.userFirstname}</th>
          <th style={style.tableCell}>{item.userLastname}</th>
          <th style={style.tableCell}>{item.userPhone}</th>
        </tr>
        })}
      </thead> 
    </table>
  );
}

function Application(props) {
   const [allUsers, setAllUsers] = useState([{userFirstname: 'A', userLastname: 'A', userPhone: '111111'}])
   const [user, setUser] = useState({userFirstname:'Coder', userLastname: 'Byte', userPhone: 8885559999 })
   const [sorted, setSorted] = useState()

   const handleSubmit = () => {
   e.preventDefault()
   let updateUsers = []
   if(allUsers.length > 0){
      for(let i=0;i<allUsers.length; i++){
        let inserted = false
        let item = allUsers[i].userLastname
        if(!inserted && user.userLastname < item){
          inserted = true
          updateUsers.push(user)
          updateUsers.push(item)
        } else {
          updateUsers.push(item)
        }
      }
    setAllUsers(updateUsers)
   }
 }
  
  return (
    <section>
      <PhoneBookForm user={user} setUser={setUser} handleSubmit={handleSubmit} />
      <InformationTable allUsers={allUsers}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);