import styled from "@emotion/styled"
const Resultado = styled.div`
    color:white;
    font-family: 'Lato',sans-serif;
    display:flex;
    align-items: start;
`
const Imagen = styled.img`
    display: block;
    width: 150px;
    height: 1px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: 700;
    }
`

export default function Cotizacion({cotizacion}){
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = cotizacion;
    return(
        <Resultado>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto"/>
            <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El Precio mas alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio mas bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>El Precio de las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Resultado>
    )
}