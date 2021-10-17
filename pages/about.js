import Head from 'next/head';
import PostCard from '../components/PostCard'
import styles from '../styles/about.module.css'
const about = () => {
    return (
        <div>
            <Head>
            <title>About</title>
            <meta name= 'keywords' content='web development,
            ,development'/>
        </Head>
            <div className={styles.about}>
                <PostCard/>
                
            </div>
        </div>
    )
}
export default about;