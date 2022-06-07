import { setTheme } from '../../features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import styles from './Header.module.scss';

const Header = () => {

    const theme = useAppSelector(state => state.theme.mode);
    const dispatch = useAppDispatch();

  return (
    <header className={`${styles.headerMain} main-background`}>
        <div className="header-left text">Logo</div>
        <div className="header-center text">...</div>
        <div className={`${styles.headerRight} text`}>
            <button onClick={() => dispatch(setTheme())}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    </header>
  )
}

export default Header