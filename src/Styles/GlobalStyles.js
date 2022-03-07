import styled, {css} from 'styled-components';

// Container
export const Container = styled.div`
    width: 100%;
    padding: 20px;
`;

// Header
export const Header = styled.header`
    width: 100%;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// Titles
export const Title = styled.h2`
    font-size: 25px;
    display: flex;
    align-items: center;
    vertical-align: baseline;
    gap: 5px;

    svg{
        color: var(--primary-color);
        font-size: 25px;
    }
`;

export const Subtitle = styled(Title)`
    font-size: 15px;
    font-weight: 700;
    padding: 20px 0;
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    ${props => props.column && css`flex-direction: column;`}
`;

export const Content = styled.div`
    width: 100%;
    padding: 20px 0;
`;

// Table

export const TableContainer = styled.div`
    width: 100%;
    padding: 10px; 
    background: #fff;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
`;

export const TableHeader = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TableContent = styled.div`
    width: 100%;
    max-height: 500px;
    overflow: auto;
`;

export const Table = styled.table`
    width: 100%;
    padding: 20px;
    border-collapse: collapse;
    position: relative;

    thead {
        position: sticky;
        top: 0;
        background: #fff;
    }

    th {
        padding: 10px;
        font-size: 12px;
        font-weight: 400;
    }

    tr:nth-child(odd) {
        background: var(--gray-white-variant-color);
        background: whitesmoke;
    }

    td {
        padding: 10px;
        font-size: 12px;
        text-align: center;

        &.dateDelivery {text-align: center;}
    }
`;

export const Status = styled.span`
    width: 85px;
    padding: 8px 5px;
    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    margin: auto;
    font-size: 12px;

    ${props => props.status === 'Finished' && css` border: 1px solid var(--success-color); color: var(--success-color);
    ` }
    ${props => props.status === 'Pending' && css` border: 1px solid var(--warning-color); color: var(--warning-color);` }
    ${props => props.status === 'Incomplete' && css` border: 1px solid var(--danger-color); color: var(--danger-color);` }
    
    ${props => props.status === 'Low' && css` border: 1px solid var(--success-color); color: var(--success-color);` }
    ${props => props.status === 'Medium' && css` border: 1px solid var(--warning-color); color: var(--warning-color);` }
    ${props => props.status === 'High' && css` border: 1px solid var(--danger-color); color: var(--danger-color);` }
`;

export const TdImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
`;