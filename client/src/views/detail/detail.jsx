import { useDispatch, useSelector } from "react-redux";
import styles from "./detail.module.css";
import { useEffect } from "react";
import { cleanerAll, getCountry } from "../../redux/actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
// import coatOptional from "../../../src/assets/coatOptional.png";

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const countryDetail = useSelector((state) => state?.countryDetail);
    const {
        name,
        imagen,
        continents,
        capital,
        subregion,
        area,
        poblacion,
        Activities,
    } = countryDetail;
    const history = useNavigate();
    useEffect(() => {
        dispatch(getCountry(id));
        return () => {
            dispatch(cleanerAll());
        };
    }, [dispatch, id]);

    return (
        <div className={styles.Container}>
            {countryDetail ? (
                <div className={styles.Detail}>
                    <div className={styles.ContainButtonClose}>
                        <button
                            onClick={() => {
                                history(-1);
                            }}
                        >
                            x
                        </button>
                    </div>
                    <h1 className={styles.CountryH1}>Country</h1>
                    <div className={styles.CountryDetail}>
                        <article className={styles.ArticleImg}>
                            <img src={imagen} alt={imagen} className={styles.ImgFlags} />
                        </article>
                        <div className={styles.ContainerNameCountry}>
                            <h2>{name}</h2>
                        </div>
                        <div>
                            <label>Capital:</label>
                            <h3>{capital}</h3>
                        </div>
                        <div>
                            <label>Continente:</label>
                            <h3>{continents}</h3>
                        </div>
                        <div>
                            <label>Sub Region:</label>
                            <h3>{subregion}</h3>
                        </div>
                        <div>
                            <label>Area:</label>
                            <h3>{area} m²</h3>
                        </div>
                        <div>
                            <label>Población : </label>
                            <h3>{poblacion}</h3>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
            <div className={styles.Activities}>
                <h1 className={styles.ActivityH1}>{Activities?.length > 1 ? "Activities" : "Activity"}</h1>
                <div className={styles.ActivityCards}>
                    {Activities?.length ? (
                        Activities.map((Activity) => (
                            <article key={Activity.id} className={styles.Activity}>

                                <h2>{Activity.name}</h2>

                                <div>
                                    <label>Nivel de dificultad:</label>
                                    <h3>{Activity.dificultad}</h3>
                                </div>
                                <div>
                                    <label>Duración:</label>
                                    <h3>{Activity.duracion}</h3>
                                </div>
                                <div>
                                    <label>Temporada:</label>
                                    <h3>{Activity.temporada}</h3>
                                </div>
                            </article>
                        ))
                    ) : (
                        <span>Country without activities</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Detail;
