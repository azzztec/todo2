import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
