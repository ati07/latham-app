import { Grid } from '@mui/material'
import React from 'react'
import { formComponent } from '../../formComponents/FormComponentsObject'

function ChargebacksForm({ chargebacksData, disable, dataHandle }: any) {
    const chargebacksForm = [
        {
            type: 'Input',
            props: {
                key: 'merchant',
                title: "MERCHANT",
                type: 'text',
                value: chargebacksData.merchant

            }
        },
        {
            type: 'Input',
            props: {
                key: 'client',
                title: "CLIENT",
                type: 'text',
                value: chargebacksData.client
            }
        },
        {
            type: 'Input',
            props: {
                key: 'descriptor',
                title: "DESCRIPTOR",
                type: 'text',
                value: chargebacksData.descriptor
            }
        },
        {
            type: 'Input',
            props: {
                key: 'rdrtier',
                title: "RDR TIER",
                type: 'number',
                value: chargebacksData.rdrtier
            }
        },
        {
            type: 'Input',
            props: {
                key: 'mcc',
                title: "MCC",
                type: 'number',
                value: chargebacksData.mcc
            }
        },
        {
            type: 'Input',
            props: {
                key: 'email',
                title: "EMAIL",
                type: 'email',
                value: chargebacksData.email
            }
        },
        {
            type: 'Input',
            props: {
                key: 'caid',
                title: "CAID",
                type: 'number',
                value: chargebacksData.caid
            }
        },
        {
            type: 'Date',
            props: {
                key: 'midlive',
                title: "MID LIVE",
                value: chargebacksData.midlive
            }
        },
        {
            type: 'Input',
            props: {
                key: 'acquirer',
                title: "ACQUIRER",
                value: chargebacksData.acquirer
            }
        },
        {
            type: 'Input',
            props: {
                key: 'mid',
                title: "MID",
                value: chargebacksData.mid
            }
        },
        {
            type: 'Input',
            props: {
                key: 'bin',
                title: "BIN",
                type: 'number',
                value: chargebacksData.bin
            }
        },
        {
            type: 'DropDown',
            props: {
                key: 'rdrstatus',
                title: "RDR Status",
                options: ['Active', 'Inactice'],
                value: chargebacksData.rdrstatus
            }
        },
        {
            type: 'DropDown',
            props: {
                key: 'etocastatus',
                title: "ETOCA Status",
                options: ['Active', 'Inactice'],
                value: chargebacksData.etocastatus
            }
        },
        {
            type: 'Input',
            props: {
                key: 'ethocalimit',
                title: "ETHOCA Limit",
                type: 'number',
                value: chargebacksData.ethocalimit
            }
        }
    ]
    return (

        <Grid container spacing={2} >
            {chargebacksForm.map((obj: any, j: number) => {
                return <Grid key={j} item xs={4}>
                    {React.createElement(formComponent[obj.type].component, { props: obj.props, dataHandle: dataHandle, disable: disable })}
                </Grid>
            })}
        </Grid>
    )
}

export default ChargebacksForm