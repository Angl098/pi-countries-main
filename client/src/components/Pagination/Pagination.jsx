import { useSelector } from "react-redux";
import styles from "./pagination.module.css";

const Pagination = ({ addSize, size, addPage, page }) => {
    const count = useSelector((state) => state.count);
    let pagination = Math.ceil(count / size);
    const arrayPagination = [];

    if (pagination > 25) {
        pagination = 25
    }

    for (let i = 0; i < pagination; i++) {
        arrayPagination.push(i + 1);
    }

    return (
        <div className={styles.Container} >
            <div className={styles.Pagination}>
                {page ? <button className={styles.ButtonFlechas} onClick={() => addPage(page - 1)}>{'<'}</button> : <button disabled>{'<'}</button>}
                {arrayPagination.map((pagination) => {
                    return (
                        <button
                            className={(page == pagination - 1) ? styles.ButtonActive : styles.Button}
                            onClick={() => addPage(pagination - 1)}
                            key={pagination}
                        >
                            {pagination}
                        </button>
                    );
                })
                }
                {pagination > page + 1 ? <button className={styles.ButtonFlechas} onClick={() => addPage(page + 1)}>{'>'}</button> : <button disabled>{'>'}</button>}

            </div>
            <div>
                <label className={styles.LabelSize} >Size: </label>
                <select className={styles.SelectSize} onChange={(e) => addSize(e.target.value)}>
                    <option defaultValue={10} value={10} >10</option>
                    <option value={15} >15</option>
                    <option value={20} >20</option>
                </select>
            </div>
        </div>
    );
};

export default Pagination;