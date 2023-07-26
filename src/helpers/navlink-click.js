export const handleClick = async (id) => {
  const about = document.getElementById("about");
  const project = document.getElementById("projects");
  const skill = document.getElementById("skill");
  const contact = document.getElementById("contact");

  switch (id) {
    case 2:
      about.scrollIntoView({ behavior: "smooth" });
      break;
    case 3:
      skill.scrollIntoView({ behavior: "smooth" });
      break;
    case 4:
      project.scrollIntoView({ behavior: "smooth" });
      break;
    case 5:
      contact.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      return null;
  }
};
