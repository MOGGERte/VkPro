import s from './styles.module.css';
import PropTypes from 'prop-types';

export const PostHeader = ({ customer, onProfileClick }) => {
  if (!customer) return null;

  return (
    <div className={s.customerContainer} onClick={() => onProfileClick(customer.id)}>
      <img className={s.avatar} src={customer.avatar} />
      <div className={s.name}>{customer.name}</div>
    </div>
  );
};

PostHeader.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  onProfileClick: PropTypes.func.isRequired
};
