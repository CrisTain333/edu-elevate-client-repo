import React from 'react'
import BrandLogo from '../../Image/brand.png'
const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">It-World Is The Best Learning Platform Right Now</h1>
      <p className="mb-8 leading-relaxed">“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</p>
      <p className='mb-3 leading-relaxed'>“In learning you will teach, and in teaching you will learn.”</p>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={BrandLogo}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">One of the most important areas we can develop as professionals is competence in accessing and sharing knowledge.
      </h1>
      <p className="mb-8 leading-relaxed">Online learning is not the next big thing, it is the now big thing</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home
