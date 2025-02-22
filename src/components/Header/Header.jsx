import { FaVk } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import s from './styles.module.css';

export const Header = () => {
  return (
    <div className={s.header}>
        <div className={s.container}>
            <div className={s.logo}>
                <FaVk size={30} />
                <h1>ВКОНТАКТЕ</h1>
            </div>

            <div className={s.search}>
                <IoIosSearch size={20} />
                <input type="text" placeholder="Поиск" />
            </div>

            <div className={s.icons}>
                <div className={s.icon}><IoIosNotifications size={24} /> </div>
                <div className={s.icon}><IoMusicalNotesSharp size={24} /></div>
            </div>
            <div className={s.avatar}>
                <a href="#">
                    <img
                        src="https://sun1-17.userapi.com/s/v1/ig2/wpXoWiwLGO8SV3ssxXTJpOVba2N-yf4tppcDYAM6ZD4e3QVvg4K5uZObXxtVsAkOx3SoNEjqwmkTms9C4BfET200.jpg?quality=95&crop=430,38,518,518&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480&ava=1&u=1QjdFh15uOZ4frb2B7BdXKUnRUxd8ftlWdSnk3KYwFo&cs=200x200" 
                    />
                </a>
            </div>
        </div>
    </div>
  );
};
