const Skills = () => {
  const skills = [
    "HTML/CSS",
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "Express",
    "React",
    "React Native",
    "NextJS",
    "Graphql",
    "Django",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Docker",
  ];
  return (
    <div className="w-full mt-32 mx-10 sm:mx-12 md:mx-20 lg:mx-64" id="skills">
      <div className="">
        <h1 className="tracking-tighter font-inter font-bold mb-10 lg:mb-20 mt-8 sm:mt-14 text-3xl text-gray-300 sm:text-3xl">
          Relevant skills
        </h1>
      </div>
      <div className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <p className="text-gray-400 font-inter text-base sm:text-lg">
          <div className="hidden md:block">
            Hi my name is Amine and I enjoy creating things that live on the
            web. I have more than three years of hands-on experience in full
            stack development and excellent knowledge of web applications.
            <br />
            <br /> I completed my software engineering degree at the Higher
            school of technology in Casablanca ,Morocco.
            <br />
          </div>
          <br /> As a Full stack Web Developer my role is to keep attention to
          the details and designing knowledge will be an added advantage for me
          to serve a quality-oriented apps. And here are a the technologies that
          I’ve been working with these years :
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10 font-Jbrains">
          {skills.map((skill, index) => {
            return (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-purple-600">▹</span>
                <span className="text-gray-200 text-sm">{skill}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
