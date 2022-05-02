import { useEffect, useState } from "react";
import "./style.css";

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const sorting = ()=>{
    data.sort((a,b)=>{
      a.status > b.statust ?  1 : -1
    })
  }

  return (
    <div>
      <div>
        <div>
          <select onChange={()=>{sorting()}} className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          
              <tbody>
                {data.map((e)=>(
                  <tr className="orders-row">
                  <td className="id">{e.id}</td>
                  <td className="problem">{e.problem}</td>
                  <td className="owner">{e.owner_name}</td>
                  <td className="status">{e.status}</td>
                  <td className="cost">{e.cost}</td>
                  <td className="change-status">
                    {/* Show select dropdown only if status is Not Accepted */}
                    {e.status !== "Not Accepted" ?  <select className="changeStatus" name="changeStatus">
                    <option value="Pending">{e.status}</option>
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                      <option value="Not Accepted">Not Accepted</option>
                    </select> : "-"}
                   
                  </td>
                  <td className="accept">
                    {/* Show this button only if status is Not Accepted */}
                    {/* on change make request to update it in db, and show changed status in table */}

                    {e.status == "Not Accepted" ? <button onClick={()=>{e.status = "Accepted"; console.log("ac")}}>Accept</button> : ""}
                    
                  </td>
                </tr>
                ))}
                
                    
              </tbody>
           
        </table>
      </div>
    </div>
  );
};
