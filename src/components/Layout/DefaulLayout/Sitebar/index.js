import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sitebar.module.scss';

const cx = classNames.bind(styles);
function Sitebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sitebar</h2>
    </aside>
  );
}

export default Sitebar;
