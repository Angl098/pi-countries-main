import { useSelector } from "react-redux";
import styles from "./SearchBar.module.css";
const SearchBar = ({
    addName,
    addOrder,
    addAtributo,
    filterContinents,
    filterActivities,
}) => {
    const allActivities = useSelector((state) => state.allActivities);
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerSearch} >
                <h1>Search Country</h1>
                <input
                    placeholder="Country Name..."
                    onChange={(e) => addName(e.target.value)}
                />
            </div>

            <div className={styles.ContainerSearch}>
                <h1>Orders</h1>
                <select onChange={(e) => addOrder(e.target.value)}>
                    <option key="" defaultValue="ASC" value="ASC">
                        Ascendente
                    </option>
                    <option value="DESC">Descendente</option>
                </select>

                <select onChange={(e) => addAtributo(e.target.value)}>
                    <option defaultValue="name" value="name">
                        Name
                    </option>
                    <option value="poblacion">Population</option>
                </select>
            </div>

            <div className={styles.ContainerSearch}>
                <h1>Filters</h1>
                <select onChange={(e) => filterContinents(e.target.value)}>
                    <option defaultValue="" value="">
                        Continents
                    </option>
                    <option key="" value="Americas">Americas</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

                <select onChange={(e) => filterActivities(e.target.value)}>
                    <option key="" defaultValue="" value="">
                        {" "}
                        Activities
                    </option>
                    {allActivities ? (
                        allActivities.map((activity) => {
                            return (
                                <option key={activity.id} value={activity.name}>
                                    {activity.name}
                                </option>
                            );
                        })
                    ) : (
                        <span>Country not matches!!!</span>
                    )}{" "}
                </select>
            </div>
        </div>
    );
};

export default SearchBar;
