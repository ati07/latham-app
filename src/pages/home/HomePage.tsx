import React, { useState, useEffect, memo } from 'react';
import CurrencyConverter from './CurrencyConverter';
import countries from './countries.json'
import ds from './cySymbol.json'
import code from "./code.json"
type Props = {};

const HomePage = (props: Props) => {
  console.log('props', props)
  const [currency, setCurrency] = useState('')
  const [factor, setFactor] = useState<any>(true)
  // const e:any = document.getElementsByClassName('item list-group-item pa-2');
  // const v=[];
  // for(var i=0; i<e.length;i++){v.push(e[i].innerText); };
  // console.log(v);
  // available item list-group-item
  //  layout v-card__text pa-0 ma-0
  //  const A:any = document.getElementsByClassName('item list-group-item');
  //  const AC =[];
  //  for(var i=0; i<A.length;i++){AC.push(A[i].innerText); };
  //  console.log(AC);
  const data = async (from: string, to: string) => {
    // await fetch('https://cdn.shopify.com/s/javascripts/currencies.js')
    const d = await fetch(`https://script.google.com/macros/s/AKfycbz2FegtVI27iei5s0Udona8XyPUUTfPgUl4fWPpmgo6ZmTdopQtXnA5QO-0kE-cGqFi/exec?convert=${from}-${to}`)
      .then((response) => response.json())
      .then((res) => {
        // console.log("first", JSON.stringify(res.data))
        return JSON.stringify(res.data)
        // setFactor(JSON.stringify(res.data))
      });
    return JSON.parse(d)
  }
  const displayResults = (currency: any) => {
    const element = document.getElementsByClassName('amount') as any
    for (let i = 0; i < element.length; i++) {
      const price = element[i].innerText.split('$')[1].split('USD')[0]
      // console.log("text", price)
      // console.log("Cr", Object.keys(currency.rates))
      const data = Object.keys(currency.rates).map((i, j) => {
        return `=GOOGLEFINANCE("CURRENCY:USD${i}")*1`
      })
      console.log("Crdata", data)
      // let fromRate = currency.rates["USD"];
      // let toRate = currency.rates[code];
      // element[i].innerHTML =
      // `${symbol} ${((toRate / fromRate) * price).toFixed(2)} ${code}`;
    }
    console.log("elem", element);
    // element.map((el: any, index: number) => {

    // })

    // finalAmount.style.display = "block";
  }
  const getCurrentPrice = async (currentLocationCode: string) => {
    const element = document.getElementsByClassName('amount') as any
    const currencyCodefrom = element[0].innerText.split(' ')[1]
    const currencySymbol = element[0].innerText.split(' ')[0].charAt(0)
    // console.log("response",currentLocation,currencyCodefrom)
    await data(currencyCodefrom, currentLocationCode).then((response: any) => {
      console.log("response", response)
      for (let i = 0; i < element.length; i++) {
        const price = element[i].innerText.split(' ')[0].substring(1, element[i].innerText.split(' ')[0].length)
        // console.log("parseInt(response)*parseInt(price)",parseFloat(response),parseFloat(price))

        element[i].innerHTML = `${parseFloat(response) * parseFloat(price)} ${currentLocationCode}`
      }
    })

  }
  const getCountry = async () => {
    console.log("hitt")
    await fetch('http://ip-api.com/json?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,org,as,mobile,query')
      .then(res => {
        // console.log("res: ", res.json());
        return res.json()
      })
      .then(async (response) => {
        console.log("Country: ", response);
        // setCurrency(response.currency)
        return await getCurrentPrice(response.currency)
      })
      .catch((data: any) => {
        console.log('Request failed');
      })
  }

  useEffect(() => {
    console.log("event")
    // if (factor) {
    //   getCountry()
    //   setFactor(false)
    // }
    const cd: any = {}
    const sym: any = []
    code.map((i, j) => {
      const rt: any = ds.filter((k, l) => k.code === i)[0]
      console.log("rt", rt)

      const sn = rt?.symbol_native ??''
      cd[i] = sn

    })
    // ds.map((i:any,j:number)=>{
    //   // cd.push(i.code)
    //   // sym.push(i.symbol_native)
    //   cd[i.code] = i.symbol_native
    //   // sym[i.]
    // })
    console.log("cd", cd)
    // console.log("sym",sym)

    // data()

  }, [])
  // const upload=(event: any) => {
  //   console.log("event",event)
  // }
  return (
    <div>HomePage
      <button onClick={getCountry}>Get Country</button>
      <h1>{currency}</h1>
      <div className="amount">
        $20 USD
      </div>
      <div className="amount">
        $30 USD
      </div>
      {/* <CurrencyConverter currency={currency}/> */}
      {/* <form action='/submit'>
        <input type="file" onChange={upload}/>
        <button type="submit">submit</button>
      </form> */}
    </div>
  );
};

export default memo(HomePage);