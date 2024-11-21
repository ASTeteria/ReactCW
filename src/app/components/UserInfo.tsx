import styles from '@/app/styles/UserInfo.module.css';
import {FC} from "react";

const UserInfo: FC = () => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.avatar}></div>
            <span className={styles.username}>John Doe</span>
        </div>
    );
};

export default UserInfo;
