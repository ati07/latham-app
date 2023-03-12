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
import { initialRows } from './rdrAlertdefaultData';
import RdrAlertForm from './RdrAlertForm';

// randomCreatedDate()

type Row = typeof initialRows[number];
function RdrAlert() {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [id, setId] = React.useState<any>('')
  const dispatch = useDispatch()
  const [rdrData, setRdrData] = React.useState({
    merchant: '',
    client: '',
    lookup_source_type: '',
    descriptor: '',
    issuer: '',
    report_start_date: '',
    report_end_date: '',
    acquirer_bin: '',
    caid: '',
    authorization_code: '',
    acquirer: '',
    mid: 0,
    order_match_flag: '',
    issue_int_name: '',
    insight_id: '',
    oi_digital_flag: '',
    lookup_date: '',
    deflection_settled_date: '',
    transaction_type: '',
    order_id: '',
    delfection_eligible_flag: '',
    amount: '',
    currency: '',
    transation_request_id: '',
    card_bin: '',
    card_last_four: '',
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
    setRdrData({
      merchant: singleRow.merchant,
      client: singleRow.client,
      lookup_source_type: singleRow.lookup_source_type,
      descriptor: singleRow.descriptor,
      issuer: singleRow.issuer,
      report_start_date: singleRow.report_start_date,
      report_end_date: singleRow.report_end_date,
      acquirer_bin: singleRow.acquirer_bin,
      caid: singleRow.caid,
      authorization_code: singleRow.authorization_code,
      acquirer: singleRow.acquirer,
      mid: singleRow.mid,
      order_match_flag: singleRow.order_match_flag,
      issue_int_name: singleRow.issue_int_name,
      insight_id: singleRow.insight_id,
      oi_digital_flag: singleRow.oi_digital_flag,
      lookup_date: singleRow.lookup_date,
      deflection_settled_date: singleRow.deflection_settled_date,
      transaction_type: singleRow.transaction_type,
      order_id: singleRow.order_id,
      delfection_eligible_flag: singleRow.delfection_eligible_flag,
      amount: singleRow.amount,
      currency: singleRow.currency,
      transation_request_id: singleRow.transation_request_id,
      card_bin: singleRow.card_bin,
      card_last_four: singleRow.card_last_four,
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
    setRdrData({
      merchant: singleRow.merchant,
      client: singleRow.client,
      lookup_source_type: singleRow.lookup_source_type,
      descriptor: singleRow.descriptor,
      issuer: singleRow.issuer,
      report_start_date: singleRow.report_start_date,
      report_end_date: singleRow.report_end_date,
      acquirer_bin: singleRow.acquirer_bin,
      caid: singleRow.caid,
      authorization_code: singleRow.authorization_code,
      acquirer: singleRow.acquirer,
      mid: singleRow.mid,
      order_match_flag: singleRow.order_match_flag,
      issue_int_name: singleRow.issue_int_name,
      insight_id: singleRow.insight_id,
      oi_digital_flag: singleRow.oi_digital_flag,
      lookup_date: singleRow.lookup_date,
      deflection_settled_date: singleRow.deflection_settled_date,
      transaction_type: singleRow.transaction_type,
      order_id: singleRow.order_id,
      delfection_eligible_flag: singleRow.delfection_eligible_flag,
      amount: singleRow.amount,
      currency: singleRow.currency,
      transation_request_id: singleRow.transation_request_id,
      card_bin: singleRow.card_bin,
      card_last_four: singleRow.card_last_four,
    })
    setOpen(true)
    setId(id)
    setDisable(true)
  }, [])

  const columns = React.useMemo<any>(
    () => [
      { field: 'report_start_date', headerName: 'Report Date', type: 'string', width: 150 },
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
      setRows([
        ...rows,
        {
          id: Date.now(),
          merchant: rdrData.merchant,
          client: rdrData.client,
          lookup_source_type: rdrData.lookup_source_type,
          descriptor: rdrData.descriptor,
          issuer: rdrData.issuer,
          report_start_date: rdrData.report_start_date,
          report_end_date: rdrData.report_end_date,
          acquirer_bin: rdrData.acquirer_bin,
          caid: rdrData.caid,
          authorization_code: rdrData.authorization_code,
          acquirer: rdrData.acquirer,
          mid: rdrData.mid,
          order_match_flag: rdrData.order_match_flag,
          issue_int_name: rdrData.issue_int_name,
          insight_id: rdrData.insight_id,
          oi_digital_flag: rdrData.oi_digital_flag,
          lookup_date: rdrData.lookup_date,
          deflection_settled_date: rdrData.deflection_settled_date,
          transaction_type: rdrData.transaction_type,
          order_id: rdrData.order_id,
          delfection_eligible_flag: rdrData.delfection_eligible_flag,
          amount: rdrData.amount,
          currency: rdrData.currency,
          transation_request_id: rdrData.transation_request_id,
          card_bin: rdrData.card_bin,
          card_last_four: rdrData.card_last_four,
        }])

    } else {
      let index: any;
      rows.map((r: any, j: number) => {
        if (r.id === id) {
          index = j
        }
      })
      const duplicateRows = [...rows]
      duplicateRows.splice(index, 1, { ...rdrData, id })
      setRows(duplicateRows)
      setRdrData({
        merchant: '',
        client: '',
        lookup_source_type: '',
        descriptor: '',
        issuer: '',
        report_start_date: '',
        report_end_date: '',
        acquirer_bin: '',
        caid: '',
        authorization_code: '',
        acquirer: '',
        mid: 0,
        order_match_flag: '',
        issue_int_name: '',
        insight_id: '',
        oi_digital_flag: '',
        lookup_date: '',
        deflection_settled_date: '',
        transaction_type: '',
        order_id: '',
        delfection_eligible_flag: '',
        amount: '',
        currency: '',
        transation_request_id: '',
        card_bin: '',
        card_last_four: '',
      })
      setId('')
    }
    setOpen(false);
  }

  const dataHandle = (key: any, value: any) => {
    setRdrData({
      ...rdrData,
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
          Rdr Alert
        </Typography>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
          Add Rdr Alert
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

            <RdrAlertForm rdrData={rdrData} disable={disable} dataHandle={dataHandle} />

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

export default RdrAlert