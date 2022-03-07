import styled from 'styled-components';

// Content
export const Content = styled.div`
    width: 100%;
    height: 70vh;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

// Content User
export const ContentUser = styled.div`
    width: 350px;
    background: #fff;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;

    span {
        font-size: 12px;
        color: #fff;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 80px;
        background: var(--primary-color);
    }

    p {
        font-size: 13px;
    }

    .btnEdit {
        position: absolute;
        right: 20px;
        top: 20px;
    }
`;

// Container Header
export const ContentHeader = styled.div`
    width: 100%;
    height: 100px;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: auto;
`;