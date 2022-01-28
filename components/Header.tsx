import React from 'react';
import styled from 'styled-components';

interface Props {}

const Header = (props: Props) => {
  return <div></div>;
};

const Wrapper = styled.div`
  width: calc() (100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

export default Header;
