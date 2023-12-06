import { Card, Space, Statistic } from 'antd';
import './dashboard.css';

const DashboardCard = ({icon, title, value}) => {
  return (
    <div>
        <Card className='card'>
            <Space direction='horizontal'>
                {icon}
                <Statistic title={title} value={value}></Statistic>
            </Space>
        </Card>
    </div>
  )
}

export default DashboardCard;
