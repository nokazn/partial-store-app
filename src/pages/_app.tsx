import { NextPageContext } from 'next';
import type { AppInitialProps, AppPropsWithLayout } from 'next/app';
import { RecoilRoot } from 'recoil';
import { DefaultLayout } from '../layouts/Default';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <RecoilRoot>
      <DefaultLayout>{getLayout(<Component {...pageProps} />)}</DefaultLayout>
    </RecoilRoot>
  );
};

App.getInitialProps = async (_context: NextPageContext): Promise<AppInitialProps> => {
  const common = await Promise.resolve({
    user: {
      name: 'John',
      age: 27,
    },
    auth: {
      isLoggedIn: false,
    },
  });

  return { pageProps: { common } };
};

export default App;
