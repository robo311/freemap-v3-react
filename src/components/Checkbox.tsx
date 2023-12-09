import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';

type Props = {
  value: boolean;
};

export function Checkbox({ value }: Props) {
  return value ? (
    <FaRegCheckSquare data-testid="check-square-icon" />
  ) : (
    <FaRegSquare data-testid="square-icon" />
  );
}
