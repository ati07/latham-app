import { Grid } from '@mui/material'
import React from 'react'
import { formComponent } from '../../formComponents/FormComponentsObject'

function MerchantForm({ merchantsData, dataHandle, disable }: any) {
    const merchantForm = [
        {
            type: 'Input',
            props: {
                key: 'merchant',
                title: "MERCHANT",
                type: 'text',
                value: merchantsData.merchant

            }
        },
        {
            type: 'Input',
            props: {
                key: 'client',
                title: "CLIENT",
                type: 'text',
                value: merchantsData.client
            }
        },
        {
            type: 'Input',
            props: {
                key: 'descriptor',
                title: "DESCRIPTOR",
                type: 'text',
                value: merchantsData.descriptor
            }
        },
        {
            type: 'Input',
            props: {
                key: 'rdrtier',
                title: "RDR TIER",
                type: 'number',
                value: merchantsData.rdrtier
            }
        },
        {
            type: 'Input',
            props: {
                key: 'mcc',
                title: "MCC",
                type: 'number',
                value: merchantsData.mcc
            }
        },
        {
            type: 'Input',
            props: {
                key: 'email',
                title: "EMAIL",
                type: 'email',
                value: merchantsData.email
            }
        },
        {
            type: 'Input',
            props: {
                key: 'caid',
                title: "CAID",
                type: 'number',
                value: merchantsData.caid
            }
        },
        {
            type: 'Date',
            props: {
                key: 'midlive',
                title: "MID LIVE",
                value: merchantsData.midlive
            }
        },
        {
            type: 'Input',
            props: {
                key: 'acquirer',
                title: "ACQUIRER",
                value: merchantsData.acquirer
            }
        },
        {
            type: 'Input',
            props: {
                key: 'mid',
                title: "MID",
                value: merchantsData.mid
            }
        },
        {
            type: 'Input',
            props: {
                key: 'bin',
                title: "BIN",
                type: 'number',
                value: merchantsData.bin
            }
        },
        {
            type: 'DropDown',
            props: {
                key: 'rdrstatus',
                title: "RDR Status",
                options: ['Active', 'Inactice'],
                value: merchantsData.rdrstatus
            }
        },
        {
            type: 'DropDown',
            props: {
                key: 'etocastatus',
                title: "ETOCA Status",
                options: ['Active', 'Inactice'],
                value: merchantsData.etocastatus
            }
        },
        {
            type: 'Input',
            props: {
                key: 'ethocalimit',
                title: "ETHOCA Limit",
                type: 'number',
                value: merchantsData.ethocalimit
            }
        }
    ]
    return (
        <Grid container spacing={2} >
            {merchantForm.map((obj: any, j: number) => {
                return <Grid key={j} item xs={6}>
                    {React.createElement(formComponent[obj.type].component, { props: obj.props, dataHandle: dataHandle, disable: disable })}
                </Grid>
            })}
        </Grid>
    )
}

export default MerchantForm