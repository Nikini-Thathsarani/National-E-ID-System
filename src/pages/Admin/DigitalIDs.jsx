import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { QRCodeCanvas } from "qrcode.react";
import { db } from "../../firebaseConfig";
import { jsPDF } from "jspdf";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";


function DigitalIDs() {

  const [citizens,setCitizens] = useState([]);
  const [loading,setLoading] = useState(true);



  useEffect(()=>{

    fetchApprovedUsers();

  },[]);



  const fetchApprovedUsers = async()=>{

    try{

      const snapshot = await getDocs(
        collection(db,"users")
      );


      const users = snapshot.docs
      .map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      .filter(user =>
        user.role !== "admin" &&
        user.emailVerified === true &&
        user.status === "Verified"
      );


      setCitizens(users);


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  };




  const generateDigitalID = async(id)=>{


    const digitalId =
    "EID-" +
    Math.floor(100000 + Math.random()*900000);



    await updateDoc(
    doc(db,"users",id),
    {
    digitalId:digitalId,
    idIssued:true,
    issuedDate:new Date().toLocaleDateString()
    }
    );


    fetchApprovedUsers();


  };

  const downloadPDF = (citizen)=>{


    const pdf = new jsPDF();


    pdf.setFontSize(18);
    pdf.text("National e-ID Card",20,20);



    pdf.setFontSize(12);

    pdf.text(
        `Name: ${citizen.fullName}`,
        20,
        40
    );


    pdf.text(
        `NIC: ${citizen.nic}`,
        20,
        50
    );


    pdf.text(
        `Digital ID: ${citizen.digitalId}`,
        20,
        60
    );


    pdf.text(
        `Issued Date: ${citizen.issuedDate}`,
        20,
        70
    );


    pdf.save(
        `${citizen.fullName}-Digital-ID.pdf`
    );

};



  return (

    <AdminLayout>


      <h2 className="page-title">
        Digital ID Management
      </h2>



      {
      loading ?

      <h3>
        Loading...
      </h3>


      :

      <table>


      <thead>

      <tr>

        <th>Name</th>
        <th>NIC</th>
        <th>Email</th>
        <th>Digital ID</th>
        <th>Action</th>

      </tr>

      </thead>



      <tbody>


      {
      citizens.map((citizen)=>(


      <tr key={citizen.id}>


        <td>
          {citizen.fullName}
        </td>


        <td>
          {citizen.nic}
        </td>


        <td>
          {citizen.email}
        </td>


        <td>


        {
        citizen.digitalId ?

        <div className="digital-card">


            <h3>
            National e-ID
            </h3>


            {
            citizen.photoURL &&

            <img
            src={citizen.photoURL}
            className="nic-photo"
            alt="NIC"
            />

            }


        <p>
        <b>Name:</b> {citizen.fullName}
        </p>


        <p>
        <b>NIC:</b> {citizen.nic}
        </p>


        <p>
        <b>ID:</b> {citizen.digitalId}
        </p>



        <QRCodeCanvas
        value={citizen.digitalId}
        size={90}
        />



        <p>
        Issued Date:
        {
        citizen.issuedDate || "N/A"
        }
        </p>



        </div>


        :

        "Not Generated"


        }


        </td>


        <td>


        {
        citizen.digitalId ?

        <span>
          Issued
        </span>

        :

        <button
        className="approve-btn"
        onClick={()=>generateDigitalID(citizen.id)}
        >
          Generate ID
        </button>

        }

        <button
className="download-btn"
onClick={()=>downloadPDF(citizen)}
>
Download PDF
</button>


        </td>


      </tr>


      ))
      }


      </tbody>


      </table>


      }


    </AdminLayout>

  );

}


export default DigitalIDs;