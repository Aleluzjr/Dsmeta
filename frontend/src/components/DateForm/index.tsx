import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt';
registerLocale('pt', pt)


function DateForm() {
    return (
        <div>
            <div className="dsmeta-form-control-container" >
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                    locale='pt'
                />
            </div>
        </div>

    )
}



export default DateForm