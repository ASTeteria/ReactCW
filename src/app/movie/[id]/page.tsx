import MovieInfo from '@/app/components/MovieInfo';
import { getMovieById } from "@/app/services/api.service";
import styles from '@/app/styles/MoviesPage.module.css';  // Импорт стилей

export default async function MoviePage({ params }: { params: { id: string } }) {
    const movie = await getMovieById(params.id);

    return (
        <div className={styles.pageContainer}>
            <MovieInfo
                title={movie.title}
                original_title={movie.original_title}
                overview={movie.overview}
                posterPath={movie.poster_path}
                rating={movie.vote_average}
                release_date={movie.release_date}
                genres={movie.genres}
                original_language={movie.original_language}
                popularity={movie.popularity}
            />
        </div>
    );
}
