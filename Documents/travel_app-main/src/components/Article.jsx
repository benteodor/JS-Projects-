import { Link } from "react-router-dom";

const Article = ({ flags, name, population, region, subregion }) => {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article>
          <img src={flags.svg}></img>
          <h3>{name.common}</h3>
          <ul>
            <li>Population: {population}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
          </ul>
        </article>
      </Link>
    </>
  );
};

export default Article;
