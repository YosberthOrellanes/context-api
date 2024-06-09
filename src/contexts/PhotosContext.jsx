import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

export default function PhotosProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    const [favoritePhotos, setFavoritePhotos] = useState([]);

    const getPhotos = async () => {
        const response = await fetch("/photos.json");
        const { photos: photosdb } = await response.json();
        setPhotos(photosdb);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    const toggleLike = (index) => {
        const newPhotos = photos.map((photo, i) =>
            i === index ? { ...photo, liked: !photo.liked } : photo
        );
        setPhotos(newPhotos);

        if (newPhotos[index].liked) {
            setFavoritePhotos([...favoritePhotos, newPhotos[index]]);
        } else {
            setFavoritePhotos(
                favoritePhotos.filter((photo) => photo.id !== newPhotos[index].id)
            );
        }
    };

    return (
        <PhotosContext.Provider value={{ photos, setPhotos, favoritePhotos, toggleLike }}>
            {children}
        </PhotosContext.Provider>
    );
}

