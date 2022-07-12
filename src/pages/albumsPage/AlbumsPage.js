import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albums.service";
import Albums from "../../components/albums/Albums";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        albumsService.getAll().then(({data}) => setAlbums(data))
    },[])
    return (
        <div>
            {albums.map(album => <Albums key={album.id} album={album}/>)}
        </div>
    );
};

export default AlbumsPage;