import { NextLayout } from 'next';

export const Layout = (): NextLayout =>
  function Layout(page) {
    return <>{page}</>;
  };
