import styled, {css} from 'styled-components';

export const Container = styled.header`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: whitesmoke;
    z-index: 99;
`;

export const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: relative;
    cursor: pointer;
    min-width: 200px;
    justify-content: flex-end;

    span {font-weight: 700;}
    p, span {font-size: 13px;}
`;

export const Image = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 100%;
`;

export const Options = styled.ul`
    width: 100%;
    border-radius: var(--radius);
    background: #fff;
    overflow: hidden;
    position: absolute; 
    top: 40px;
    box-shadow: var(--shadow-down);
    transition: var(--transition);
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;
    z-index: 99;
    
    ${props => props.isActiveOptions === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Option = styled.li`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
        background: var(--primary-color);
        color: #fff;
    }
`;