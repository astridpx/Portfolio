// eslint-disable-next-line react/prop-types
const SkillCard = ({ title, logo, name }) => {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-duration="2000"
        data-aos-delay="400"
        className="h-36 w-full bg-white rounded shadow-md cursor-pointer hover:scale-105 transition-all duration-75 md:h-44"
      >
        <h2 className="text-center mb-4 text-xl font-semibold text-main-dark-blue ">
          {title}
        </h2>
        <img
          src={logo}
          alt={name}
          className="h-20 mx-auto object-contain md:h-28"
        />
      </div>
    </>
  );
};

export default SkillCard;
