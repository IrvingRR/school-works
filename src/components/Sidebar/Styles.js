import styled, {css} from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

export const Container = styled.aside`
    width: 250px;
    height: 100%;
    background: transparent;
    box-shadow: var(--shadow);
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    background: #fff;

    .buttonClosed {
        position: absolute;
        left: 10px;
        top: 20px;
        display: none;

        svg {font-size: 25px;}
    }

    ${props => props.isactivesidebar === 'false' && css`
        width: 100px;
        overflow: hidden;

        span, h2{
            display: none;
        }

        a {
            justify-content: center;
            padding: 10px;
        }
        
        svg {
            font-size: 15px;
        }
    `}

    @media only screen and (max-width: 768px) {
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;

        .buttonClosed {display: block}

        ${props => props.isactivesidebar === 'false' && css`
            transform: translateX(-100%);
        `}
    }
`;

export const Header = styled.div`
    width: 100%; 
    padding: 10px;
    margin-bottom: 30px;

    ${props => props.isActiveSidebar === 'false' && css`
        padding: 0;
    `}
`;

export const Logo = styled(Link)`
    color: var(--font-color);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    h2, span {
        font-weight: 700;
        font-size: 20px;
    }

    span {color: var(--primary-color);}

    svg {
        font-size: 25px;
        color: var(--primary-color);
    }
    
    &:hover > svg {transform: rotate(-10deg);}

    ${props => props.isActiveSidebar === 'false' && css`
    `}
`;

export const Elements = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: var(--transition);
`;

export const Element = styled.li`
    width: 100%;
    height: 50px;
    list-style: none;
    transition: var(--transition);
`;

export const ElementLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--font-color);
    border-radius: 5px;
    border-left: 5px solid transparent;

    &:hover {
        background: var(--gray-white-color);
        border-left: 5px solid var(--primary-color);
        color: var(--primary-color);
    }
    
    &.active {
        background: var(--gray-white-color);
        border-left: 5px solid var(--primary-color);
        color: var(--primary-color);
    }
    
`;