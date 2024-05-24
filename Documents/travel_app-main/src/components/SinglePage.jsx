import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams(); // access the URL to get the parameter name

  useEffect(() => {
    const getSingleCountry = () => {
      try {
        axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
          setCountry(res.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCountry();
  }, [name]);

  return (
    <div className="singlepage">
      {country.map((item) => (
        <div key={item.population}>
          <article>
            <h1>{item.name.official}</h1>
            <img src={item.flags.svg} alt={item.name.common}></img>
          </article>
        </div>
      ))}

      {name}
    </div>
  );
};

export default SinglePage;
