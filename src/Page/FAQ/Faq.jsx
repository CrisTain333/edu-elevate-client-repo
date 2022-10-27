import React from 'react'

const Faq = () => {
  return (
    <div>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Your Right To Know</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">What Is Edu Elevate</h3>
				<p className="mt-1 dark:text-gray-400">Edu Elevate Is The Best Learnign Plartfrom in the market right now. This is An Online learning Website
				the instructor you will get are high graguated from usa</p>
			</div>
			<div>
				<h3 className="font-semibold">The concepts are beginner friendly.</h3>
				<p className="mt-1 dark:text-gray-400">Yeahhh !!! It is Complete Beginner Friendly And Starts From Full Basics To Advance</p>
			</div>
			<div>
				<h3 className="font-semibold">Dose It Need cse Background To start</h3>
				<p className="mt-1 dark:text-gray-400">No From any Background You Can Access All This Courses</p>
			</div>
			<div>
				<h3 className="font-semibold">After Completing Course Will I Get a Job ??</h3>
				<p className="mt-1 dark:text-gray-400">We can't Give 100% surety. But 70% of the students After Completeing Our Course Gets The Job .So we will say Give Your Full Affort To Complete </p>
			</div>
		</div>
	</div>
</section>
      
    </div>
  )
}

export default Faq

