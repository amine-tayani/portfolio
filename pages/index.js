import dynamic from "next/dynamic";

const HeroComponent = dynamic(() => import("../components/Hero"));
const HeaderComponent = dynamic(() => import("../components/Header"));
const SkillsComponent = dynamic(() => import("../components/Skills"));
const ProjectsComponent = dynamic(() =>
  import("../components/projects/Projects")
);
const ContactComponent = dynamic(() => import("../components/Contact"));
const CreditComponent = dynamic(() => import("../components/Credit"));

const Home = () => {
  return (
    <>
      <head>
        <title>Amine Tayani</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <HeaderComponent />
      <HeroComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
      <CreditComponent />
    </>
  );
};

export default Home;
