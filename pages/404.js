const Custom404 = () => {
  return (
    <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
        <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
          <h1 className="text-center lg:text-left text-3xl lg:text-8xl mt-12 md:mt-0 text-gray-200">
            Sorry, this page isn&#x27;t available
          </h1>
          <div className="mt-20">
            <a
              href="/"
              className="px-4 py-3 w-40 text-base  tracking-wide rounded bg-purpley text-gray-100 hover:bg-darkest-gray transition ease-in-out duration-300 hover:ring-1 hover:ring-blue-900 focus:outline-none focus:bg-blue-700"
            >
              Go back home
            </a>
          </div>
        </div>
        <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
          <img src="/images/error_404/Error_404.svg" />
        </div>
      </div>
    </div>
  )
}

export default Custom404
