import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = className.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
