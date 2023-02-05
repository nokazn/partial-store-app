import { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { Layout } from '../../layouts';
import { formState } from '../../features/form';

const ShoppingConfirm: NextPageWithLayout = () => {
  const form = useRecoilValue(formState);

  return (
    <>
      <h1>確認</h1>
      <dl>
        <dt>名前：</dt>
        <dl>
          {form.familyName} {form.givenName}
        </dl>
      </dl>
      <dl>
        <dt>メールアドレス：</dt>
        <dl>{form.email}</dl>
      </dl>
      <dl>
        <dt>性別：</dt>
        <dl>{form.sex}</dl>
      </dl>
      <Link href='/'>ホーム</Link> / <Link href='/shopping'>戻る</Link> / <Link href='/shopping/complete'>確定</Link>
    </>
  );
};

ShoppingConfirm.getLayout = Layout();

export default ShoppingConfirm;
