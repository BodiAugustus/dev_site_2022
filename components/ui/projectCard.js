import Showcase from './Showcase';

const ProjectCard = () => {
  return (
    <div
      className=" bg-gradient-to-b from-sky-800 to-stone-300 
        xxs:h-[275vh]
        xs:h-[268vh]
        sm:h-[280vh]
        md:h-[117vh]
        lg:h-[110vh]
        xl:h-[100vh]
        2xl:h-[85vh]
        "
    >
      <h1
        className="text-white text-center -mb-2 font-bebes underline underline-offset-8 text-2xl 
        xs:pt-8
        sm:text-3xl 
        md:text-4xl 
        lg:text-3xl lg:mb-0  
        
        "
      >
        Featured Projects
      </h1>

      <div
        className="
        md:grid md:grid-cols-2
        lg:grid-cols-4
        "
      >
        <Showcase />
      </div>
    </div>
  );
};

export default ProjectCard;
