import AdminLayout from "../../components/admin/AdminLayout";
import CitizenTable from "../../components/admin/CitizenTable";


function Citizens() {

return (

<AdminLayout>

{
(search)=>(

<CitizenTable search={search}/>

)
}

</AdminLayout>


);

}


export default Citizens;