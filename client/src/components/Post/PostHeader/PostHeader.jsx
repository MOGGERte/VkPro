import s from './styles.module.css';

export const PostHeader = ({ customer, onProfileClick }) => {
  if (!customer) return null;

  return (
    <div className={s.customerContainer} onClick={() => onProfileClick(customer.id)}>
      <img className={s.avatar} src={customer.avatar} />
      <div className={s.name}>{customer.name}</div>
    </div>
  );
};
