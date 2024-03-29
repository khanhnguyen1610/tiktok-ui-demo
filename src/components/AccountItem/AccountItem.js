import PropTypes from 'prop-types';
import React from 'react';
import className from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';

const cx = className.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} alt={data.full_name} src={data.avatar} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
