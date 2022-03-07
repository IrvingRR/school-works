import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    position: relative;
    `;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute; 
    top: 0;
    left: 0;
    padding: 20px 60px;
    text-align: center;

    & * {animation: showUpDown 0.5s;}

    h1 {font-size: 50px;}

    p {font-size: 20px;}

    @media only screen and (max-width: 425px) {
        padding: 20px;
        h1 {font-size: 40px;}
        p {font-size: 15px;}    
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
