const Day12 = () => {
  // const newnumbers = numbers.map((n, i) => {
  //   return n * 5
  // })
  // console.log(newnumbers)

  const num = [22, 34, 67, 44, 12, 55, 45, 7, 8];
  const result = num.filter(oddnum);

  function oddnum(num) {
    return oddnum % 2 !== 0;
  }


  return (
    <div>
      {oddnum}
    </div>
  )
}
export default Day12