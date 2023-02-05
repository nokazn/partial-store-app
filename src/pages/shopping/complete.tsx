import { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { commonState } from '../../features/common';
import { formState } from '../../features/form';

import { Layout } from '../../layouts';

const useUserData = () => {
  const formValue = useRecoilValue(formState);
  const resetFormState = useResetRecoilState(formState);
  const [commonValue, setCommonState] = useRecoilState(commonState);

  useEffect(() => {
    const name = `${formValue.givenName} ${formValue.familyName}`;
    setCommonState((current) => ({
      ...current,
      user: {
        ...current.user,
        name,
      },
      auth: {
        isLoggedIn: true,
      },
    }));
    resetFormState();
  }, [formValue, setCommonState, resetFormState]);

  return { name: commonValue.user.name };
};

const ShoppingConfirm: NextPageWithLayout = () => {
  const { name } = useUserData();
  return (
    <>
      <h1>完了</h1>
      <p>完了しました。</p>
      <p>{name}さんとしてログイン中です。</p>
      <Link href='/'>ホーム</Link>
    </>
  );
};

ShoppingConfirm.getLayout = Layout();

export default ShoppingConfirm;
