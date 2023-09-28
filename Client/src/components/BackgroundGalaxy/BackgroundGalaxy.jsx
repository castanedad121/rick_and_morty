import styles from './BackgroundGalaxy.module.css';
import videoLogin from '../../assets/rickandmorty.mp4';
import videoGalaxy from '../../assets/galaxy.mp4';
import { useLocation } from 'react-router-dom';


const BackgroundGalaxy = () => {
  const {pathname} = useLocation();
  return (
   <div className={styles.Container}>
     <video src={pathname==="/" ? videoGalaxy : videoLogin } autoPlay muted loop className={styles.BackgroundGalaxy}/>
   </div>
  )
}

export default BackgroundGalaxy