const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am Still hungry.</h3>}</>;
};
export default ErrorMessage;
