import { useRecoilState } from 'recoil';

import { withEmail } from '../../../store';
import { Input } from '../../../components/parts/Input';

import type { ChangeEventHandler, FC } from 'react';

type Props = {};

export const EmailInput: FC<Props> = () => {
  const [email, setEmail] = useRecoilState(withEmail);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Input type='email' name='email' value={email} onChange={onChange}>
      メールアドレス：
    </Input>
  );
};
