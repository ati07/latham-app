import { Grid } from '@mui/material'
import React from 'react'
import { formComponent } from '../../formComponents/FormComponentsObject'

function RdrAlertForm({ rdrData, dataHandle, disable }: any) {
    const RdrForm = [
        {
            type: 'DropDown',
            props: {
                key: 'merchant',
                title: "MERCHANT",
                options: ['1', '2', '3', '4'],
                value: rdrData.merchant

            }
        },
        {
            type: 'Input',
            props: {
                key: 'client',
                title: "CLIENT",
                type: 'text',
                value: rdrData.client
            }
        }
        ,
        {
            type: 'Input',
            props: {
                key: 'lookup_source_type',
                title: "Lookup Source Type",
                type: 'text',
                value: rdrData.lookup_source_type
            }
        },
        {
            type: 'Input',
            props: {
                key: 'descriptor',
                title: "DESCRIPTOR",
                type: 'text',
                value: rdrData.descriptor
            }
        },
        {
            type: 'Input',
            props: {
                key: 'issuer',
                title: "issuer",
                type: 'text',
                value: rdrData.issuer
            }
        },
        {
            type: 'Date',
            props: {
                key: 'report_start_date',
                title: "Report Start Date",
                value: rdrData.report_start_date
            }
        }
        ,
        {
            type: 'Date',
            props: {
                key: 'report_end_date',
                title: "Report End Date",
                value: rdrData.report_end_date
            }
        },
        {
            type: 'Input',
            props: {
                key: 'acquirer_bin',
                title: "Acquirer Bin",
                type: 'text',
                value: rdrData.acquirer_bin
            }
        },
        {
            type: 'Input',
            props: {
                key: 'caid',
                title: "CAID",
                type: 'text',
                value: rdrData.caid
            }
        },
        {
            type: 'Input',
            props: {
                key: 'authorization_code',
                title: "Authorization Code",
                value: rdrData.authorization_code
            }
        },
        {
            type: 'Input',
            props: {
                key: 'acquirer',
                title: "ACQUIRER",
                value: rdrData.acquirer
            }
        },
        {
            type: 'DropDown',
            props: {
                key: 'mid',
                title: "MID",
                options: ["1", "2", "3", "4", "5"],
                value: rdrData.mid
            }
        },
        {
            type: 'Input',
            props: {
                key: 'order_match_flag',
                title: "Order Match Flag",
                type: 'text',
                value: rdrData.order_match_flag
            }
        },
        {
            type: 'Input',
            props: {
                key: 'issuer_int_name',
                title: "Issuer Int Name",
                type: 'text',
                value: rdrData.issuer_int_name
            }
        },
        {
            type: 'Input',
            props: {
                key: 'insight_id',
                title: "Insight Id",
                type: 'text',
                value: rdrData.insight_id
            }
        },
        {
            type: 'Input',
            props: {
                key: 'oi_digital_flag',
                title: "OI Digital Flag",
                type: 'text',
                value: rdrData.oi_digital_flag
            }
        },
        {
            type: 'Date',
            props: {
                key: 'lookup_date',
                title: "Lookup Date",
                value: rdrData.lookup_date
            }
        },
        {
            type: 'Date',
            props: {
                key: 'deflection_settled_date',
                title: "Deflection Settled Date",
                value: rdrData.deflection_settled_date
            }
        },
        {
            type: 'Input',
            props: {
                key: 'transaction_type',
                title: "Transaction Type",
                type: 'text',
                value: rdrData.transaction_type
            }
        },
        {
            type: 'Input',
            props: {
                key: 'order_id',
                title: "Order Id",
                type: 'text',
                value: rdrData.order_id
            }
        },
        {
            type: 'Input',
            props: {
                key: 'deflection_eligible_flag',
                title: "Deflection Eligible Flag",
                type: 'text',
                value: rdrData.deflection_eligible_flag
            }
        },
        {
            type: 'Input',
            props: {
                key: 'amount',
                title: "Amount",
                type: 'text',
                value: rdrData.amount
            }
        },
        {
            type: 'Input',
            props: {
                key: 'currency',
                title: "Currency",
                type: 'text',
                value: rdrData.currency
            }
        },
        {
            type: 'Input',
            props: {
                key: 'transaction_request_id',
                title: "Transaction request Id",
                type: 'text',
                value: rdrData.transaction_request_id
            }
        },
        {
            type: 'Input',
            props: {
                key: 'card_bin',
                title: "Card Bin",
                type: 'text',
                value: rdrData.card_bin
            }
        },
        {
            type: 'Input',
            props: {
                key: 'card_last_four',
                title: "Card Last Four",
                type: 'text',
                value: rdrData.card_last_four
            }
        },
    ]

    return (

        <Grid container spacing={2} >
            {RdrForm.map((obj: any, j: number) => {
                return <Grid key={j} item xs={4}>
                    {React.createElement(formComponent[obj.type].component, { props: obj.props, dataHandle: dataHandle, disable: disable })}
                </Grid>
            })}
        </Grid>
    )
}

export default RdrAlertForm