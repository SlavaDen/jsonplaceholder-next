import Head from 'next/head';
import { memo } from 'react';
import { PageWrapperProps } from './PageWrapper.types';

const PageWrapper = ({ children, keywords }: PageWrapperProps) => {
  return (
    <>
      <Head>
        <meta keywords={`jsonplaceholder-next ${keywords}`}></meta>
        <title>Главная страница</title>
      </Head>
      <div className='navbar'></div>
      <div>{children}</div>
    </>
  );
};

export default PageWrapper;
