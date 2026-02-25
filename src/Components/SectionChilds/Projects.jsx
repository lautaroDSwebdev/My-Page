import ContainerMaxWidth from "../ContainerMaxWidth";
import ProjectsCards from "../ProjectsCards";
import TitleSection from "../Titles";

export const Projects = () => {
  return (
    <ContainerMaxWidth>
      <div id="proyectos" className=" flex justify-start w-full ">
        <TitleSection>Proyectos</TitleSection>
      </div>
      <ProjectsCards></ProjectsCards>
    </ContainerMaxWidth>
  );
};
