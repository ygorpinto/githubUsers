import styled from 'styled-components'

export const HomePageStyles = styled.div`
display:flex;
justify-content:center;
align-items:center;

height:100vh;

.notSignIn {

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

height:8rem;
width:20rem;
border:2px solid rgba(0,0,0,0);
box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.09);

button {
    height:2rem;
    width:8rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
    color:${props=>props.theme.colors.white};
    background-color:${props=>props.theme.colors.black};
    border-radius:5px;
    font-size:0.9rem;

    img {
        max-height:1.6rem;
    }

    :hover {
        opacity:0.8;
    }
}
}

.signIn {

}
`