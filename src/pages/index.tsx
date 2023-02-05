import { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commonState } from '../features/common';
import { countState } from '../features/count';

const Home: NextPageWithLayout = () => {
  const [count, setCount] = useRecoilState(countState);
  const common = useRecoilValue(commonState);
  const incrementCount = () => {
    setCount((current) => current + 1);
  };
  const decrementCount = () => {
    setCount((current) => current - 1);
  };

  useEffect(() => {
    console.log({ common }, 'store');
  }, [common]);

  return (
    <main>
      <h1>ホーム</h1>
      <Link href='/shopping'>入力画面</Link>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <div>カウント： {count}</div>
      {common.auth.isLoggedIn && <p>ログイン済み</p>}
    </main>
  );
};

export default Home;
