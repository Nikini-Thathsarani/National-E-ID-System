import AdminLayout from "../../components/admin/AdminLayout";
import CitizenTable from "../../components/admin/CitizenTable";

function Citizens() {
  return (
    <AdminLayout>
      <h2>Citizen Management</h2>

      <CitizenTable />
    </AdminLayout>
  );
}

export default Citizens;