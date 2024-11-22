import MoviesListCard from './MoviesListCard';
import { Movie, Genre } from "@/app/types/movie";
import styles from '@/app/styles/MoviesList.module.css';

export default function MoviesList({
                                       movies,
                                       genres,
                                   }: {
    movies: Movie[];
    genres: Genre[];
}) {
    return (
        <div className={styles.moviesList}>
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} genres={genres} />
            ))}
        </div>
    );
}
