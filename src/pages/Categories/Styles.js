import styled from 'styled-components';

export const CategoriesContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px 0;
`;

export const Category = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    background: #fff;
    border-radius: var(--radius);
    position: relative;
    padding: 15px;
    transition: var(--transition);
    border: 1px solid transparent;

    &:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-down);
    }
`;

export const CategoryHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {font-size: 15px;}
`;

export const CategoryBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
        color: var(--gray-color);
        font-size: 13px;
    }
`;

export const CategoryFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;