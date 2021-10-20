import CardMovie from './CardMovie'

function MoviesList({movies,nameSearch,rating}) {
    return (
        <>
        {
            movies.filter(movie=>movie.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) && rating<=movie.rating ).map((e,i) =>  
            <CardMovie key={i}
            id={e.id}  name = {e.name} description = {e.description}
            rating={e.rating} posterURL = {e.posterURL}  />
            )
        }
        </>
    )
}
export default MoviesList   