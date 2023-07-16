import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { FormHelperText } from "@mui/material";
import { APP, FINGERPRINTLOAD } from "../constants/constants";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const departments = {
  "Engineering Faculty": [
    { name: "Department of Computer Science and Engineering", code: "CSE" },
    {
      name: "Department of Electronics and Telecommunication Engineering",
      code: "ENTC",
    },
    { name: "Department of Biomedical Engineering", code: "BME" },
    { name: "Department of Electrical Engineering", code: "EE" },
    { name: "Department of Mechanical Engineering", code: "ME" },
    { name: "Department of Civil Engineering", code: "CE" },
    { name: "Department of Material Science and Engineering", code: "MSE" },
    { name: "Department of Chemical and Process Engineering", code: "CPE" },
    { name: "Department of Earth Resources Engineering", code: "ERE" },
    { name: "Department of Transport and Logistics Management", code: "TLM" },
    { name: "Department of Textile and Clothing Technology", code: "TCT" },
  ],
  "Architecture Faculty": [
    { name: "Department of Architecture", code: "ARCH" },
    { name: "Department of Town and Country Planning", code: "TCP" },
    { name: "Department of Building Economics", code: "BE" },
    { name: "Department of Integrated Design", code: "ID" },
    { name: "Department of Facilities Management", code: "FM" },
  ],
  "IT Faculty": [
    { name: "Department of Information Technology", code: "IT" },
    { name: "Department of Interdisciplinary Studies", code: "IS" },
    { name: "Department of Computational Mathematics", code: "CM" },
  ],
  "Business Faculty": [
    { name: "Department of Business Analytics", code: "BA" },
    { name: "Department of Business Process Management", code: "BPM" },
    { name: "Department of Financial Service Management", code: "FSM" },
  ],
  "Medical Faculty": [
    { name: "Department of Anatomy", code: "ANAT" },
    {
      name: "Department of Biochemistry and Clinical Chemistry",
      code: "BCHCCH",
    },
    { name: "Department of Microbiology and Parasitology", code: "MICROPARA" },
    { name: "Department of Pharmacology", code: "PHARM" },
    { name: "Department of Physiology", code: "PHYS" },
    { name: "Department of Pathology and Forensic Medicine", code: "PATHFM" },
    {
      name: "Department of Community Medicine and Family Medicine",
      code: "CMFM",
    },
    { name: "Department of Medicine and Mental Health", code: "MEDMH" },
    { name: "Department of Obstetrics and Gynaecology", code: "OG" },
    { name: "Department of Paediatrics and Neonatology", code: "PAEDNEO" },
    { name: "Department of Surgery  and Anesthesia", code: "SURAN" },
    { name: "Department of Medical Education", code: "ME" },
    { name: "Department of Medical Technology", code: "MT" },
  ],
};

export default function InfoAsker() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    index: "",
    email: "",
    firstName: "",
    lastName: "",
    faculty: "",
    fingerPrint: "",
    facePrint: "",
    department: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", student);
    const data = new FormData(event.currentTarget);
    setErrors({});
    const newErrors = {};
    let isError = false;
    if (!data.get("index")) {
      newErrors.index = "Index No is required!";
      isError = true;
    }
    if (!data.get("firstName")) {
      newErrors.firstName = "First name is required!";
      isError = true;
    }
    if (!data.get("lastName")) {
      newErrors.lastName = "Last name is required!";
      isError = true;
    }
    if (!data.get("email")) {
      newErrors.email = "Email is required!";
      isError = true;
    }
    if (!student.faculty) {
      newErrors.faculty = "Faculty is required!";
      isError = true;
    }

    if (isError) {
      setErrors(newErrors);
      return;
    }

    navigate(`/${APP}/${FINGERPRINTLOAD}`, { state: student });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "index":
        setStudent((cur) => {
          return { ...cur, index: value };
        });
        break;
      case "firstName":
        setStudent((cur) => {
          return { ...cur, firstName: value };
        });
        break;
      case "lastName":
        setStudent((cur) => {
          return { ...cur, lastName: value };
        });
        break;
      case "email":
        setStudent((cur) => {
          return { ...cur, email: value };
        });
        break;
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Student
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              border: "1px solid blue",
              borderRadius: "4px",
              padding: "16px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="index"
              label="Index Number"
              name="index"
              autoComplete="index"
              autoFocus
              value={student.index}
              onChange={handleChange}
            />
            {errors.index && (
              <FormHelperText error>{errors.index}</FormHelperText>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              autoComplete="email"
              value={student.email}
              onChange={handleChange}
            />
            {errors.email && (
              <FormHelperText error>{errors.email}</FormHelperText>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              id="firstName"
              autoComplete="first name"
              value={student.firstName}
              onChange={handleChange}
            />

            {errors.firstName && (
              <FormHelperText error>{errors.firstName}</FormHelperText>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
              autoComplete="last name"
              value={student.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <FormHelperText error>{errors.lastName}</FormHelperText>
            )}
            <FormControl fullWidth margin="normal">
              <InputLabel id="faculty-select-label" required>
                Faculty
              </InputLabel>
              <Select
                labelId="faculty-select-label"
                id="faculty-select"
                required
                value={student.faculty}
                onChange={(e) =>
                  setStudent((cur) => {
                    return { ...cur, faculty: e.target.value };
                  })
                }
                label="Faculty"
              >
                <MenuItem value="Engineering Faculty">
                  Faculty of Engineering
                </MenuItem>
                <MenuItem value="Architecture Faculty">
                  Faculty of Architecture
                </MenuItem>
                <MenuItem value="IT Faculty">
                  Faculty of Information Technology
                </MenuItem>
                <MenuItem value="Business Faculty">
                  Faculty of Business
                </MenuItem>
                <MenuItem value="Medical Faculty">Faculty of Medicine</MenuItem>
              </Select>
            </FormControl>
            {errors.faculty && (
              <FormHelperText error>{errors.faculty}</FormHelperText>
            )}
            {student.faculty && (
              <FormControl fullWidth margin="normal">
                <InputLabel id="department-select-label" required>
                  Department
                </InputLabel>
                <Select
                  labelId="department-select-label"
                  id="department-select"
                  required
                  value={student.department}
                  onChange={(e) =>
                    setStudent((cur) => {
                      return { ...cur, department: e.target.value };
                    })
                  }
                  label="Department"
                >
                  {departments[student.faculty].map((department, i) => (
                    <MenuItem key={i} value={department.name}>
                      {department.name} - {department.code}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
