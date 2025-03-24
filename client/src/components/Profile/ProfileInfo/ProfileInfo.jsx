import s from './styles.module.css';
import PropTypes from 'prop-types';

export const ProfileInfo = ({ customer }) => {
  return (
    <div className={s.profileContent}>
      <div className={s.avatarContainer}>
        <img className={s.avatar} src={customer.avatar} />
      </div>
      <div className={s.info}>
        <div className={s.name}>
          {customer.name} {customer.surName}
        </div>
        <div className={s.status}>{customer.status}</div>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  customer: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};
