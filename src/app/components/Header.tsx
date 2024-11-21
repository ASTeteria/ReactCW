import Link from 'next/link';
import UserInfo from './UserInfo';
import styles from '@/app/styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">MoviesApp</Link>
            </div>
            <UserInfo />
        </header>
    );
};

export default Header;
