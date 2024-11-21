import PosterPreview from './PosterPreview';
import Link from 'next/link';
import {Movie} from "@/app/types/movie";
import styles from '@/app/styles/MoviesListCard.module.css';
import {StarsRating} from "@/app/components/StarsRating";


export default function MoviesListCard({ movie }: { movie: Movie }) {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className={styles.card}>
                <PosterPreview posterPath={movie.poster_path}/>
                <h3 className={styles.cardTitle}>{movie.title}</h3>
                <StarsRating rating={movie.vote_average}/>
                <div className={styles.cardRating}>Rating: {movie.vote_average}</div>
                    </div>
                    </Link>
                    );
                }
