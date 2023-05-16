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
      <main className="md:mt-20 pb-10 mt-5">{children}</main>
    </>
  );
};

export default LayoutWrapper;
