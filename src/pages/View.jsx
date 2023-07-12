import {Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function View() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "index", headerName: "Index No", width: 130 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "semester", headerName: "Semester", width: 100 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 250,
    },
  ];

  const rows = [
    { id: 1, index: "190152B", name: "Dissanayake D.B", semester: 2, age: 21 , email: "dissanayake@cse.mrt.ac.lk"},
    {
      id: 2,
      index: "190152B",
      name: "Ranasinghe H.R.R.S",
      semester: 5,
      age: 22,
      email: "dissanayake@cse.mrt.ac.lk"
    },
    { id: 3, index: "190152B", name: "Lannister", semester: 8, age: 23, email: "dissanayake@cse.mrt.ac.lk"},
    { id: 4, index: "190152B", name: "Stark", semester: 1, age: 20, email: "dissanayake@cse.mrt.ac.lk"},
    { id: 5, index: "190152B", name: "Targaryen", semester: 2, age: 24, email: "dissanayake@cse.mrt.ac.lk" },
    { id: 6, index: "190152B", name: "Melisandre", semester: 5, age: 24, email: "dissanayake@cse.mrt.ac.lk" },
    { id: 7, index: "190152B", name: "Clifford", semester: 4, age: 22, email: "dissanayake@cse.mrt.ac.lk" },
    { id: 8, index: "190152B", name: "Frances", semester: 4, age: 23, email: "dissanayake@cse.mrt.ac.lk" },
    { id: 9, index: "190152B", name: "Roxie", semester: 1, age: 20, email: "dissanayake@cse.mrt.ac.lk" },
  ];

  return (
    <>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        }}
        paddingTop="20px"
      >
        Registered Students
      </Typography>

      <div style={{ height: 400, width: "75%", margin: "auto", paddingTop: "30px"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default View;
