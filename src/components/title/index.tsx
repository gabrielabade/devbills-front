import { Container } from './styles';

type TitleProps = {
  title: string;
  sutitle: string;
};

export function Title({ title, sutitle }: TitleProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{sutitle}</span>
    </Container>
  );
}
