import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: var(--transition);
    
    form {animation: showUpDown 0.5s;}
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    
    a {color: var(--font-color);}
`;