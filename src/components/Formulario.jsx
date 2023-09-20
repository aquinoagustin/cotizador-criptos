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
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`
export default function Formulario(){

    const monedas = [
        {id:'USD',nombre:'Dolar de Estados Unidos'},
        {id:'MXN',nombre:'Peso Mexicano'},
        {id:'EUR',nombre:'Euro'},
        {id:'GBP',nombre:'Libra Esterlina'}
    ];

    const [SelectMonedas] = useSelectMonedas('elige tu moneda',monedas);


    return(
        <form>
            <SelectMonedas/>
            <InputSubmit type="submit" value='Calcular'/>
        </form>
    )
}