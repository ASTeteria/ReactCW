import GenreBadge from './GenreBadge';
import styles from '@/app/styles/MovieInfo.module.css';
export default function MovieInfo({
                                      title,
                                      overview,
                                      posterPath,
                                      rating,
                                      genres,
                                      original_title,
                                      release_date,
                                      original_language,
                                      popularity,
                                  }: {
    original_title:string;
    original_language: string;
    popularity: number;
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
    release_date: string;
    genres: { id: number; name: string }[];
}) {
    return (
        <div className={styles.movieInfo}>
            <div className={styles.details}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                    alt="Poster"

                />
            </div>

                <div className={styles.details}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.originalTitle}>Original Title: {original_title}</p>
                    <p className={styles.releaseDate}>Release Date: {release_date}</p>
                    <p className={styles.overview}>{overview}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                </div>
            <div className={styles.detailsGrid}>
                    <p>Original Language: {original_language}</p>
                    <p>Popularity: {popularity}</p>

            </div>
                    <div className={styles.genres}>
                        {genres.map((genre) => (
                            <GenreBadge key={genre.id} name={genre.name}/>
                        ))}
                    </div>
        </div>


    );
}
