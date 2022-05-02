import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Userlogin";

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
const [userData,setUserData] = useState([])
const [formData,setFormData] = useState([]);

const handleForm = ()=>{
  fetch("http://localhost:8080/orders",{
    method : "POST",
          headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData)
})}
  useEffect(()=>{
    getData()
  },[]);
   
  const getData = ()=>{
    fetch("http://localhost:8080/orders")
    .then(res=> res.json())
    .then(data=>setUserData(data))
  }
   


  const {user} = useContext(UserContext);
  return (
    <div>
      <div className="form">
        <input
          onChange={(e)=>{setFormData(e.target.value)}}
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
         
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder={user}
          readOnly
        />
        <input
          onChange={(e)=>{setFormData(e.target.value)}}
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button onClick={handleForm} className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        {userData.map((e,i)=>(
          <div key={i} className="past-orders">
          <span className="id"></span>.{e.id} <span className="problem">{e.problem}</span>{" "}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
            {e.const}
          </span>
          <p className="status">Status: {e.status}</p>
          <hr />
        </div>
        ))}
        
      </div>
    </div>
  );
};
