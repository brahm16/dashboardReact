
import {Box, useTheme,Typography} from "@mui/material";
import Header from "../../components/Header";
import {tokens} from "../../theme";
import {mockDataInvoices} from "../../data/mockData";
import {DataGrid} from "@mui/x-data-grid";


const Invoices=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "registrarId", headerName: "Registrar Id" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "cost",
            headerName: "Cost",
            flex:1,
            renderCell: (params)=>{
                return(
                    <Typography color={colors.greenAccent[500]}>
                        ${params.row.cost}
                    </Typography>
                )
            }
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1
        },



    ];
    return(<Box m='20px'>
        <Header title='Invoices' subTitle='List Invoices Balancing' />
        <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
                '& .MuiDataGrid-root':{
                    border: 'none'
                },
                '& .MuiDataGrid-cell':{
                    borderBottom: 'none'
                },
                '& .name-column-cell':{
                    color: colors.greenAccent[300]
                },
                '& .MuiDataGrid-columnHeaders':{
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: 'none'
                },
                '& .MuiDataGrid-virtualScroller':{
                    backgroundColor: colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer':{
                    borderTop:'none',
                    backgroundColor: colors.blueAccent[700]
                },
                '& .MuiCheckbox-root':{
                    color: `${colors.greenAccent[200]} !important`
                }

            }}
        >
            <DataGrid checkboxSelection columns={columns} rows={mockDataInvoices}  />
        </Box>
    </Box>)
}

export default Invoices;