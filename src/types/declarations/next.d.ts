import { NextPage, NextPageContext, NextPageWithLayout } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

type Primitive = string | number | symbol;
type Dictionary<V = unknown, K = Primitive> = Record<K, V>;

declare module 'next' {
  type NextLayout = (page: ReactElement) => ReactElement;

  type NextPageWithLayout<P = Dictionary, IP = P> = NextPage<P, IP> & {
    getLayout?: NextLayout;
    getInitialProps?: (context: NextPageContext) => Promise<P>;
  };
}

declare module 'next/app' {
  type AppPropsWithLayout<P = Dictionary> = AppProps<P> & {
    Component: NextPageWithLayout<P>;
  };
}
