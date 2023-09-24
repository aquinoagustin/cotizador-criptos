import { useEffect, useState } from 'react';
import Error from './Error';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
const InputSubmit = styled.input`
    background-color:#9497FF;
    border:none;
    width: 100%;
    padding:10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius:5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`
export default function Formulario({setMonedas}){

    const monedas = [
        {id:'USD',nombre:'Dolar de Estados Unidos'},
        {id:'MXN',nombre:'Peso Mexicano'},
        {id:'EUR',nombre:'Euro'},
        {id:'GBP',nombre:'Libra Esterlina'}
    ];
    

    const [criptos,setCriptos] = useState([]);
    const [error,setError] = useState(false);
    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas);
    const [criptomoneda,SelectCriptos] = useSelectMonedas('Elige tu criptomoneda',criptos);





    const handleSubmit = e =>{
        e.preventDefault();
        if([moneda,criptomoneda].includes('')){
            setError(true);
            return
        }
        setError(false);
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    useEffect(()=>{
        const consultarAPI = async() => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arrayCriptos = resultado.Data.map(cripto => {
               const objeto ={
                id:cripto.CoinInfo.Name,
                nombre:cripto.CoinInfo.FullName
               }        
               return objeto;
            })
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    },[])


    return(
        <>
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <form onSubmit={handleSubmit}>
            <SelectMonedas/>
            <SelectCriptos/>
            <InputSubmit type="submit" value='Calcular'/>
        </form>
        </>
    )
}