import Link from 'next/link';
import {FC} from "react";
import styles from '@/app/styles/Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages }) => {
    return (
        <div className={styles.pagination}>
            {/* Попередня сторінка */}
            <Link className={styles.pageButton}
                href={`?page=${currentPage - 1}`}>
                Previous
            </Link>

            {/* Поточна сторінки */}
            <span className={styles.page}>
        Page {currentPage} of {totalPages}
      </span>

            {/* Наступна */}
            <Link className={styles.pageButton}
                href={`?page=${currentPage + 1}`} >
                Next
            </Link>
        </div>
    );
};

export default Pagination;
