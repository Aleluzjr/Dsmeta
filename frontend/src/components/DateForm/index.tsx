import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt';
import { useEffect, useState } from 'react';
import axios from 'axios';
registerLocale('pt', pt)


function DateForm() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date;
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(()=>{
        axios.get('http://localhost:8080/sales')
            .then(reponse => {
                console.log(reponse.data)
            })
    },[]);

    return (
        <div>
            <div className="dsmeta-form-control-container" >
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                    locale='pt'
                />
            </div>
        </div>

    )
}
export default DateForm;