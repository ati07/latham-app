import React, { useEffect } from 'react'
import './style.css'
import CurrencySymbol from './CurrencySymbol.json'

function CurrencyConverter(props:any) {
    const SymbolObject:any = CurrencySymbol
    const symbol = SymbolObject[`${props.currency}`]?.symbol
    const code = SymbolObject[`${props.currency}`]?.code
    // include api for currency change
    const api = "https://api.exchangerate-api.com/v4/latest/USD";

    const getResults = async () => {

        await fetch(`${api}`)
            .then(currency => {
                return currency.json();
            }).then(displayResults);
    }
    const displayResults = (currency: any) => {
        const element = document.getElementsByClassName('amount') as any
        for(let i = 0; i < element.length; i++){
            const price = element[i].innerText.split('$')[1].split('USD')[0]
            // console.log("text", price)
            // console.log("Cr", Object.keys(currency.rates))
            const data = Object.keys(currency.rates).map((i,j)=>{
                return `=GOOGLEFINANCE("CURRENCY:USD${i}")*1`
            })
            console.log("Crdata", data)
            let fromRate = currency.rates["USD"];
            let toRate = currency.rates[code];
            element[i].innerHTML =
            `${symbol} ${((toRate / fromRate) * price).toFixed(2)} ${code}`;
        }
        console.log("elem",element);
        // element.map((el: any, index: number) => {
            
        // })

        // finalAmount.style.display = "block";
    }
    useEffect(()=>{
        getResults()
    },[])
    return (
        <div>
            <h1 className="heading text-center display-2">
                {/* Currency Converter */}
                </h1>

            <hr />
            <div className="amount">
                $20 USD
            </div>
            <div className="amount">
                $30 USD
            </div>
            <div className="container">
                <div className="main">
                    <div className="form-group">
                        <label htmlFor="oamount">
                            Amount to Convert :
                        </label>
                        <input type="text"
                            className="form-control searchBox"
                            placeholder="0.00"
                            id="oamount" />
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">From</span>
                                </div>
                                <select className="form-control from" id="sel1">
                                    <option value="">Select One …</option>
                                    <option value="USD">USD</option>
                                    <option value="AED">AED</option>
                                    <option value="ARS">ARS</option>
                                    <option value="AUD">AUD</option>
                                    <option value="BGN">BGN</option>
                                    <option value="BRL">BRL</option>
                                    <option value="BSD">BSD</option>
                                    <option value="CAD">CAD</option>
                                    <option value="CHF">CHF</option>
                                    <option value="CLP">CLP</option>
                                    <option value="CNY">CNY</option>
                                    <option value="COP">COP</option>
                                    <option value="CZK">CZK</option>
                                    <option value="DKK">DKK</option>
                                    <option value="DOP">DOP</option>
                                    <option value="EGP">EGP</option>
                                    <option value="EUR">EUR</option>
                                    <option value="FJD">FJD</option>
                                    <option value="GBP">GBP</option>
                                    <option value="GTQ">GTQ</option>
                                    <option value="HKD">HKD</option>
                                    <option value="HRK">HRK</option>
                                    <option value="HUF">HUF</option>
                                    <option value="IDR">IDR</option>
                                    <option value="ILS">ILS</option>
                                    <option value="INR">INR</option>
                                    <option value="ISK">ISK</option>
                                    <option value="JPY">JPY</option>
                                    <option value="KRW">KRW</option>
                                    <option value="KZT">KZT</option>
                                    <option value="MVR">MVR</option>
                                    <option value="MXN">MXN</option>
                                    <option value="MYR">MYR</option>
                                    <option value="NOK">NOK</option>
                                    <option value="NZD">NZD</option>
                                    <option value="PAB">PAB</option>
                                    <option value="PEN">PEN</option>
                                    <option value="PHP">PHP</option>
                                    <option value="PKR">PKR</option>
                                    <option value="PLN">PLN</option>
                                    <option value="PYG">PYG</option>
                                    <option value="RON">RON</option>
                                    <option value="RUB">RUB</option>
                                    <option value="SAR">SAR</option>
                                    <option value="SEK">SEK</option>
                                    <option value="SGD">SGD</option>
                                    <option value="THB">THB</option>
                                    <option value="TRY">TRY</option>
                                    <option value="TWD">TWD</option>
                                    <option value="UAH">UAH</option>
                                    <option value="UYU">UYU</option>
                                    <option value="ZAR">ZAR</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">To</span>
                                </div>
                                <select className="form-control to" id="sel2">
                                    <option value="">Select One …</option>
                                    <option value="USD">USD</option>
                                    <option value="AED">AED</option>
                                    <option value="ARS">ARS</option>
                                    <option value="AUD">AUD</option>
                                    <option value="BGN">BGN</option>
                                    <option value="BRL">BRL</option>
                                    <option value="BSD">BSD</option>
                                    <option value="CAD">CAD</option>
                                    <option value="CHF">CHF</option>
                                    <option value="CLP">CLP</option>
                                    <option value="CNY">CNY</option>
                                    <option value="COP">COP</option>
                                    <option value="CZK">CZK</option>
                                    <option value="DKK">DKK</option>
                                    <option value="DOP">DOP</option>
                                    <option value="EGP">EGP</option>
                                    <option value="EUR">EUR</option>
                                    <option value="FJD">FJD</option>
                                    <option value="GBP">GBP</option>
                                    <option value="GTQ">GTQ</option>
                                    <option value="HKD">HKD</option>
                                    <option value="HRK">HRK</option>
                                    <option value="HUF">HUF</option>
                                    <option value="IDR">IDR</option>
                                    <option value="ILS">ILS</option>
                                    <option value="INR">INR</option>
                                    <option value="ISK">ISK</option>
                                    <option value="JPY">JPY</option>
                                    <option value="KRW">KRW</option>
                                    <option value="KZT">KZT</option>
                                    <option value="MVR">MVR</option>
                                    <option value="MXN">MXN</option>
                                    <option value="MYR">MYR</option>
                                    <option value="NOK">NOK</option>
                                    <option value="NZD">NZD</option>
                                    <option value="PAB">PAB</option>
                                    <option value="PEN">PEN</option>
                                    <option value="PHP">PHP</option>
                                    <option value="PKR">PKR</option>
                                    <option value="PLN">PLN</option>
                                    <option value="PYG">PYG</option>
                                    <option value="RON">RON</option>
                                    <option value="RUB">RUB</option>
                                    <option value="SAR">SAR</option>
                                    <option value="SEK">SEK</option>
                                    <option value="SGD">SGD</option>
                                    <option value="THB">THB</option>
                                    <option value="TRY">TRY</option>
                                    <option value="TWD">TWD</option>
                                    <option value="UAH">UAH</option>
                                    <option value="UYU">UYU</option>
                                    <option value="ZAR">ZAR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">

                        {/* <!-- convert button --> */}
                        <button className="btn btn-primary convert m-2"
                            type="submit"
                            onClick={getResults}>
                            Convert
                        </button>

                        {/* <!-- reset button --> */}
                        {/* <button className="btn btn-primary m-2"
                            onClick="clearVal()">
                            Reset
                        </button> */}
                    </div>

                </div>

                <div id="finalAmount" className="text-center">

                    {/* <!-- Display the converted amount --> */}
                    <h2>Converted Amount :
                        <span className="finalValue"
                            style={{ color: "green" }}>
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter