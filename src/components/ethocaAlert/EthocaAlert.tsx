import React, { useEffect, useMemo } from 'react'
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
import moment from 'moment';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowId,
    // GridColumns,
    GridToolbar
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { closeDialogBox, openDialogBox } from '../../redux/dialogBox/dialogboxSlice';
import { useDispatch } from 'react-redux';
import EthocaAlertForm from './EthocaAlertForm';
import { initialRows } from './ethocaAlertDefaultData';

type Row = typeof initialRows[number];
function EthocaAlert() {
    const [rows, setRows] = React.useState<Row[]>(initialRows);
    const [open, setOpen] = React.useState(false);
    const [disable, setDisable] = React.useState(false);
    const [id, setId] = React.useState<any>('')
    const dispatch = useDispatch()
    const [ethocaData, setEthocaData] = React.useState({
        merchant: '',
        client: '',
        descriptor: '',
        issuer: '',
        created: '',
        trans_date: '',
        arn: '',
        ethoca_id: '',
        mid_live: '',
        acquirer: '',
        mid: 0,
        bin: '',
        alert_date: '',
        card_number: '',
        transation_id: '',
        alert_type: '',
        alert_date_time: '',
        amount: '',
        cb_code: '',
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(closeDialogBox())
        setDisable(false)
        setId('')
    };
    const handleDelete = (id: GridRowId) => {
        setTimeout(() => {
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        });
        dispatch(closeDialogBox())
    }

    const deleteUser = React.useCallback(
        (id: GridRowId) => () => {
            dispatch(openDialogBox({
                open: true,
                message: "Are you sure, you want to delete this row?",
                btnPrimaryText: "Confirm Delete",
                btnSecondaryText: "No",
                primaryAction: () => handleDelete(id),
                secondaryAction: handleClose
            }))
        },
        [],
    );
    const edit = React.useCallback((id: GridRowId) => () => {

        const singleRow: any = rows.filter((r: any) => r.id === id)[0]
        console.log("singleRow", singleRow);
        setEthocaData({
            merchant: singleRow.merchant,
            client: singleRow.client,
            descriptor: singleRow.descriptor,
            issuer: singleRow.issuer,
            created: singleRow.created,
            trans_date: singleRow.trans_date,
            arn: singleRow.arn,
            ethoca_id: singleRow.ethoca_id,
            mid_live: singleRow.mid_live,
            acquirer: singleRow.acquirer,
            mid: singleRow.mid,
            bin: singleRow.bin,
            alert_date: singleRow.alert_date,
            card_number: singleRow.card_number,
            transation_id: singleRow.transation_id,
            alert_type: singleRow.alert_type,
            alert_date_time: singleRow.alert_date_time,
            amount: singleRow.amount,
            cb_code: singleRow.cb_code,
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
        setEthocaData({
            merchant: singleRow.merchant,
            client: singleRow.client,
            descriptor: singleRow.descriptor,
            issuer: singleRow.issuer,
            created: singleRow.created,
            trans_date: singleRow.trans_date,
            arn: singleRow.arn,
            ethoca_id: singleRow.ethoca_id,
            mid_live: singleRow.mid_live,
            acquirer: singleRow.acquirer,
            mid: singleRow.mid,
            bin: singleRow.bin,
            alert_date: singleRow.alert_date,
            card_number: singleRow.card_number,
            transation_id: singleRow.transation_id,
            alert_type: singleRow.alert_type,
            alert_date_time: singleRow.alert_date_time,
            amount: singleRow.amount,
            cb_code: singleRow.cb_code,
        })
        setOpen(true)
        setId(id)
        setDisable(true)
    }, [])

    const columns = React.useMemo<any>(
        () => [
            { field: 'created', headerName: 'Created', type: 'string', width: 150 },
            { field: 'merchant', headerName: 'Merchant', type: 'string', width: 150 },
            { field: 'acquirer', headerName: 'Acquirer', type: 'string', width: 100 },
            { field: 'mid', headerName: 'MID', type: 'number', width: 100 },
            { field: 'transaction_id', headerName: 'Transaction Id', type: 'string', width: 150 },
            { field: 'amount', headerName: 'Amount', type: 'string', width: 150 },
            { field: 'trans_date', headerName: 'Transaction date', type: 'string', width: 150 },
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
            // const d = new Date();
            // let text = d.toISOString();
            setRows([
                ...rows,
                {
                    id: Date.now(),
                    created: new Date().toISOString().split('T')[0],
                    merchant: ethocaData.merchant,
                    client: ethocaData.client,
                    descriptor: ethocaData.descriptor,
                    issuer: ethocaData.issuer,
                    trans_date: ethocaData.trans_date,
                    arn: ethocaData.arn,
                    ethoca_id: ethocaData.ethoca_id,
                    mid_live: ethocaData.mid_live,
                    acquirer: ethocaData.acquirer,
                    mid: ethocaData.mid,
                    bin: ethocaData.bin,
                    alert_date: ethocaData.alert_date,
                    card_number: ethocaData.card_number,
                    transation_id: ethocaData.transation_id,
                    alert_type: ethocaData.alert_type,
                    alert_date_time: ethocaData.alert_date_time,
                    amount: ethocaData.amount,
                    cb_code: ethocaData.cb_code,
                }])

        } else {
            let index: any;
            rows.map((r: any, j: number) => {
                if (r.id === id) {
                    index = j
                }
            })
            const duplicateRows = [...rows]
            duplicateRows.splice(index, 1, { ...ethocaData, id })
            setRows(duplicateRows)
            setEthocaData({
                merchant: '',
                client: '',
                descriptor: '',
                issuer: '',
                created: '',
                trans_date: '',
                arn: '',
                ethoca_id: '',
                mid_live: '',
                acquirer: '',
                mid: 0,
                bin: '',
                alert_date: '',
                card_number: '',
                transation_id: '',
                alert_type: '',
                alert_date_time: '',
                amount: '',
                cb_code: '',
            })
            setId('')
        }
        setOpen(false);
    }

    const dataHandle = (key: any, value: any) => {
        setEthocaData({
            ...ethocaData,
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
                    Ethoca Alert
                </Typography>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
                    Add Ethoca Alert
                </Button>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid columns={columns} rows={rows} slots={{
                        toolbar: GridToolbar,
                    }} />
                </div>
            </Box>
            <Dialog
                fullWidth
                maxWidth={'lg'}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        <EthocaAlertForm ethocaData={ethocaData} disable={disable} dataHandle={dataHandle} />

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose}>Cancel</Button>
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

export default EthocaAlert