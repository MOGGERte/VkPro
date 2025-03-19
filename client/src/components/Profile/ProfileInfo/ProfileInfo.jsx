import s from './styles.module.css';

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
