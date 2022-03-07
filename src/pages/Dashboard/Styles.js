import styled from 'styled-components';

export const Amounts = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;
    padding: 20px 0;
`;

export const Amount = styled.div`
    width: 220px;
    padding: 10px 20px;
    background: #fff;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    border-bottom: 2px solid transparent;

    svg {
        font-size: 25px;
        color: var(--primary-color);
    }

    h3 {font-size: 15px;}

    h2 {
        font-size: 20px;
        font-weight: 700;
    }

    p {
        color: var(--gray-color);
        font-size: 11px;
    }

    &:hover { 
        transform: translateY(-5px);
    }

    @media only screen and (max-width: 768px) {
        margin: auto;
        width: 100%;
    }
`;

export const AmountHeader = styled.div`
    width: 100%;
    padding: 10px 0;
`;

export const AmountBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Grid = styled.div`
    width: 100%;
    max-height: 500px;
    overflow: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    padding: 10px 0;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    aling-items: center;
    gap: 10px;
    padding: 10px 0;
`;

// Lesson
export const Lesson = styled.div`
    width: 250px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-down);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        margin: auto;
        width: 300px;
    }

    @media only screen and (max-width: 425px) {
        width: 100%;
    }
`;

export const LessonHeader = styled.div`
    width: 100%;
    height: 100px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    h3 {color: #fff;}
`;

export const LessonInfo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    padding: 10px 15px;
    display: flex;
    align-items: flex-end;
    
    h3 {font-size: 12px;}
`;

export const LessonBody = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    h3 {font-size: 12px;}

    p {
        color: var(--gray-white-color);
        font-size: 12px;    
    }
`;

// Category
export const Category = styled.div`
    width: 250px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-down);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    overflow: hidden;
    padding: 10px;

    @media only screen and (max-width: 768px) {
        margin: auto;
        width: 300px;
    }

    @media only screen and (max-width: 425px) {
        width: 100%;
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

