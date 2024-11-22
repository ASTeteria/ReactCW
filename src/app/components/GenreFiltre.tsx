'use client';
import { useRouter } from 'next/navigation';
import {Genre} from "@/app/types/movie";
import styles from '@/app/styles/GenreFiltre.module.css';

export default function GenreFilter({
                                        genres,
                                    }: {
    genres: Genre[];
}) {
    const router = useRouter();

    const handleGenreSelect = (id: number | null) => {
        const params = new URLSearchParams();
        if (id) params.set('genre', id.toString());
        router.push(`/?${params.toString()}`);
    };

    return (
        <div className={styles.genreFiltre}>
            <button className={styles.all}
                onClick={() => handleGenreSelect(null)}>
                All
            </button>
            {genres.map((genre) => (
                <button className={styles.all}
                    key={genre.id}
                    onClick={() => handleGenreSelect(genre.id)}>
                    {genre.name}
                </button>
            ))}
        </div>
    );
}
