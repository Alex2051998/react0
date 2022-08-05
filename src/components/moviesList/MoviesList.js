import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviAction} from "../../redax";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import './MoviList.css';
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, page, endPage, searchMovi} = useSelector(state => state.moviReducer);

    const [query, setQuery] = useSearchParams({page:'1'});


    useEffect(() => {
        dispatch(moviAction.getAll({page:query.get('page')}))
        dispatch(moviAction.getAllGenres())
    }, [query])
    
    const prevPage = () => {
      const prevPage = +query.get('page')-1;
      setQuery({page:`${prevPage}`})
    }
    
    const nextPage = () => {
        const nextPage = +query.get('page')+1;
        setQuery({page:`${nextPage}`})
    }



    return (
        <div>
            <div className={'block'}>
                {searchMovi.map(moviSearch => <div><button onClick={() => dispatch(moviAction.getByIdMovi(`${moviSearch.id}`))}>{moviSearch.name}</button></div>)}
                {movies.map(movi => <MoviesListCard key={movi.id} movi={movi}/>)}
            </div>
            <div>
                <button disabled={page == 1} onClick={prevPage}>prev page</button>
                <button disabled={page >= endPage} onClick={nextPage}>next page</button>
            </div>
        </div>

)
    ;
};

export {MoviesList};