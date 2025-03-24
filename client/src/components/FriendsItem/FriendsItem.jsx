import s from './styles.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({ customer }) => {
  return (
    <div className={s.customerContainer}>
      <img className={s.avatar} src={customer.avatar} />
      <div className={s.name}>
        {customer.name} {customer.surName}
      </div>
    </div>
  );
};

FriendItem.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
};
