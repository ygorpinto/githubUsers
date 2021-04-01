import styled from 'styled-components'

export const HomePageStyles = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

height:100vh;

h1{
    font-family: 'Montserrat', sans-serif;
    font-size:5rem;
    margin:0 0 6rem 0;
}

.notSignIn {

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

height:8rem;
width:20rem;
border:2px solid rgba(0,0,0,0);
box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.09);

font-family: 'Poppins', sans-serif;

button {
    height:2rem;
    width:8rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
    color:${props=>props.theme.colors.text};
    background-color:${props=>props.theme.colors.black};
    border-radius:5px;
    font-size:0.8rem;
    font-family: 'Poppins', sans-serif;

    img {
        max-height:1.6rem;
    }

    :hover {
        opacity:0.8;
    }
}
}

.signIn {
    height:100vh;
    width:100%;
    background-color:${props=>props.theme.colors.background};

header {
    
    color:${props=>props.theme.colors.text};

    display:flex;
    align-items:center;
    justify-content:space-between;


    .switch {
        margin-left:2%;
    }

    .userInfo{
        font-family: 'Poppins', sans-serif;
        font-size:0.8rem;
        width:20%;
        margin-right:2%;
        display:flex;
        justify-content:space-around;
        align-items:center;

        button {
            font-family: 'Poppins', sans-serif;
            border:none;
            border-radius:0.4rem;
            color:${props=>props.theme.colors.text};
            background-color:${props=>props.theme.colors.background};
            box-shadow:2px 2px rgba(0,0,0,0.3);

            :hover {
                opacity:0.6;
            }
        }
    }
}

section {

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;

    h1 {

        margin: 1rem 0;
        color:${props=>props.theme.colors.text};

    }

    input {
        margin: 1rem 0;
        height:2rem;
        width:18rem;
        border-radius:0.3rem;
        border:none;
        
        ::placeholder{
            text-align:center;
        }
    
    }

}

}
`