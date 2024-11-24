import { Movie } from "@/app/models/movie";

const BASE_URL = 'https://api.themoviedb.org/3';
const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2ZkYjgwZjlhZjk5YzI0MjRlMDc0NjMxNjA1Y2M1NyIsIm5iZiI6MTczMjQzMTAxMy40MjEwNzE4LCJzdWIiOiI2NzM2M2YzZmExMDJkMjY5YzAzZjAxOWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xUDOnV25eCkTC35xv6Bd0V6RpKqrgigZ1tS1iLmic-E',
    },
};

export async function getMovies(
    page: number,
    genre?: number | null,
    query?: string,
): Promise<Movie> {
    const url = new URL(
        query
            ? `${BASE_URL}/search/movie`
            : `${BASE_URL}/discover/movie`
    );

    url.searchParams.append('page', page.toString());
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('include_adult', 'false');

    if (genre) {
        url.searchParams.append('with_genres', genre.toString());
    }

    if (query) {
        url.searchParams.append('query', query);
    }

    const response = await fetch(url.toString(), OPTIONS);

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
    const url = `${BASE_URL}/genre/movie/list`;
    const response = await fetch(url, OPTIONS);

    if (!response.ok) {
        console.error('Failed:', response.status, response.statusText);
        throw new Error('Failed');
    }

    return response.json();
}

export async function getMovieById(id: string) {
    const url = `${BASE_URL}/movie/${id}`;
    const response = await fetch(url, OPTIONS);

    if (!response.ok) {
        console.error('Failed:', response.status, response.statusText);
        throw new Error('Failed');
    }

    return response.json();
}
