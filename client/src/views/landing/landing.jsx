import fotoCountries from '../../assets/fotoCountries.png'
import { NavLink } from 'react-router-dom';
import styles from './landing.module.css';
import { useDispatch } from 'react-redux';
import { getAccess } from '../../redux/actions/actions';


const Landing = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.Container}>
            <div className={styles.ImgContainer}>
                <img src={fotoCountries} className={styles.Img} />
            </div>
            <h1>PI Countries Henry</h1>
            <NavLink to={"/home"}>
                <button onClick={() => { dispatch(getAccess()) }}>HOME</button>
            </NavLink>
        </div>
    )
}

export default Landing