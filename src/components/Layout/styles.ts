import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: 768px) {
        padding-bottom: 85px;
    }
`;

export const MainContent = styled.main`
    flex: 1;
`;
