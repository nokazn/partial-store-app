import { verify } from 'crypto';
import { NextPageContext } from 'next';
import type { AppInitialProps, AppPropsWithLayout, InitialProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { DefaultLayout } from '../layouts/Default';

const App = ({ Component, pageProps, commonProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <RecoilRoot>
      <DefaultLayout common={commonProps}>{getLayout(<Component {...pageProps} />)}</DefaultLayout>
    </RecoilRoot>
  );
};

const sleepWith = <V,>(value: V, ms: number) => new Promise((resolve) => setTimeout(resolve, ms)).then(() => value);

const getCommonData = async () => {
  // サーバーサイドでのみAPIを呼ぶ
  if (typeof window === 'undefined') {
    const commonData = await sleepWith(
      {
        user: {
          name: 'John',
          age: 27,
        },
        auth: {
          isLoggedIn: true,
        },
      },
      1500,
    );
    return commonData;
  }
  return undefined;
};

App.getInitialProps = async (_context: NextPageContext): Promise<InitialProps> => {
  const commonProps = await getCommonData();
  return { pageProps: {}, commonProps };
};

export default App;
