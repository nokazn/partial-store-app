import { NextLayout } from 'next';
import { useEffect } from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { formState } from '../features/form';

export const Layout = (key: string): NextLayout =>
  function Layout(page) {
    const initializeState = ({ reset }: MutableSnapshot) => {
      reset(formState);
    };
    console.log('layout');
    const id = new Date().toISOString();
    useEffect(() => {
      console.log(id, 'mounted');
      return () => {
        console.log(id, 'unmounted');
      };
    }, [id]);
    return (
      <RecoilRoot key={key} initializeState={initializeState}>
        {page}
      </RecoilRoot>
    );
  };
