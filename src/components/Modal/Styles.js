import styled, {css} from "styled-components";

// Container - Modal
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--dark-gradient);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: var(--transition);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    padding: 20px;

    ${props => props.isActiveModal === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

// Card
export const Card = styled.div`
    width: 100%;
    max-width: 500px;
    border-radius: var(--radius); 
    background: #fff;
    overflow: hidden;

    ${props => props.type === 'image' && css`
        max-width: 600px;
    `}

`;

export const CardHeader = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(243, 243, 243);
`;

export const CardBody = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    ${props => props.type === 'image' && css`
        height: 400px;

        img {
            width: 100%;
            height: 100%;
            border-radius: var(--radius);
        }
    `}
`;

export const CardActions = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    ${props => props.center && css`
        justify-content: center;
    `}
`;
