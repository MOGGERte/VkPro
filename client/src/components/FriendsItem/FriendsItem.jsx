import s from './styles.module.css';
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
