import { useRecoilValue } from 'recoil';
import { countState } from '../features/count';

import type { FC, ReactNode } from 'react';
import { CommonSchema } from '../features/common';
import { useCommonProps } from './hooks';

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props & { common?: CommonSchema }> = (props) => {
  const { children, common } = props;
  useCommonProps({ common });
  const count = useRecoilValue(countState);
  return (
    <>
      <header>{count}</header>
      {children}
    </>
  );
};
