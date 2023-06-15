import React from 'react'


export const Day8 = () => {
  let total = 0;
  const totalfun = (...nums) => {
    for (let num of nums) {
      total += num;

    }
    return total;
  }

  const totalval = totalfun(5, 8, 9, 10, 20);
  console.log(totalval)
  return (
    <div>Day8



    </div>
  )
}