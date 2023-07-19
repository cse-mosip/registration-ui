import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import { APP, EDIT } from "../constants/constants";

function View() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getStudents = async () => {
      await Axios.get(import.meta.env.VITE_APP_API_URL + "/student")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((error) => {
          console.log("Error loading users", error);
        });
    };
    getStudents();
  }, []);

  const columnHeaders = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "index", headerName: "Index No", width: 130 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 250,
    },
    { field: "faculty", headerName: "Faculty", width: 100 },
    { field: "department", headerName: "Department", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: ({ row }) => (
        <Button variant="contained" onClick={() => editData(row)}>Edit</Button>
      ),
    },
  ];

  const editData = (row) => {
    navigate(`/${APP}/${EDIT}`, { state: row });
  };

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
        
      <div
        style={{
          height: 400,
          width: "75%",
          margin: "auto",
          paddingTop: "30px",
        }}
      >
        <DataGrid
          rows={students}
          columns={columnHeaders}
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
