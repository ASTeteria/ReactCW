import styles from '@/app/styles/GenreBadge.module.css';

export default function GenreBadge({ name }: { name: string }) {
    return <span className={styles.badge}>
        {name}
    </span>;
}
