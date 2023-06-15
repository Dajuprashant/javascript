const Day14 = () => {
  return (
    <div>

      {/* 1 */}
      <div className="info flex justify-between bg-green-600">
        <div className="text-lg m-2 ">
          <h1 className="font-bold ml-5"> Contact: +977 9843217125 </h1>
        </div>

        <div className="imageinfo flex gap-10 m-2 mr-10 ">
          <img className="w-[25px] h-[25px] hover:animate-spin" src="assets/images/facebook.svg" alt="" />
          <img className="w-[25px] h-[25px] hover:animate-spin" src="assets/images/instagram.svg" alt="" />
          <img className="w-[25px] h-[25px] hover:animate-spin" src="assets/images/twitter.svg" alt="" />
          <img className="w-[25px] h-[25px] hover:animate-spin" src="assets/images/whatsapp.svg" alt="" />
        </div>
      </div>

      {/* 2 */}
      <div className="nav flex justify-between">

        <div className="flex gap-2 ml-10">
          <p className="mt-2"><img src="assets/images/mindrisers.jpg" alt="" /></p>
          <h1 className="font-bold mt-2 text-[30px] ">mindrisers</h1>
        </div>

        <div className="text-[20px] mt-2 ">
          <a className="pr-5 font-bold" href="">Courses</a>
          <a className="pr-5 font-bold" href="">After +2 Courses</a>
          <a className="pr-5 font-bold" href="">Online Admission</a>
          <a className="pr-5 font-bold" href="">Placement Partner</a>
          <a className="pr-5 font-bold" href="">Success Gallery</a>
          <a className="pr-5 font-bold" href="">Blogs</a>
          <a className="pr-5 font-bold" href="">
            <button className="border-2 border-black">
              Contact Us
            </button></a>
        </div>



      </div>




    </div>
  )
}
export default Day14