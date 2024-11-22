import MoviesList from '../components/MoviesList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { getGenres, getMovies } from "@/app/utils/api";
import GenreFilter from "@/app/components/GenreFiltre";

export default async function MoviesPage({
                                             searchParams,
                                         }: {
    searchParams: { [key: string]: string | undefined };
}) {
    // Извлечение параметров из URL
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const genre = searchParams.genre ? parseInt(searchParams.genre, 10) : null;
    const query = searchParams.query || '';

    // Получение данных с сервера
    const moviesData = await getMovies(page, genre, query);
    const genresData = await getGenres();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Movies</h1>

            {/* Пошук */}
            <SearchBar initialQuery={query} />

            {/* Фільтр по жанрах */}
            <GenreFilter genres={genresData.genres} />

            {/* Список фільмів */}
            <MoviesList movies={moviesData.results} genres={genresData.genres} />

            {/* Пагінація */}
            <Pagination currentPage={page} totalPages={moviesData.total_pages} />
        </div>
    );
}
