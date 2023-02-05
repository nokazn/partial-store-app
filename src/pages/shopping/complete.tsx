import { NextPageWithLayout } from 'next';
import Link from 'next/link';

import { Layout } from '../../layouts';

const ShoppingConfirm: NextPageWithLayout = () => {
  return (
    <>
      <h1>完了</h1>
      <p>完了しました。</p>
      <Link href='/'>ホーム</Link>
    </>
  );
};

ShoppingConfirm.getLayout = Layout();

export default ShoppingConfirm;
