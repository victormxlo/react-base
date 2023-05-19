import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BUTTON_CLICKED',
    })
  }

  return (
    <Container>
      <Title>Title</Title>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <button type="button" onClick={handleClick}>Send</button>
    </Container>
  );
}
