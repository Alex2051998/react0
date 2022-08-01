import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviAction} from "../../redax";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import './MoviList.css';

const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.moviReducer);

    useEffect(() => {
        dispatch(moviAction.getAll())
        dispatch(moviAction.getAllGenres())
    },[])




    return (
        <div className={'block'}>
            {movies.map(movi => <MoviesListCard key={movi.id} movi={movi}/>)}
        </div>
    );
};

export {MoviesList};