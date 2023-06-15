// import React from 'react'

const Movie1 = () => {

  // const person = [

  //   { name: 'ram', age: 20, profession: 'student' },
  //   { name: 'ram', age: 20, profession: 'student' },
  //   { name: 'ram', age: 20, profession: 'student' },
  // ];

  // {person.map((p, i) => {
  //   return <div>
  //     <h1>{p.name}</h1>
  //     <h1>{p.age}</h1>
  //     <h1>{p.profession}</h1>
  //   </div>
  // })}

  const data = [
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima.',
      released: 2023
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima.',
      released: 2023
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima.',
      released: 2023
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima.',
      released: 2023
    }
  ];




  return (

    <div className='p-5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

      {data.map((movie, i) => {

        return <div key={i} className='shadow-lg'>
          <img src={movie.image} alt="" className='h-[350px] w-full rounded-lg' />
          <div className='p-5 space-y-2'>
            <h1>{movie.title}</h1>
            <p>{movie.detail}</p>
            <p>Released-Dagte:-{movie.released}</p>
          </div>

        </div>
      })}



    </div>
  )
}

export default Movie