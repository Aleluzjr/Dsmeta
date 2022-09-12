import logo from '../../assests/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>  
                    <a className='dsmeta-btn' href="https://www.instagram.com/aleluzjr/" > Desenvolvido por: Alexandre Luz</a>
                </p>
            </div>
        </header>

    )
}

export default Header
