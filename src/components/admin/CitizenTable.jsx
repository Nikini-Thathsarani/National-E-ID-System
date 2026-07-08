import "../../styles/AdminDashboard.css";

function CitizenTable() {

    const citizens=[

        {
            id:"200145678912",
            name:"Kasun Perera",
            district:"Colombo",
            status:"Verified"
        },

        {
            id:"200278945612",
            name:"Nimali Silva",
            district:"Galle",
            status:"Pending"
        },

        {
            id:"200356781245",
            name:"Amal Fernando",
            district:"Kandy",
            status:"Verified"
        }

    ];

    return(

        <div className="table-container">

            <h2>Citizen Management</h2>

            <table>

                <thead>

                    <tr>

                        <th>NIC</th>

                        <th>Name</th>

                        <th>District</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {citizens.map((citizen,index)=>(

                        <tr key={index}>

                            <td>{citizen.id}</td>

                            <td>{citizen.name}</td>

                            <td>{citizen.district}</td>

                            <td>{citizen.status}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}

export default CitizenTable;