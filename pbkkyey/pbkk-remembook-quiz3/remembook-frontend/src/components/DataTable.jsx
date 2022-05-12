import React, {Component, useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'author', headerName: 'Author', width: 130 },
  { field: 'title', headerName: 'Title', width: 130 },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  }
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable() {
  const [row, setRow] = useState("");
  
  // componentDidMount(){
  //   EmployeeServices.getEmployees().then((res) => {
  //       this.setState({employees : res.data})
  //   });
  // }

  useEffect(()=>{
    axios
    .get("http://localhost:8080/api/v1/reviews")
    .then(res=>{
      console.log(res.data)
      setRow(res.data)
    })
    .catch(err=>{
      // console.log(err)
    })
  }, [])

  
  
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      );

    
}
