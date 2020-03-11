import React, {Component} from 'react';
import DisplayMovies from './DisplayMovies';

class Netflix extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // array of at least 3 Movie object literals with the properties movieName, yearReleased, and genre.

        const movieArray = [
            { movieName: 'Hook', 
            yearReleased: '1991', 
            genre: 'Comedy'},

            { movieName: 'The Fifth Element', 
            yearReleased: '1997', 
            genre: 'Action Scifi'},

            { movieName: 'Notting Hill', 
            yearReleased: '1999', 
            genre: 'RomCom'}
        ];
        return(
            <div>
                <h1>Netflix</h1>
                {
                    movieArray.map((m) => {
                        return <DisplayMovies movieList = {m}/>
                    })
                }
            </div>
        );
    }
}
export default Netflix;
