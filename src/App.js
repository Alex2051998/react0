import './App.css';
import Simpsons from "./simpsons/simpsons";
import Rickandmorty from "./rickandmorty/rickandmorty";

function App() {
    return (
        <div>
            <h1 className={'name'}>Simpsons</h1>
            <div className={'block'}>
                <Simpsons
                    name='Homer'
                    desc='Oдин из главных героев мультсериала «Симпсоны» и отец в одноимённой семье.'
                    picture='https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg'
                />
                <Simpsons
                    name='Marge'
                    desc='Ма́рджори Жакли́н «Мардж» Си́мпсон — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. '
                    picture='https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png'
                />
                <Simpsons
                    name='Bart'
                    desc='Oдин из главных героев мультсериала «Симпсоны» и отец в одноимённой семье.'
                    picture='https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
                />
                <Simpsons
                    name='Megy'
                    desc='Oдин из главных героев мультсериала «Симпсоны» и отец в одноимённой семье.'
                    picture='https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
                />
                <Simpsons
                    name='Liza'
                    desc='Oдин из главных героев мультсериала «Симпсоны» и отец в одноимённой семье.'
                    picture='https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
                />
            </div>
            <h1 className={'name'}>Rickandmorty</h1>
            <div className={'block'}>
                <Rickandmorty
                    id='481'
                    name='Retired General Rick'
                    status='unknown'
                    species='Human'
                    gender='Male'
                    image='https://rickandmortyapi.com/api/character/avatar/481.jpeg'
                />
                <Rickandmorty
                    id='509'
                    name='Bully'
                    status='unknown'
                    species='Human'
                    gender='Male'
                    image='https://rickandmortyapi.com/api/character/avatar/509.jpeg'
                />
                <Rickandmorty
                    id='590'
                    name='High Pilot'
                    status='unknown'
                    species='Human'
                    gender= 'Male'
                    image='https://rickandmortyapi.com/api/character/avatar/590.jpeg'
                />

                <Rickandmorty
                    id='497'
                    name='Hologram Rick'
                    status='unknown'
                    species='Human'
                    gender= 'Male'
                    image='https://rickandmortyapi.com/api/character/avatar/497.jpeg'
                />
                <Rickandmorty
                    id='574'
                    name='Snake Lincoln'
                    status='Dead'
                    species='Animal'
                    gender= 'Male'
                    image='https://rickandmortyapi.com/api/character/avatar/574.jpeg'
                />
                <Rickandmorty
                    id='623'
                    name='Shrek The Musical Fan'
                    status='Alive'
                    species='Alien'
                    gender= 'Male'
                    image='https://rickandmortyapi.com/api/character/avatar/623.jpeg'
                />

            </div>

        </div>
    );
}

export default App;
