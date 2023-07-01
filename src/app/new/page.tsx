export default function Home() {
  return (
    <div className="flex flex-col space-y-6 justify-center min-h-[400px] items-center text-center">
      <h1 className="text-7xl font-semibold tracking-tight text-gray-100 max-w-4xl mt-10 leading-[5rem] ">
        Amine Tayani{`'`} Portfolio As Full Stack Developer
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl">
        Welcome to my Portfolio where i showcases my work as a Full Stack
        Developer and provides an overview of my skills, projects, and
        contributions.
      </p>
      <button className="py-3 px-8 bg-gradient-to-r from-purple-900 to-blue-800 font-medium text-lg text-white rounded-full">
        Get Started
      </button>
    </div>
  );
}
