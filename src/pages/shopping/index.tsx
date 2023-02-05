import { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useId } from 'react';
import { useRecoilState } from 'recoil';
import { EmailInput } from '../../features/form/components/EmailInput';

import { FamilyNameInput, GivenNameInput, SexRadio } from '../../features/form/components';
import { Layout } from '../../layouts';
import { countState } from '../../features/count';

const Home: NextPageWithLayout = () => {
  const id = useId();

  const [count, setCount] = useRecoilState(countState);
  const incrementCount = () => {
    setCount((current) => current + 1);
  };
  const decrementCount = () => {
    setCount((current) => current - 1);
  };

  return (
    <>
      <h1 id={id}>入力</h1>
      <form aria-labelledby={id}>
        <fieldset>
          <legend>名前</legend>
          <FamilyNameInput />
          <GivenNameInput />
        </fieldset>

        <fieldset>
          <EmailInput />
        </fieldset>

        <fieldset>
          <legend>性別</legend>
          <SexRadio />
        </fieldset>
      </form>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <div>カウント： {count}</div>
      <Link href='/'>ホーム</Link> / <Link href='/shopping/confirm'>確認</Link>
    </>
  );
};

Home.getLayout = Layout();

export default Home;
