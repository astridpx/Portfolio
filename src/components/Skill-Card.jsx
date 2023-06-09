// eslint-disable-next-line react/prop-types
const SkillCard = ({ title, logo, name }) => {
  return (
    <>
      <div className="h-44 w-full bg-white rounded shadow-md cursor-pointer hover:scale-105 transition-all duration-75">
        <h2 className="text-center mb-4 text-xl font-semibold text-main-dark-blue ">
          {title}
        </h2>
        <img src={logo} alt={name} className="h-28 mx-auto object-contain  " />
      </div>
    </>
  );
};

export default SkillCard;
