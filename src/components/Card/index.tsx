// import "./styles.scss";

type CardProps = {
  color: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className="card">
      <p>Card {props.color}</p>
    </div>
  );
};
