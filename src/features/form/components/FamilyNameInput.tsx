import { useRecoilState } from 'recoil';

import { withFamilyName } from '../store';
import { Input } from '../../../components/parts/Input';

import type { ChangeEventHandler, FC } from 'react';

type Props = {};

export const FamilyNameInput: FC<Props> = () => {
  const [familyName, setFamilyName] = useRecoilState(withFamilyName);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFamilyName(event.target.value);
  };

  return (
    <Input type='text' name='family-name' value={familyName} onChange={onChange}>
      姓：
    </Input>
  );
};
