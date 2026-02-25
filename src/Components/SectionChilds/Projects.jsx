import ContainerMaxWidth from "../ContainerMaxWidth";
import ProjectsCards from "../ProjectsCards";
import TitleSection from "../Titles";

export const Projects = () => {
  return (
    <ContainerMaxWidth>
      <div className=" flex justify-start w-full g-titles-sections" id="proyectos">
        <TitleSection>Proyectos</TitleSection>
      </div>
        <ProjectsCards></ProjectsCards>
    </ContainerMaxWidth>
  );
};
