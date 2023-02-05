import { useRecoilValue } from 'recoil';
import { countState } from '../store';

import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = (props) => {
  const { children } = props;
  const count = useRecoilValue(countState);
  return (
    <>
      <header>{count}</header>
      {children}
    </>
  );
};
