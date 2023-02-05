import { useRecoilState } from 'recoil';

import { withGivenName } from '../store';
import { Input } from '../../../components/parts/Input';

import type { ChangeEventHandler, FC } from 'react';

type Props = {};

export const GivenNameInput: FC<Props> = () => {
  const [givenName, setGivenName] = useRecoilState(withGivenName);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setGivenName(event.target.value);
  };

  return (
    <Input type='text' name='given-name' value={givenName} onChange={onChange}>
      名：
    </Input>
  );
};
