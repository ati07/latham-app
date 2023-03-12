import React, { useEffect, useMemo } from 'react'
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
import moment from 'moment';
import MerchantsActions from './MerchantsActions';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowId,
    // GridColumns,
    GridToolbar
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { formComponent } from '../../formComponents/FormComponentsObject';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { closeDialogBox, openDialogBox } from '../../redux/dialogBox/dialogboxSlice';
import { useDispatch } from 'react-redux';
import MerchantForm from './MerchantForm';
import { initialRows } from './merchantdefaultData';

// randomCreatedDate()

type Row = typeof initialRows[number];
function Merchants() {
    const [rows, setRows] = React.useState<Row[]>(initialRows);
    const [open, setOpen] = React.useState(false);
    const [disable, setDisable] = React.useState(false);
    const [id, setId] = React.useState<any>('')
    const dispatch = useDispatch()
    const [merchantsData, setMerchantsData] = React.useState({
        merchant: "",
        client: '',
        descriptor: '',
        rdrtier: '',
        mcc: '',
        email: '',
        caid: '',
        midlive: '',
        acquirer: '',
        rdrstatus: '',
        bin: '',
        mid: 0,
        etocastatus: '',
        ethocalimit: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(closeDialogBox())
        setDisable(false)
    };
    const handleDelete=(id:GridRowId)=>{
        setTimeout(() => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            });
        dispatch(closeDialogBox())
    }    
    const deleteUser = React.useCallback(
        (id: GridRowId) => () => {
            dispatch(openDialogBox({ open: true, 
                message: "Are you sure, you want to delete this row?", 
                btnPrimaryText: "Confirm Delete", 
                btnSecondaryText: "No", 
                primaryAction:()=> handleDelete(id), 
                secondaryAction: handleClose }))   
        },
        [],
    );
    const edit = React.useCallback((id: GridRowId) => () => {

        const singleRow: any = rows.filter((r: any) => r.id === id)[0]
        console.log("singleRow", singleRow);
        setMerchantsData({
            merchant: singleRow.merchant,
            client: singleRow.client,
            descriptor: singleRow.descriptor,
            rdrtier: singleRow.rdrtier,
            mcc: singleRow.mcc,
            email: singleRow.email,
            caid: singleRow.caid,
            midlive: singleRow.midlive,
            acquirer: singleRow.acquirer,
            rdrstatus: singleRow.rdrstatus,
            bin: singleRow.bin,
            mid: singleRow.mid,
            etocastatus: singleRow.etocastatus,
            ethocalimit: singleRow.ethocalimit
        })
        setOpen(true)
        setId(id)
        // setRows((prevRows) => {
        //     const rowToDuplicate = prevRows.find((row) => row.id === id)!;

        //     return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
        // });
    }, [])

    const view = React.useCallback((id: GridRowId) => () => {

        const singleRow: any = rows.filter((r: any) => r.id === id)[0]
        // console.log("singleRow", singleRow);/
        setMerchantsData({
            merchant: singleRow.merchant,
            client: singleRow.client,
            descriptor: singleRow.descriptor,
            rdrtier: singleRow.rdrtier,
            mcc: singleRow.mcc,
            email: singleRow.email,
            caid: singleRow.caid,
            midlive: singleRow.midlive,
            acquirer: singleRow.acquirer,
            rdrstatus: singleRow.rdrstatus,
            bin: singleRow.bin,
            mid: singleRow.mid,
            etocastatus: singleRow.etocastatus,
            ethocalimit: singleRow.ethocalimit
        })
        setOpen(true)
        setId(id)
        setDisable(true)
    }, [])

    const columns = React.useMemo<any>(
        () => [
            { field: 'midlive', headerName: 'Created', type: 'string', width: 150 },
            { field: 'client', headerName: 'Client', type: 'string', width: 150 },
            { field: 'merchant', headerName: 'Merchant', type: 'string', width: 150 },
            { field: 'acquirer', headerName: 'Acquirer', type: 'string', width: 100 },
            { field: 'descriptor', headerName: 'descriptor', type: 'string', width: 150 },
            { field: 'rdrstatus', headerName: 'Rdr Status', type: 'string', width: 150 },
            { field: 'etocastatus', headerName: 'Etoca Status', type: 'string', width: 150 },
            { field: 'mid', headerName: 'MID', type: 'number', width: 100 },
            {
                field: 'actions',
                headerName: 'Actions',
                type: 'actions',
                width: 150,
                getActions: (params: any) => [
                    <GridActionsCellItem
                        icon={<RemoveRedEyeOutlinedIcon />}
                        label="View"
                        onClick={view(params.id)}
                    // showInMenu
                    />,

                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        onClick={edit(params.id)}
                    // showInMenu
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={deleteUser(params.id)}
                    />,

                ],
            },
        ],
        [deleteUser, edit, view]
    )
    
    const Save = () => {
        if (id === '') {
            setRows([
                ...rows,
                {
                    id: Date.now(),
                    client: merchantsData.client,
                    merchant: merchantsData.merchant,
                    acquirer: merchantsData.acquirer,
                    mid: merchantsData.mid,
                    descriptor: merchantsData.descriptor,
                    rdrstatus: merchantsData.rdrstatus,
                    etocastatus: merchantsData.etocastatus,
                    midlive: merchantsData.midlive,
                    rdrtier: merchantsData.rdrtier,
                    mcc: merchantsData.mcc,
                    email: merchantsData.email,
                    caid: merchantsData.caid,
                    bin: merchantsData.bin,
                    ethocalimit: merchantsData.ethocalimit
                }])

        } else {
            let index: any;
            rows.map((r: any, j: number) => {
                if (r.id === id) {
                    index = j
                }
            })
            const duplicateRows = [...rows]
            duplicateRows.splice(index, 1, { ...merchantsData, id })
            setRows(duplicateRows)
            setMerchantsData({
                merchant: "",
                client: '',
                descriptor: '',
                rdrtier: '',
                mcc: '',
                email: '',
                caid: '',
                midlive: '',
                acquirer: '',
                rdrstatus: '',
                bin: '',
                mid: 0,
                etocastatus: '',
                ethocalimit: ''
            })
        }
        setOpen(false);
    }

    const dataHandle = (key: any, value: any) => {
        setMerchantsData({
            ...merchantsData,
            [key]: value
        })
    }
    // useEffect(() => {
    //     console.log("merchantForm", merchantForm);
    // }, [merchantsData])
    // useEffect(()=>{

    //   console.log('merchantsData',merchantsData);

    // },[merchantsData])
    return (
        <>
            <Box
                sx={{
                    height: 400,
                    width: '100%',
                }}
            >
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{ textAlign: 'center', mt: 3, mb: 3 }}
                >
                    Merchants
                </Typography>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
                    Add Merchant
                </Button>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid columns={columns} rows={rows} slots={{
                        toolbar: GridToolbar,
                    }} />
                </div>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        
                        <MerchantForm merchantsData={merchantsData} disable={disable} dataHandle={dataHandle}/>
                       
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    {
                        !disable && <Button variant="contained" onClick={Save} endIcon={<SendIcon />}>
                            Save
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Merchants