import axios from 'axios'
import icon from '../../assests/img/notification-icon.svg' 
import { BASE_URL } from '../../utills/request'
import './styles.css'

type Props = {
    saleId: number
}

function handleClick(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Sucesso")
        })
}

function NotificationButton({saleId}:Props){
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"></img>
        </div>
    )
}

export default NotificationButton

