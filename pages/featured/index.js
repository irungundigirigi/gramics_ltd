import Feature1 from "./feature1"
import styles from '../../styles/featured.module.css'
import Feature2 from "./feature2"

const Featured = () => {
    return (
        <div className={styles.featured}>
           <Feature1 />
           <Feature2 />
        </div>
    )

}
export default Featured