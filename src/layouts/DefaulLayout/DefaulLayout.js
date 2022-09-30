import PropTypes from 'prop-types';
import React from 'react';
import Header from '~/layouts/components/Header';
import Sitebar from '../components/Sitebar';
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

DefaulLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaulLayout;
