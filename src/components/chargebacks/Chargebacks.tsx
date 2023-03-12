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
import ChargebacksForm from './ChargebacksForm';
import { initialRows } from './ChargebacksdefaultData';

type Row = typeof initialRows[number];

function Chargebacks() {
    const [rows, setRows] = React.useState<any>(initialRows);
    const [open, setOpen] = React.useState(false);
    const [disable, setDisable] = React.useState(false);
    const [id, setId] = React.useState<any>(0)
    const dispatch = useDispatch()
    const [chargebacksData, setChargebacksData] = React.useState({
        merchant: '',
        client: '',
        descriptor: '',
        issuer: '',
        trans_date: '',
        mid: 0,
        cb_code: '',
        transation_id: '',
        acquirer: '',
        due_date: '',
        card_number: '',
        amount: '',
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
            setRows((prevRows:any) => prevRows.filter((row:any) => row.id !== id));
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
        setChargebacksData({
            merchant: singleRow.merchant,
            client: singleRow.client,
            descriptor: singleRow.descriptor,
            issuer: singleRow.issuer,
            trans_date: singleRow.trans_date,
            mid: singleRow.mid,
            cb_code: singleRow.cb_code,
            transation_id: singleRow.transation_id,
            acquirer: singleRow.acquirer,
            due_date: singleRow.due_date,
            card_number: singleRow.card_number,
            amount: singleRow.amount,
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
        setChargebacksData({
            merchant: singleRow.merchant,
            client: singleRow.client,
            descriptor: singleRow.descriptor,
            issuer: singleRow.issuer,
            trans_date: singleRow.trans_date,
            mid: singleRow.mid,
            cb_code: singleRow.cb_code,
            transation_id: singleRow.transation_id,
            acquirer: singleRow.acquirer,
            due_date: singleRow.due_date,
            card_number: singleRow.card_number,
            amount: singleRow.amount,
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
            { field: 'treansaction_id', headerName: 'Treansaction', type: 'string', width: 150 },
            { field: 'amount', headerName: 'Amount', type: 'string', width: 150 },
            { field: 'cb_code', headerName: 'Code', type: 'string', width: 100 },
            { field: 'due_date', headerName: 'Due Date', type: 'string', width: 150 },
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
        if (id === 0) {
            setRows([
                ...rows,
                {
                    id: Date.now(),
                    created: new Date().toISOString().split('T')[0],
                    merchant: chargebacksData.merchant,
                    client: chargebacksData.client,
                    descriptor: chargebacksData.descriptor,
                    issuer: chargebacksData.issuer,
                    trans_date: chargebacksData.trans_date,
                    mid: chargebacksData.mid,
                    cb_code: chargebacksData.cb_code,
                    transation_id: chargebacksData.transation_id,
                    acquirer: chargebacksData.acquirer,
                    due_date: chargebacksData.due_date,
                    card_number: chargebacksData.card_number,
                    amount: chargebacksData.amount,
                }])

        } else {
            let index: any;
            rows.map((r: any, j: number) => {
                if (r.id === id) {
                    index = j
                }
            })
            const duplicateRows = [...rows]
            duplicateRows.splice(index, 1, { ...chargebacksData, id })
            setRows(duplicateRows)
            setChargebacksData({
                merchant: '',
                client: '',
                descriptor: '',
                issuer: '',
                trans_date: '',
                mid: 0,
                cb_code: '',
                transation_id: '',
                acquirer: '',
                due_date: '',
                card_number: '',
                amount: '',
            })
        }
        setOpen(false);
        setId('')
    }

    const dataHandle = (key: any, value: any) => {
        setChargebacksData({
            ...chargebacksData,
            [key]: value
        })
    }
    // useEffect(() => {
    //     console.log("merchantForm", merchantForm);
    // }, [chargebacksData])
    // useEffect(()=>{

    //   console.log('chargebacksData',chargebacksData);

    // },[chargebacksData])
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
                    Chargebacks
                </Typography>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
                    Add Chargebacks
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

                        <ChargebacksForm chargebacksData={chargebacksData} disable={disable} dataHandle={dataHandle} />

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

export default Chargebacks