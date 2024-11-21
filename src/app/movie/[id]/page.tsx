import MovieInfo from '@/app/components/MovieInfo';
import {getGenres, getMovieById} from "@/app/utils/api";
import {Genre} from "@/app/types/movie";

export default async function MoviePage({ params }: { params: { id: string } }) {
    const movie = await getMovieById(params.id);
    const genres = await getGenres();

    // Перевірка genre_ids
    const movieGenres =
        movie?.genre_ids && Array.isArray(movie.genre_ids)
            ? genres.genres.filter((genre:Genre) => movie.genre_ids.includes(genre.id))
            : [];

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <MovieInfo
            title={movie.title}
            original_title={movie.original_title}
            overview={movie.overview}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
            release_date={movie.release_date}
            genres={movieGenres}
            original_language={movie.original_language}
            popularity={0}/>
    );
}

