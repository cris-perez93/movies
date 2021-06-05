
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const colorTag =(vote) => {

    if(vote >=8){
      return 'green';
    }else if (vote >=5){
      return 'yellow';
    }else {
      return 'red';
    }
}

const Movie = ({title, poster_path, overview, vote_average}) => {
   
    return (
        <div className="card_container">
            <img className="movie_img" src= {IMGPATH + poster_path} alt={title}/>
            <div className="info_container">
              <h3 className="title">{title}</h3>
              <span className={`tag ${colorTag(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie_info">
              <h2>Overview</h2>
              <p>{overview}</p>
            </div>
        </div>
      );
}
 
export default Movie;