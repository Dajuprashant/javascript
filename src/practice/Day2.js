import React from 'react'
const Day2 = () => {

  const personName = 'Hello world';
  const age = 90;

  const newWord = `${personName} its the time ${age}`

  console.log(personName.repeat(5))

  return (
    <div>
      <h1>{`${newWord}something is going on`}</h1>
    </div>
  )
}
export default Day2
