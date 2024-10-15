function Hello()
{
  let myName = 'Vichith'; 
  let number = 436;
  let fullName = () => {
    return 'Vichith Chandran';
  }
  return <p>{myName} <br />MessageNo: {number} I am{fullName()}</p>
}
export default Hello;