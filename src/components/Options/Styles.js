import styled, {css} from 'styled-components';

export const ContainerOptions = styled.ul`
    width: 200px;
    background: #fff;
    border-radius: var(--radius);
    box-shadow: var(--shadow-down);
    position: absolute;
    top: 30px;
    transition: var(--transition);
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;

    ${props => props.isActiveOptions === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Option = styled.li`
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);
    overflow: hidden;
    cursor: pointer;

    &:hover {
        background: var(--gray-white-variant-color);
    }
`;