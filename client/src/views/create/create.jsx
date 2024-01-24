import { useEffect, useState } from "react";
import styles from "./create.module.css";
import Nav from "../../components/Nav/Nav";
import { getAllCountries, postActivity, selectCountry, deselectCountry, cleanerAll, getActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "../../utils/validation";

const Create = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const countAll = useSelector((state) => state.countAll)
    const selectCountries = useSelector((state) => state.selectCountries)
    const deselectCountries = useSelector((state) => state.deselectCountries)
    const activities = useSelector((state) => state.allActivities)
    const activity = useSelector((state) => state.activities)
    const [errors, setErrors] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countryId: "",
    })
    const [newActivity, setNewActivity] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countryId: [],
    })

    const cleanerCreate = () => {
        dispatch(cleanerAll());
        setNewActivity({
            name: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            countryId: [],
        });
        setName("");
        document.getElementById("1").checked = false;
        document.getElementById("2").checked = false;
        document.getElementById("3").checked = false;
        document.getElementById("4").checked = false;
        document.getElementById("5").checked = false;
        document.getElementById("Spring").checked = false;
        document.getElementById("Winter").checked = false;
        document.getElementById("Autumn").checked = false;
        document.getElementById("Summer").checked = false;
    };

    const handlerChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setErrors(
            validation(
                {
                    ...newActivity,
                    countryId: selectCountries.map((country) => country.id),
                },
                activities
            )
        );

        setNewActivity({
            ...newActivity,
            [property]: value,
        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        const activity = {
            ...newActivity,
            countryId: selectCountries.map((country) => country.id),
        }; 

        if (
            errors.name ||
            errors.dificultad ||
            errors.duracion ||
            errors.temporada ||
            errors.countryId
        ) { 
            console.log(activity);
            return;
        }
        if (window.confirm("Are you sure to create the activity")) {
            dispatch(postActivity(activity));
            cleanerCreate();
        }
    };

    const handlerChangeCountry = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const handlerSelectCountry = (event) => {
        event.preventDefault();
        const country = {
            id: event.target.id,
            name: event.target.name,
            imagen: event.target.value,
        };
        selectCountries.some((countries) => countries.id === country.id)
            ? window.alert("the country has already been selected")
            : dispatch(selectCountry(country));
    };

    const handlerDeselectCountry = (event) => {
        event.preventDefault();
        const country = {
            id: event.target.id,
            name: event.target.name,
            imagen: event.target.value,
        };
        dispatch(deselectCountry(country));
    };

    const handlerClickSubmit = () => {
        setErrors(
            validation(
                {
                    ...newActivity,
                    countryId: selectCountries.map((country) => country.id),
                },
                activities
            )
        );
    }

    useEffect(() => {
        dispatch(getAllCountries(name));
        dispatch(getActivities());
    }, [dispatch, name]);

    useEffect(() => {
        return () => {
            dispatch(cleanerAll());
        }
    }, [dispatch]);


    return (
        <div className={styles.Container}>
            <Nav />
            <div className={styles.CreateActivity}>
                <h1>Create Activity </h1>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <div className={styles.SectionsForm}>
                        <h3>Name</h3>
                        <input
                            className={styles.Input}
                            name="name"
                            value={newActivity.name}
                            onChange={handlerChange}
                        />
                        {errors.name && <span>{errors.name}</span>}
                    </div>
                    <div className={styles.SectionsForm}>
                        <h3>Duration</h3>
                        <input
                            className={styles.Input}
                            name="duracion"
                            value={newActivity.duracion}
                            onChange={handlerChange}
                        />
                        {errors.duracion && <span>{errors.duracion}</span>}
                    </div>
                    <div>
                        <h3>Difficulty level</h3>
                        <label>
                            <input
                                id='1'
                                name="dificultad"
                                value={1}
                                onChange={handlerChange}
                                type="radio"
                            />
                            1
                        </label>
                        <label>
                            <input
                                id='2'
                                name="dificultad"
                                value={2}
                                onChange={handlerChange}
                                type="radio"
                            />
                            2
                        </label>
                        <label>
                            <input
                                id='3'
                                name="dificultad"
                                value={3}
                                onChange={handlerChange}
                                type="radio"
                            />
                            3
                        </label>
                        <label>
                            <input
                                id='4'
                                name="dificultad"
                                value={4}
                                onChange={handlerChange}
                                type="radio"
                            />
                            4
                        </label>
                        <label>
                            <input
                                id='5'
                                name="dificultad"
                                value={5}
                                onChange={handlerChange}
                                type="radio"
                            />
                            5
                        </label>
                        {errors.dificultad && <span>{errors.dificultad}</span>}
                    </div>
                    <div className={styles.SectionsForm}>
                        <h3>Temporada</h3>
                        <label>
                            <input
                                id="Summer"
                                name="temporada"
                                value="Verano"
                                onChange={handlerChange}
                                type="radio"
                            />
                            Summer
                        </label>
                        <label>
                            <input
                                id="Autumn"
                                name="temporada"
                                value="Otoño"
                                onChange={handlerChange}
                                type="radio"
                            />
                            Autumn
                        </label>
                        <label>
                            <input
                                id="Winter"
                                name="temporada"
                                value="Invierno"
                                onChange={handlerChange}
                                type="radio"
                            />
                            Winter
                        </label>
                        <label>
                            <input
                                id="Spring"
                                name="temporada"
                                value="Primavera"
                                onChange={handlerChange}
                                type="radio"
                            />
                            Spring
                        </label>
                        {errors.temporada && <span>{errors.temporada}</span>}
                    </div>
                    <div className={styles.SectionsSelect}>
                        <h3>Countries</h3>
                        <input
                            className={styles.Input}
                            id="idCountries"
                            placeholder="Country name..."
                            value={name}
                            onChange={handlerChangeCountry}
                        />
                        {errors.countryId && <span>{errors.countryId}</span>}

                        <div className={styles.ContainerSelect}>
                            <div className={styles.ContainerSelectDiv}>
                                {countAll && name !== "" ? (
                                    <div className={styles.ContainerSelectDiv}>
                                        {deselectCountries?.map((country) => {
                                            return (
                                                <div className={styles.Countries} key={country.id}>
                                                    <img src={country.imagen} alt={country.name} />
                                                    <label className={styles.Span}>
                                                        {country.name}
                                                    </label>
                                                    <button
                                                        className={styles.Buttonmore}
                                                        id={country.id}
                                                        value={country.imagen}
                                                        name={country.name}
                                                        onClick={handlerSelectCountry}
                                                        type="buttom"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    ) : name === "" ? (
                                        <label className={styles.Span}>Search Country</label>
                                    ) : (
                                        <span className={styles.Span}>Country not matches!</span>
                                    )}
                            </div>

                            <div className={styles.ContainerSelectDiv}>
                                {selectCountries.length ? (
                                    selectCountries.map((country) => {
                                        return (
                                            <div key={country.id} className={styles.Countries} >
                                                <img  
                                                    src={country.imagen}
                                                    alt={country.name}
                                                    width="30"
                                                    height="20"
                                                />
                                                <label className={styles.Span}>
                                                    {country.name}  
                                                </label>
                                                <button
                                                    className={styles.Buttonmin}
                                                    id={country.id}
                                                    value={country.imagen}
                                                    name={country.name}
                                                    onClick={handlerDeselectCountry}
                                                    type="button"
                                                >X</button>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <label className={styles.Span}>Country not select!</label>
                                )
                            }
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.SectionsSubmit}>
                        <button
                            className={styles.ButtonSubmit}
                            type="submit"
                            value="Submit"
                            onClick={handlerClickSubmit}
                        >Create</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Create;