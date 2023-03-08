import React from 'react'
import { Grid,Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chart from '../../charts/lineChart/LineCharts';
import BarCharts from '../../charts/barChart/BarCharts';
import PieCharts from '../../charts/pieCharts/PieCharts';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'100%',
    height:"100%"
}));
function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }} width='100%' height='100%'>
            <Grid container spacing={2} width='100%' height='300px'>
                <Grid item xs={6} md={8} width='100%' height='300px'>
                    <Item><Chart/></Item>
                </Grid>
                <Grid item xs={6} md={4} width='100%' height='300px'>
                    <Item><BarCharts/></Item>
                </Grid>
                <Grid item xs={6} md={4} width='100%' height='250px'>
                    <Item><PieCharts/></Item>
                </Grid>
                <Grid item xs={6} md={8} width='100%' height='250px'>
                    <Item><PieCharts/></Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard