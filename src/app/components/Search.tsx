'use client';
import styles from '@/app/styles/Search.module.css';
import {FormEvent, useState} from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({ initialQuery }: { initialQuery: string }) {
    const [query, setQuery] = useState(initialQuery);
    const router = useRouter();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (query) params.set('query', query);
        router.push(`/?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchBar} >
            <input className={styles.input}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."

            />
            <button type="submit" className={styles.button}>
                Search
            </button>
        </form>
    );
}
