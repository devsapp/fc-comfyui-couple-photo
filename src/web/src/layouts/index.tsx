import { Outlet } from '@umijs/max';
import { ConfigProvider, Layout, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './layout.less';
const { Content } = Layout;

export default function Index() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.darkAlgorithm,
        // token: { colorPrimary: '#2e93e9', colorInfo: '#2e93e9' },
        token: {
          colorBgBase: '#323642',
          colorBgLayout: '#323642',
          colorPrimary: '#605fdc',
          colorLink: '#66ccff',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Layout style={{ height: '100%' }}>
          <Content
            style={{
              height: '100%',
              maxHeight: '100vh',
              overflow: 'auto',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
