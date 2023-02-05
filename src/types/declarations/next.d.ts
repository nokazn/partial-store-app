import { NextPage, NextPageContext, NextPageWithLayout } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { CommonSchema } from '../../features/common';

type Primitive = string | number | symbol;
type Dictionary<V = unknown, K = Primitive> = Record<K, V>;

type CommonProps = {
  commonProps?: CommonSchema;
};

declare module 'next' {
  type NextLayout = (page: ReactElement) => ReactElement;

  type NextPageWithLayout<P = Dictionary, IP = P> = NextPage<P, IP> & {
    getLayout?: NextLayout;
    getInitialProps?: (context: NextPageContext) => Promise<P>;
  };
}

declare module 'next/app' {
  type AppPropsWithLayout<P = Dictionary> = AppProps<P> &
    CommonProps & {
      Component: NextPageWithLayout<P>;
    };

  type InitialProps<P extends Dictionary = Dictionary> = CommonProps & {
    pageProps: P;
  };
}
