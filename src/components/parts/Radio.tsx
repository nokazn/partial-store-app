import type { ChangeEventHandler, FC, ReactNode } from 'react';

type Props = {
  checked: boolean;
  value: string;
  name: string;
  children: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Radio: FC<Props> = (props) => {
  const { children, name, checked, value, onChange } = props;

  return (
    <label>
      {children}
      <input type='radio' name={name} checked={checked} value={value} onChange={onChange}></input>
    </label>
  );
};
