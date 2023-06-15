const Day13 = () => {


  let number = [1, 2, 3, 4, 5, 6, 7, 8, 22, 17, 10];
  let evenNumber = number.filter((val) => {
    return val % 2 === 0;
  });
  let oddNumber = number.filter((val) => {
    return val % 2 !== 0;
  });
  return (
    <div>
      <h1 className='mt-10 font-mono text-4xl'>Finding Even and Odd numbers: </h1>
      <p className='mt-15 text-center text-3xl text-orange-400-700'>{`Even numbers are: ${evenNumber}`}</p>
      <p className='mt-15 text-center text-3xl text-purple-700'>{`Odd numbers are: ${oddNumber}`}</p>
    </div>
  )
}
export default Day13