// types
import { ReactNode } from 'react';

// components
import Header from './Header';

type Props = {
  children: ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="mt-20">{children}</main>
    </>
  );
};

export default LayoutWrapper;
