import { FaRegTrashAlt } from 'react-icons/fa';

import { formatCurrency } from '../../utils/format-currency';
import { Container, Info, Content, DeleteButton } from './styles'; // Importe o estilo e o componente do botão de exclusão
type TransactionProps = {
  id: number;
  title: string;
  date: string;
  amount: number;
  category: {
    title: string;
    color: string;
  };
  variant?: 'income' | 'expense';
  onDelete: (id: number) => void;
};

export function Transaction({
  id,
  title,
  date,
  amount,
  category,
  variant = 'income',
  onDelete,
}: TransactionProps) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Container>
      <Info>
        <span>#{id.toString().padStart(4, '0')}</span>
        <div>
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
      </Info>
      <Content $variant={variant} $tagColor={category.color}>
        <strong>{formatCurrency(amount)}</strong>
        <span>{category.title.toUpperCase()}</span>
      </Content>
      <DeleteButton onClick={handleDelete}>
        <FaRegTrashAlt />
      </DeleteButton>
    </Container>
  );
}
