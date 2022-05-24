import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

// Primary button styles
export const PrimaryButton = styled.button`
    padding: 8px 15px;
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--primary-color);
    color: #fff;
    border-radius: var(--radius);
    font-size: 13px;
    position: relative;

    &:hover {background: var(--primary-color-hover);}

    svg {color: #fff;}

    ${props => props.secundary && css`
        color: var(--font-color);
        background: transparent;
        border: var(--border);

        &:hover {
            background: var(--font-color);
            color: #fff; 
            border-color: transparent;
        }
    `}
`;

// Icon button styles
export const IconButton = styled.button`
    width: 30px;
    height: 30px;
    border: var(--border);
    dsplay: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: var(--font-color);
    border-radius: var(--radius);
    padding: 1px;

    &:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
    }
`;

// Link button styles
export const LinkButton = styled(Link)`
    padding: 8px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--primary-color);
    color: #fff;
    border-radius: var(--radius);
    font-size: 13px;

    &:hover {background: var(--primary-color-hover);}

    svg {color: #fff;}

    ${props => props.secundary === 'true' && css`
        color: var(--font-color);
        background: transparent;
        border: var(--border);

        &:hover {
            background: var(--font-color);
            color: #fff; 
            border-color: transparent;
        }
    `}
`;