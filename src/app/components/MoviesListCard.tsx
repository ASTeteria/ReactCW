import PosterPreview from './PosterPreview';
import Link from 'next/link';
import { Movie, Genre } from "@/app/types/movie";
import styles from '@/app/styles/MoviesListCard.module.css';
import { StarsRating } from "@/app/components/StarsRating";
import GenreBadge from '@/app/components/GenreBadge';

export default function MoviesListCard({ movie, genres }: { movie: Movie; genres: Genre[] }) {
    const movieGenres = genres.filter((genre) => movie.genre_ids.includes(genre.id));

    return (
        <Link href={`/movie/${movie.id}`}>
            <div className={styles.card}>
                <PosterPreview posterPath={movie.poster_path} />
                <h3 className={styles.cardTitle}>{movie.title}</h3>
                <StarsRating rating={movie.vote_average} />
                <div className={styles.cardRating}>Rating: {movie.vote_average}</div>
                <div className={styles.genreList}>
                    {movieGenres.map((genre) => (
                        <GenreBadge key={genre.id} name={genre.name} />
                    ))}
                </div>
            </div>
        </Link>
    );
}
