import styled from "@emotion/styled"
const Texto = styled.div`
    color:white;
    padding:15px;
    font-size: 18px;
    background: #B7322C;
    border:solid 1px gray;
    text-transform: uppercase;
    border-radius: 5px;
    text-align: center;
    font-family: 'Lato';
    font-weight: 700;
`
export default function Error({children}){
    return(
        <Texto>
            {children}
        </Texto>
    )
}