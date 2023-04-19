type ButtonProps = {
  children: string;
  onClick: () => void;
  styles?: string;
};

export default function Button({ children, onClick, styles }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn btn-primary ${styles}`}>
      {children}
    </button>
  );
}
