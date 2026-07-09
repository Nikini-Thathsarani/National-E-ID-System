import { useEffect, useState } from "react";
import "../../styles/AdminDashboard.css";
import { useNavigate } from "react-router-dom";

import { db } from "../../firebaseConfig";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";


function CitizenTable({search}) {
    const [citizens,setCitizens] = useState([]);
    const [filter,setFilter] = useState("All");
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();



    const fetchCitizens = async()=>{

        try{

            const querySnapshot = await getDocs(collection(db,"users"));


            const users = querySnapshot.docs
            .map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            .filter(user =>
                user.role !== "admin" &&
                user.emailVerified === true
            );


            setCitizens(users);


        }catch(error){

            console.log(error);

        }
        finally{

            setLoading(false);

        }

    };



    useEffect(()=>{

        fetchCitizens();

    },[]);




    const changeStatus = async(id,status)=>{

        await updateDoc(
            doc(db,"users",id),
            {
                status:status
            }
        );


        fetchCitizens();

    };





    const filteredCitizens = citizens.filter((citizen)=>{


        const status = (citizen.status || "")
        .trim()
        .toLowerCase();


const matchSearch =

citizen.fullName
?.toLowerCase()
.includes(search.toLowerCase())

||

citizen.nic
?.toLowerCase()
.includes(search.toLowerCase())

||

citizen.email
?.toLowerCase()
.includes(search.toLowerCase());




        const matchStatus =
        filter === "All" ||

        (
            filter === "Pending" &&
            (status === "" || status === "pending")
        )

        ||

        status === filter.toLowerCase();



        return matchSearch && matchStatus;


    });





    return(

    <div className="table-container">


        <div className="table-header">


            <h2>
                Citizen Management
            </h2>



            <div className="table-controls">


               



                <select
                value={filter}
                onChange={(e)=>setFilter(e.target.value)}
                >

                    <option>All</option>
                    <option>Verified</option>
                    <option>Pending</option>
                    <option>Rejected</option>

                </select>


            </div>


        </div>





        {
            loading ?

            <h3 className="loading">
                Loading citizens...
            </h3>


            :


            <table>


            <thead>

            <tr>

                <th>NIC</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Actions</th>

            </tr>

            </thead>




            <tbody>


            {
            filteredCitizens.map((citizen)=>(


            <tr key={citizen.id}>


                <td>
                    {citizen.nic}
                </td>



                <td>
                    {citizen.fullName}
                </td>



                <td>
                    {citizen.email}
                </td>



                <td>
                    {citizen.mobile}
                </td>




                <td>

                <span 
                className={`status ${
                    (!citizen.status || citizen.status.trim()==="")
                    ? "pending"
                    : citizen.status.toLowerCase()
                }`}
                >

                {
                    (!citizen.status || citizen.status.trim()==="")
                    ? "Pending"
                    : citizen.status
                }

                </span>


                </td>




                <td>


                {
                (!citizen.status || 
                 citizen.status.trim()==="" ||
                 citizen.status.toLowerCase()==="pending")

                ?

                (

                <div className="action-buttons">


                <button
                className="approve-btn"
                onClick={()=>changeStatus(citizen.id,"Verified")}
                >
                    Approve
                </button>



                <button
                className="reject-btn"
                onClick={()=>changeStatus(citizen.id,"Rejected")}
                >
                    Reject
                </button>


                </div>

                )


                :

                (

                <span>
                    -
                </span>

                )

                }


                </td>



            </tr>


            ))
            }



            </tbody>


            </table>


        }



    </div>


    )

}


export default CitizenTable;