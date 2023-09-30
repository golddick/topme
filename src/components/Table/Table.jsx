import './table.scss'
import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import {MdArrowForwardIos} from 'react-icons/md'

function Table() {


const columns = [
{ field: 'TITLE', headerName: 'TITLE', width: 150 ,headerClassName: 'custom-header'},
{ field: 'STATUS', headerName: 'STATUS', width: 150 ,headerClassName: 'custom-header', renderCell: (params) => (
<span
            className={`status-cell ${params.value.toLowerCase().replace(/\s+/g, '')}`} // Removed whitespace from the className
    style={statusStyles[params.value.toLowerCase().replace(/\s+/g, '')]} // Updated to use updated key
    >
    {params.value}
    </span>
),},
{
field: 'DATECREATED',
headerName: 'DATE CREATED',
width: 100,
headerClassName: 'custom-header'
  },
  { field: 'DUEDATE', headerName: 'DUE DATE ', width: 100 , headerClassName: 'custom-header'},
  { field: 'LOCATION', headerName: 'LOCATION ', width: 100,headerClassName: 'custom-header' },
  { field: 'DONATIONEXPECTED', headerName: 'DONATION EXPECTED ', width: 100,headerClassName: 'custom-header' },
  { field: 'DONATIONRECEIVED', headerName: 'DONATION RECEIVED ', width: 100 ,headerClassName: 'custom-header'},
  { field: 'RECEIVINGORGANISATION', headerName: 'RECEIVING ORGANISATION ', width: 150 ,headerClassName: 'custom-header'},
  { field: 'actions',headerName: '', width: 100,
    renderCell: (params) => (
      <Button
      className='btn'
        variant="contained"
        onClick={() => handleButtonClick(params.row)}
      >
      <MdArrowForwardIos/>
        View more
      </Button>
    ),
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];
const statusStyles = {
  'featuredpost': {
    color: '#9747FF',
    width: '100%',
    height: '23px',
    background: 'rgba(151, 71, 255, 0.15)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  ONGOING: {
    color: 'orange',
    fontWeight: 'bold',
  },
  COMPLETED: {
    color: 'green',
    fontWeight: 'bold',
  },
};

const rows = [
  {
    id: 1,
    TITLE: 'Help build a legacy...',
    STATUS: 'FEATURED POST',
    DATECREATED: '16/3/2023',
    DUEDATE: '20/4/2023',
    LOCATION: 'Lagos',
    DONATIONEXPECTED: '$25,000',
    DONATIONRECEIVED: '$10,000',
    RECEIVINGORGANISATION: 'Kings Collage',
  },
  {
    id: 2,
    TITLE: 'Chioma needs your...',
    STATUS: 'ONGOING',
    DATECREATED: '16/3/2023',
    DUEDATE: '20/4/2023',
    LOCATION: 'Lagos',
    DONATIONEXPECTED: '$25,000',
    DONATIONRECEIVED: '$10,000',
    RECEIVINGORGANISATION: 'Kings Collage',
  },
  {
    id: 3,
    TITLE: 'Southern Kaduna...',
    STATUS: 'COMPLETED',
    DATECREATED: '16/3/2023',
    DUEDATE: '20/4/2023',
    LOCATION: 'Lagos',
    DONATIONEXPECTED: '$25,000',
    DONATIONRECEIVED: '$10,000',
    RECEIVINGORGANISATION: 'Kings Collage',
  },
];

  return (
    <div style={{ height: 'auto', width: '100%' , marginLeft: '10px', overflow: 'hidden' ,marginTop: '30px'}} className='table'>
      <DataGrid
        rows={rows}
        columns={columns}
        style={{ fontFamily: 'Poppins', color: ' #000000', fontStyle: 'normal', fontWeight: '400',fontSize: '14px',lineHeight:' 21px',letterSpacing: '0.0025em' }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Table