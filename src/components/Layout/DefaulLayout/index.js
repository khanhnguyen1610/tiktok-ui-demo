import React from 'react';
import Header from '~/components/Layout/components/Header';
import Sitebar from './Sitebar';
import styles from './DefaulLayout.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function DefaulLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sitebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaulLayout;
