import { Layout, Card, Col, Row, Typography, Statistic, Progress } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';
import { useAllProductQuery } from '../redux/features/product/productApi';
import { useGetAllSaleQuery } from '../redux/features/sale/saleApi';
import { useUsersQuery } from '../redux/features/auth/authApi';

const { Content } = Layout;
const { Title } = Typography;

const info = [
  { name: 'Jan 2024', Users: 5, Products: 20, Sales: 20 },
  { name: 'Dec 2023', Users: 10, Products: 20, Sales: 20 },
  { name: 'Nov 2023', Users: 3, Products: 10, Sales: 8 },

];
const formatter: (value: number | string) => React.ReactNode = (value) => (
  <CountUp end={Number(value)} separator="," />
);
const UserDashboard = () => {

  const { data } = useAllProductQuery(undefined);
  const sales = useGetAllSaleQuery(undefined);
  const users = useUsersQuery(undefined);
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable>
              <Statistic title="Users" value={users?.data?.data.length} formatter={formatter} valueStyle={{ color: '#3f8600' }} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable>
              <Statistic title="Products" value={data?.data.length} formatter={formatter} valueStyle={{ color: '#108ee9' }} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable>
              <Statistic title="Sales" value={sales?.data?.data.length} formatter={formatter} valueStyle={{ color: '#f50' }} precision={2} />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '20px' }} >
          <Col xs={24} md={16} lg={16} xl={16}>
            <Card hoverable className='hidden
        md:block lg:block xl:block'>
              <Title level={4}>Sales Overview</Title>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={info}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Users" fill="#8884d8" />
                  <Bar dataKey="Products" fill="#82ca9d" />
                  <Bar dataKey="Sales" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col xs={24} md={8} lg={8} xl={8}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Progress type="circle" percent={50} />
            </div>
          </Col>
        </Row>


      </Content>
    </Layout>
  );
}

export default UserDashboard;
