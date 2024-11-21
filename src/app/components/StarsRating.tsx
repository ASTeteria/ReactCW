import styles from "@/app/styles/StarsRating.module.css";
export  const StarsRating = ({ rating }: { rating: number }) => {
    const stars = Math.round(rating / 2);
    return <div className={styles.stars}>{'★'.repeat(stars).padEnd(5, '☆')}</div>;
};

