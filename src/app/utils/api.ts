import {Movie} from "@/app/types/movie";

const API_KEY = '13fdb80f9af99c2424e074631605cc57';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMovies(
    page: number,
    genre?: number | null,
    query?: string,
): Promise<Movie> {
    const url = new URL(
        query
            ? 'https://api.themoviedb.org/3/search/movie'
            : 'https://api.themoviedb.org/3/discover/movie'
    );

    url.searchParams.append('api_key', API_KEY);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('include_adult', 'false');

    if (genre) {
        url.searchParams.append('with_genres', genre.toString());
    }

    if (query) {
        url.searchParams.append('query', query);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
        console.error('Failed:', response.status, response.statusText);
        throw new Error('Failed');
    }

    const data = await response.json();

    return {
        ...data,
        results: data.results,
    };
}


export async function getGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const res = await fetch(url);
    return res.json();
}

export async function getMovieById(id: string) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    const res = await fetch(url);
    return res.json();
}
