import React from 'react'
import './Salaries.css'
import Navbar from './Navbar'
import { DataGrid } from '@mui/x-data-grid';

const Salaries = () => {

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'Job', headerName: 'Job', width: 130 },
  { field: 'Salary', headerName: 'Salary', width: 130 },

  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'Payment Pending',
    headerName: 'Payment Pending',
    type: 'number',
    width: 90,
  },
  {
    field: 'action',
    headerName: 'Active',
    width: 230,
    renderCell: (params) =>{
        return(
            <button className='userListEdit'>Edit</button>
        )
    }
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Job:"Software Developer", Salary:"302090" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, Job:"Software Developer", Salary:"102090"},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, Job:"Software Developer", Salary:"302090"},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, Job:"Software Developer", Salary:"102090"},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Job:"Software Developer", Salary:"90090"},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, Job:"Software Developer", Salary:"202090"},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Job:"Software Developer", Salary:"302090"},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, Job:"Software Developer", Salary:"402090"},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, Job:"Software Developer", Salary:"302090"},
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35, Job:"Software Developer", Salary:"102090"},
  { id: 21, lastName: 'Lannister', firstName: 'Cersei', age: 42, Job:"Software Developer", Salary:"502090"},
  { id: 31, lastName: 'Lannister', firstName: 'Jaime', age: 45, Job:"Software Developer", Salary:"402090"},
  { id: 41, lastName: 'Stark', firstName: 'Arya', age: 16, Job:"Software Developer", Salary:"202090"},
  { id: 51, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Job:"Software Developer", Salary:"302090"},
  { id: 61, lastName: 'Melisandre', firstName: null, age: 150, Job:"Software Developer", Salary:"102090"},
  { id: 71, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Job:"Software Developer", Salary:"302090"},
  { id: 81, lastName: 'Frances', firstName: 'Rossini', age: 36, Job:"Software Developer", Salary:"102090"},
  { id: 91, lastName: 'Roxie', firstName: 'Harvey', age: 65, Job:"Software Developer", Salary:"202090"},

];
  return (
    <>
    <div className="teamMembers">
    <Navbar />
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 11 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
    </>
  )
}

export default Salaries
