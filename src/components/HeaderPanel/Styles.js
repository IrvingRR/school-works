import styled from 'styled-components';

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
    align-items: last baseline;
    gap: 5px;
    position: relative;
    cursor: pointer;
    min-width: 200px;
    justify-content: flex-end;

    span {font-weight: 700;}
    p, span {font-size: 13px;}
`;

export const Image = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100%;
`;