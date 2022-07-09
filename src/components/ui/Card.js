import classes from "./Card.module.css";

// props as children property that contains the data that as been wraped in the <Card>........</Card>
// so we are using the props here
// so we are creating the box here so we can wrap in the box when there is a need so no repeating of code takes place

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
