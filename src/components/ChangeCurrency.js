import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = () => {
    const {currency, availableCurrencies, dispatch} = useContext(AppContext);
    const currencyObject = availableCurrencies.find(({symbol}) => symbol === currency);
    const currencyName = currencyObject.name;


    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;

        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    };

    return (
        <div>
            <div className="dropdown">
                <div className="dropdown">
                    <button className="btn btn btn-success dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({currency} {currencyName})
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {availableCurrencies.map((curry) => (
                        
                        <button className="dropdown-item" type="button" onClick={handleCurrencyChange} key={curry.symbol} value={curry.symbol}>
                            {curry.symbol} {curry.name}
                        </button>
                    ))}
                </ul>
                </div>
            </div>
        </div>

    );

};

export default CurrencyChange;