import AdminLayout from "../../components/admin/AdminLayout";
import { useEffect, useState } from "react";

import { db } from "../../firebaseConfig";

import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";


function Verification() {


const [requests,setRequests] = useState([]);

const [loading,setLoading] = useState(true);




useEffect(()=>{

loadRequests();

},[]);





const loadRequests = async()=>{


try{


const snapshot = await getDocs(
collection(db,"users")
);



const users = snapshot.docs
.map((doc)=>({

id:doc.id,
...doc.data()

}))


.filter(user=>

user.role !== "admin" &&

user.emailVerified === true &&

(user.status || "").toLowerCase() === "pending"

);



setRequests(users);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};







const changeStatus = async(id,status)=>{


await updateDoc(

doc(db,"users",id),

{

status:status

}

);


loadRequests();


};







return(

<AdminLayout>


<h2 className="page-title">
Verification Requests
</h2>





{

loading ?


<h3>
Loading requests...
</h3>



:


requests.length === 0 ?


<h3>
No Pending Verification Requests
</h3>



:


<table>


<thead>

<tr>

<th>NIC</th>

<th>Name</th>

<th>Email</th>

<th>Mobile</th>

<th>NIC Photo</th>

<th>Status</th>

<th>Action</th>


</tr>


</thead>




<tbody>


{

requests.map((user)=>(


<tr key={user.id}>


<td>
{user.nic}
</td>


<td>
{user.fullName}
</td>


<td>
{user.email}
</td>


<td>
{user.mobile}
</td>




<td>


{
user.nicFrontURL ?


<img

src={user.nicFrontURL}

alt="NIC"

style={{

width:"80px",

height:"50px",

objectFit:"cover",

borderRadius:"5px"

}}

/>


:

"No Image"

}


</td>




<td>

<span className="status pending">

Pending

</span>


</td>




<td>


<div className="action-buttons">


<button

className="approve-btn"

onClick={()=>changeStatus(user.id,"Verified")}

>

Approve

</button>





<button

className="reject-btn"

onClick={()=>changeStatus(user.id,"Rejected")}

>

Reject

</button>



</div>


</td>



</tr>


))


}



</tbody>


</table>


}



</AdminLayout>


)


}


export default Verification;