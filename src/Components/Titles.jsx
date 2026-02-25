const TitleSection = ({ children }) => {
  return (
    <h2
      id=""
      className="g-titles-sections  
            font-bold tracking-[5px] 
             text-[2rem] 
             md:text-[3rem]
              text-titles-section-color p-[.5rem]"
    >
      {children}
    </h2>
  );
};
export default TitleSection;
