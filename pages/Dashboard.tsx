import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

interface Props {
  address: string;
}

const Dashboard: React.FC<Props> = ({ address }) => {
  return (
    <Wrapper>
      <MainContainer>
        <Header />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Dashboard;
