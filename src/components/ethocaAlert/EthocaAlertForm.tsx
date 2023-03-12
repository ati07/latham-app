import { Grid } from '@mui/material'
import React from 'react'
import { formComponent } from '../../formComponents/FormComponentsObject'

function EthocaAlertForm({ ethocaData, disable, dataHandle }: any) {
    const EthocaForm = [
        {
            type: 'DropDown',
            props: {
                key: 'merchant',
                title: "MERCHANT",
                options: ['1', '2', '3', '4'],
                value: ethocaData.merchant

            }
        },
        {
            type: 'Input',
            props: {
                key: 'client',
                title: "CLIENT",
                type: 'text',
                value: ethocaData.client
            }
        }
        ,
        {
            type: 'Input',
            props: {
                key: 'descriptor',
                title: "DESCRIPTOR",
                type: 'text',
                value: ethocaData.descriptor
            }
        },
        {
            type: 'Input',
            props: {
                key: 'issuer',
                title: "issuer",
                type: 'text',
                value: ethocaData.issuer
            }
        },
        {
            type: 'Date',
            props: {
                key: 'trans_date',
                title: "Trans Date",
                value: ethocaData.trans_date
            }
        }
        ,
        {
            type: 'Input',
            props: {
                key: 'arn',
                title: "ARN",
                value: ethocaData.arn
            }
        },
        {
            type: 'Input',
            props: {
                key: 'ethoca_id',
                title: "Ethoca Id",
                type: 'text',
                value: ethocaData.ethoca_id
            }
        },
        {
            type: 'Input',
            props: {
                key: 'mid_live',
                title: "Mid Live",
                type: 'text',
                value: ethocaData.mid_live
            }
        },
        {
            type: 'DropDown',
            props: {
                key: 'acquirer',
                title: "ACQUIRER",
                options: ['1', '2', '3', '4', '5'],
                value: ethocaData.acquirer
            }
        },
        {
            type: 'DropDown',
            props: {
                key: 'mid',
                title: "MID",
                options: ["1", "2", "3", "4", "5"],
                value: ethocaData.mid
            }
        },

        {
            type: 'Input',
            props: {
                key: 'bin',
                title: "Bin",
                type: 'text',
                value: ethocaData.bin
            }
        },
        {
            type: 'Date',
            props: {
                key: 'alert_date',
                title: "Alert Date",
                value: ethocaData.alert_date
            }
        },
        {
            type: 'Input',
            props: {
                key: 'card_number',
                title: "Card Number",
                type: 'text',
                value: ethocaData.card_number
            }
        },
        {
            type: 'Input',
            props: {
                key: 'transaction_id',
                title: "Transaction Id",
                value: ethocaData.transaction_id
            }
        },
        {
            type: 'Input',
            props: {
                key: 'alert_type',
                title: "Alert Type",
                value: ethocaData.alert_type
            }
        },
        {
            type: 'Input',
            props: {
                key: 'alert_date_time',
                title: "Alert Date/Time",
                type: 'text',
                value: ethocaData.alert_date_time
            }
        },
        {
            type: 'Input',
            props: {
                key: 'amount',
                title: "Amount",
                type: 'text',
                value: ethocaData.amount
            }
        },
        {
            type: 'Input',
            props: {
                key: 'cb_code',
                title: "CB Code",
                type: 'text',
                value: ethocaData.cb_code
            }
        }

    ]
    return (

        <Grid container spacing={2} >
            {EthocaForm.map((obj: any, j: number) => {
                return <Grid key={j} item xs={4}>
                    {React.createElement(formComponent[obj.type].component, { props: obj.props, dataHandle: dataHandle, disable: disable })}
                </Grid>
            })}
        </Grid>
    )
}

export default EthocaAlertForm