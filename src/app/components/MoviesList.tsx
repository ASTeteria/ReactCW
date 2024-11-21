import styles from '@/app/styles/MoviesList.module.css';
import MoviesListCard from './MoviesListCard';
import { Movie } from '../types/movie';
import {FC} from "react";

interface MoviesListProps {
    movies: Movie[];
}

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
    return (
        <div className={styles.moviesList}>
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;
