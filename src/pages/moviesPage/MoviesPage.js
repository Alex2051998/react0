import {GenreBadge, MoviesList} from "../../components";
import './MoviesPage.css';

const MoviesPage = () => {

    return (
        <div className={'gender'}>
            <div>
                <MoviesList/>
            </div>
            <div>
                <GenreBadge/>
            </div>
        </div>
    );
};

export {
    MoviesPage
};