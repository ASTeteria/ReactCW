
import MoviesList from '../components/MoviesList';
import SearchBar from '../components/SearchBar';

import Pagination from '../components/Pagination';
import {getGenres, getMovies} from "@/app/utils/api";
import GenreFilter from "@/app/components/GenreFiltre";

export default async function MoviesPage({
                                             searchParams,
                                         }: {
    searchParams: { [key: string]: string | undefined };
}) {
    // Витягуємо параметри з Урли
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const genre = searchParams.genre ? parseInt(searchParams.genre, 10) : null;
    const query = searchParams.query || '';

    // Отримуємо дані з серверу
    const moviesData = await getMovies(page, genre, query);
    const genresData = await getGenres();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Movies</h1>

            {/* Пошук */}
            <SearchBar initialQuery={query} />

            {/* Фільтр за жанрами */}
            <GenreFilter genres={genresData.genres}  />

            {/* Список фільмів */}
            <MoviesList movies={moviesData.results} />

            {/* Пагінація */}
            <Pagination currentPage={page} totalPages={moviesData.total_pages} />
        </div>
    );
}
