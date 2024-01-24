//! Imports hooks from React
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//! Imports actions
import { getCountries, getActivities } from "../../redux/actions/actions";

//! Imports components
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";

//! Import styles from "./home.module.css";
import styles from './home.module.css';
import { useState } from "react";

const Home = () => {
    //* Variable for throw dispatch
    const dispatch = useDispatch();

    //* Create state locally
    const [name, setName] = useState("");
    const [atributo, setAtributo] = useState("name");
    const [order, setOrder] = useState("asc");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [continents, setContinents] = useState("");
    const [activity, setActivity] = useState("");

    //* Functions for recibe info of childs
    const addName = (name) => {
        setName(name);
        setPage(0);
    };
    const addOrder = (order) => {
        setOrder(order);
        setPage(0);
    };
    const addAtributo = (atributo) => { 
        setAtributo(atributo);
        setPage(0);
    };
    const addPage = (page) => {
        setPage(page);
    };
    const addSize = (size) => {
        setSize(size);
        setPage(0);
    };
    const filterContinents = (continents) => {
        setContinents(continents);
        setPage(0);
    };
    const filterActivities = (activity) => {
        setActivity(activity);
        setPage(0);
    };

    //* throw the dispatch
    useEffect(() => {
        dispatch(
            getCountries(name, atributo, continents, order, page, size, activity)
        );
        dispatch(getActivities(activity));
    }, [dispatch, page, name, atributo, order, size, continents, activity]);

    
    return (
        <div className={styles.Container}>
            <Nav />
            <SearchBar
                key={"SearchBar"}
                name={name}
                addName={addName}
                addOrder={addOrder}
                addAtributo={addAtributo}
                filterContinents={filterContinents}
                filterActivities={filterActivities}
            />
            <Cards />
            <Pagination
                key={"Pagination"}
                addSize={addSize}
                size={size}
                addPage={addPage}
                page={page}
            />
        </div>
    );
};

export default Home;
