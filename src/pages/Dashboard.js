import React, { useEffect, useState } from 'react'
import { redirect , Link} from 'react-router-dom';

function Dashboard({user}) {
    const [phone , setPhone] = useState();
    const [dob, setDob] = useState(null);
    
    useEffect = (() => {
        if(user.phone != null) 
            setPhone(user.phone);
        if(user.dob != null)
            setDob(user.dob);
    }, [] );

    const handleSubmitClick = () => {
        user.phone = phone ;
        user.dob = dob;
        console.log('Phone no. :- ', user.phone );
        console.log('Dob is :- ', user.dob);

        return redirect("/hello");
    }
    
  return (
    <>
        <h3 className={{backgroundcolor:'red'}} > Dashboard</h3>
        <h1>Hi, {user.username}</h1>
        <p>{user.description}</p>
        <form>
            <h1>User Additional Details</h1>
            <label >
                Phone No.: <input type='number' value={phone} onChange={(e) => setPhone(e.target.value) }/>
            </label>
            <br />
            <label>
                DOB : <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} />
            </label>
            <br />
            <button type='button' onClick={handleSubmitClick}>
                <Link to="/hello" > Submit</Link>
            </button>
        </form>
    </>
  )
}

export default Dashboard