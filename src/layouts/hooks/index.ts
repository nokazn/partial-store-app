import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { CommonSchema, commonState } from '../../features/common';

type CommonProps = {
  common?: CommonSchema;
};

export const useCommonProps = ({ common }: CommonProps) => {
  const [commonValue, setCommonState] = useRecoilState(commonState);
  useEffect(() => {
    setCommonState(() => common ?? commonValue);
  }, [common, commonValue, setCommonState]);
};
