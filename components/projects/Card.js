const Card = ({ project }) => {
  return (
    <div>
      <div class="p-6 max-w-xs bg-[#202040] rounded">
        <a href="#">
          <h5 class="mb-2 text-xl font-black font-Jbrains tracking-tight text-[#F1EDFF] dark:text-white">
            {project.Title}
          </h5>
        </a>
        <p class="mb-3  text-[#ACA9BB] font-inter text-sm">
          {project.Description}
        </p>
        <div className="flex space-x-3">
          {project.Stack.map((t) => {
            return <p className="text-xs font-Jbrains text-[#79759C]">{t}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
