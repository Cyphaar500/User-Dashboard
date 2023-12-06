import { Space } from 'antd';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
      <div className='App'>
        <Header />
        <Space className='Layout'>
          <SideMenu></SideMenu>
          <PageContent></PageContent>
        </Space>
        <Footer />
      </div>
  )
}

export default App;
