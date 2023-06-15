import React from 'react'

const Day5 = () => {

  // const income = 5000
  // const expense = 6000
  // if (income > expense) {
  //   console.log(`profit`)

  // } else if (expense > income) {
  //   console.log(`loss`)
  // }

  const val = prompt('what is your name');
  console.log(val)

  const greet = (greet, user) => {
    console.log(greet);
    alert(`${greet} ${user}`);
  }

  return (
    <div>Day5

      <div>
        <button onClick={() => greet('morning', 'prashant')} className='border-2 bg-slate-800 text-white m-5 p-2 px-4 rounded-lg hover:bg-green-500 hover:animate-bounce'> push me</button>
      </div>

    </div>
  )
}
export default Day5