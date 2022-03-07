import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`
    width: 100%;
    padding: 20px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    z-index: 100;

    @media only screen and (max-width: 425px) {
        padding: 20px;    
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    font-weight: 700;
    color: var(--font-color);

    svg {
        font-size: 20px;
        color: var(--primary-color);
    }

    &:hover > svg {transform: rotate(-10deg);}
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;