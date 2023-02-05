import { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { countState } from '../store';

const Home: NextPageWithLayout = () => {
  const [count, setCount] = useRecoilState(countState);
  const incrementCount = () => {
    setCount((current) => current + 1);
  };
  const decrementCount = () => {
    setCount((current) => current - 1);
  };

  return (
    <main>
      <h1>ホーム</h1>
      <Link href='/shopping'>入力画面</Link>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <div>カウント： {count}</div>
    </main>
  );
};

export default Home;
