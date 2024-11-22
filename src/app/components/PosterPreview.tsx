import {FC} from "react";

interface PosterPreviewProps {
    posterPath: string;
}

const PosterPreview: FC<PosterPreviewProps> = ({ posterPath }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`; // Формуємо URL для зображення
    return (
        <div className="posterPreview">
            <img src={imageUrl} alt="Poster" />
        </div>
    );
};

export default PosterPreview;

