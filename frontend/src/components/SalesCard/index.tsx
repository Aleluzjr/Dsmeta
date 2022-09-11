import './styles.css'
import NotificationButton from '../NotificationButton'
import DateForm from '../DateForm'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utills/request';
import { Sale } from '../models/sale';

function SalesCard() {

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(reponse => {
                setSales(reponse.data.content)
            })
    }, []);

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <DateForm />
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sales.map(sale => {
                                    return (
                                        <tr key = {sale.id}>
                                            <td className="show992">{sale.id}</td>
                                            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                            <td>{sale.sellerName}</td>
                                            <td className="show992">{sale.visited}</td>
                                            <td className="show992">{sale.deals}</td>
                                            <td>{sale.amount.toFixed(2)}</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <NotificationButton />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard