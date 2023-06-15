const D = () => {

  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let a = num.filter((val) => {
    return val % 2 === 0;
  })
  let b = num.filter((val) => {
    return val % 2 !== 0;
  })

  return (
    <>
      the num are
      {a}

      the odd are {b}

    </>
  )
}
export default D