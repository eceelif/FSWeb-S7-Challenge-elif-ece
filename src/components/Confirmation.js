import React from "react";


import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ConfirmationPage = (props) => {
    let params = useParams();


    return (
        <div>

            <h2>Sipariş Onayı</h2>

            <ul>
                <li> Customer Name: {props.customerName} </li>
                <li> Size: {params.size} </li>
                <li> Souces: {props.souce} </li>
                <li> Toppings: {props.toppings} </li>
                <li> Substitute: {props.substitute} </li>
                <li> Special Instructions: {props.specialInstructions} </li>
            </ul>

            <p> Siparişiniz başarı ile teslim edilmiştir </p>
        </div>
    );
}

export default ConfirmationPage;
