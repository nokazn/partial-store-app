import { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

import { Layout } from '../../layouts';

const ShoppingConfirm: NextPageWithLayout = () => {
  useEffect(() => {
    return () => {
      console.log('unmounted1');
    };
  }, []);

  return (
    <>
      <h1>完了</h1>
      <p>完了しました。</p>
      <Link href='/'>ホーム</Link>
    </>
  );
};

ShoppingConfirm.getLayout = Layout('a');

export default ShoppingConfirm;
