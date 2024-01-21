import { useSelector } from "react-redux";
import Card from '../Card/Card'

import styles from "./Cards.module.css";

const Cards = () => {
    const allCountries = useSelector((state) => state.allCountries);
    const count = useSelector((state) => state.count);
    return (
        <div className={styles.CountriesContainer}>
            {count
                ? allCountries.map((country) => {
                    return (
                        <Card
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            image={country.imagen}
                            continents={country.continents}
                            poblacion={country.poblacion}
                        />
                    );
                })
                : <span>Country not matches!!!</span>
            }
        </div>
        
    ); 
};

export default Cards;
