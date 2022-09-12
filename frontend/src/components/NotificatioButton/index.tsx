import axios from 'axios'
import { toast } from 'react-toastify';
import icon from '../../assests/img/notification-icon.svg'
import { BASE_URL } from '../../utills/request'
import './styles.css'

type Props = {
    saleId: number
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.success("Mensagem enviada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        })
        .catch(response => {
            toast.error("Erro ao enviar a mensagem", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        })
}

function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={()=> {handleClick(saleId)}}>
            <img src={icon} alt="Notificar" />
        </div>
    )

}


export default NotificationButton

