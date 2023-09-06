
import styles from './Error.module.css'
import videoGalaxy from '../../assets/galaxy.mp4';

const Error = () => {
  return (
    
    <div className={styles.Container}>
      
		
    <video src={videoGalaxy} autoPlay muted loop className={styles.BackgroundGalaxy}/>
		<div className={styles.ImgWrapper}>
					<span className={styles.Span}>44</span>
				</div>
				<p className={styles.P}>The page you are trying to search has been <br/> moved to another universe.</p>
				

		</div>
    
  )
}

export default Error