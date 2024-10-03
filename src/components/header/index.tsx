import styles from './header.module.css'
import imglogo from '../../assets/logo_cripto.svg'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <header className={styles.container}>
            <Link to="/">
            <img src={imglogo} alt="Logo" />
            </Link>
            
        </header>
    )
}