import React from 'react'
const Day4 = () => {



  return (


    <div className='w-[300px] mx-auto border-red-950 shadow-2xl shadow-blue-950 border-4 p-5 ' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')` }}>

      {/* <img className='h-[400px] w-[300px] ' src="assets/images/LANDSCAPE.jpg" alt="" /> */}

      <p className='text-yellow-300 pt-64 '>
        <h1 className='text-3xl text-white'>Intersteller</h1>
        <h2 className='text-[10px] text-white'> Release dates
          October 26, 2014 (TCL Chinese Theatre)
          November 5, 2014 (United States)
          November 7, 2014 (United Kingdom)</h2><br />
        Directed by	:Christopher Nolan <br />
        Written by  :Jonathan Nolan Christopher Nolan <br />
        Produced by :Emma Thomas
        Christopher Nolan
        Lynda Obst
      </p>

      <div className='footer flex justify-between'>



        <div>
          <button className='border-2 border-r-2 border-red-600 text-white animate-pulse'>watch trailer</button>
        </div>

        <div>
          <button> <img className='w-5 h-5' src="assets/images/bookmark.svg" alt="" /></button> <button><img src="assets/images/share.svg" alt="" /></button>
        </div>

      </div>


    </div>



  )
}
export default Day4
