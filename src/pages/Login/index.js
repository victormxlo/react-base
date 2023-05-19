import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import axios from '../../services/axios';

export default function Login() {
  React.useEffect( () => {
    async function getData() {
      const response = await axios.get('/clients');
      const { data } = response;
    }

    getData();
  }, []);

  return (
    <Container>
      <Title>Title</Title>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <button type="button">Send</button>
    </Container>
  );
}
