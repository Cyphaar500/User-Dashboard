import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Bar } from 'react-chartjs-2';
import { getRevenue } from '../../API';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

const DashboardChart = () => {
    const [revenueData, setRevenueData] = useState({
        labels:[],
        datasets:[],
    })

    useEffect(() => {
        getRevenue().then(res => {
            const labels = res.carts.map(cart => {
                return `User-${cart.userId}`;
            })
            const data = res.carts.map(cart => {
                return cart.discountedTotal;
            })
            const dataSource = {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },         
                ],
            };            
            setRevenueData(dataSource)           
        })
    }, []);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Order Revenue',
          },
        },
    };

  return (
    <Card className='chart'>
      <Bar options={options} data={revenueData} />
    </Card>
  )
}

export default DashboardChart;
