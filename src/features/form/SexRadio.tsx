import { useRecoilState } from 'recoil';

import { withSex } from '../../../store';
import { Radio } from '../../parts/Radio';

import type { ChangeEventHandler, FC } from 'react';
import type { FormSchema } from '../../../schemas';

type Props = {};

type Candidate = {
  value: NonNullable<FormSchema['sex']>;
  label: string;
};

const candidates: Candidate[] = [
  {
    value: 'female',
    label: '女性',
  },
  {
    value: 'male',
    label: '男性',
  },
  {
    value: 'none',
    label: 'その他',
  },
];

export const SexRadio: FC<Props> = () => {
  const [sex, setSex] = useRecoilState(withSex);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // TODO: あとで直す
    // @ts-expect-error
    setSex(event.target.value);
  };

  return (
    <>
      {candidates.map(({ value, label }) => (
        <Radio key={value} name='sex' value={value} checked={sex === value} onChange={onChange}>
          {label}：
        </Radio>
      ))}
    </>
  );
};
