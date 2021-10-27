import Feature1 from "./feature1"
import styles from '../../styles/featured.module.css'
import Feature2 from "./feature2"

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.feature}>
             <Feature1 />
            </div>
            <div className={styles.feature}>
             <Feature2 />
            </div>
        </div>
    )

}
export default Featured