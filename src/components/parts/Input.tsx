import type { ChangeEventHandler, FC, ReactNode } from 'react';

type Props = {
  type: string;
  value: string;
  name: string;
  children: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input: FC<Props> = (props) => {
  const { children, type, name, value, onChange } = props;

  return (
    <label>
      {children}
      <input type={type} name={name} value={value} onChange={onChange}></input>
    </label>
  );
};
