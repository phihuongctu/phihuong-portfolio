import img1 from "../asset/img/team.svg";
import img2 from "../asset/img/communication.svg";
import img3 from "../asset/img/soccer.svg";
function SoftSkill(props) {
  const softSkill = [
    {
      name: "Teamwork",
      description: "",
      img: img1,
      tags: ["React", "API", "GraphQL", "Wordpress"],
    },
    {
      name: "Communication",
      description: "",
      img: img2,
      tags: ["React", "Tailwind", "Sass"],
    },
    {
      name: "sports",
      description: "",
      img: img3,
      tags: ["javascript"],
    },
  ];
  return (
    <section id="softSkill" className="soft-skill mb-12">
      <div className="container max-w-screen-lg mx-auto">
        <div className="title text-center text-3xl font-semibold mb-8 text-text lg:text-left">
          <h2>Soft Skill</h2>
        </div>
        <div className="content grid mx-4  gap-4 my-auto lg:grid-cols-3 lg:mx-0">
          {softSkill.map(function (item, index) {
            return (
              <div
                className="soft-box group  min-h-card px-4 py-8 text-center flex justify-between items-center flex-col rounded-3xl shadow-lg hover:bg-indigo-600 transition-all"
                data-color="#6C6CE5"
                key={index}
              >
                <img src={item.img} alt="Bolby" className=" w-48 h-48"></img>
                <h3 className="my-3 text-indigo-600 text-xl font-bold capitalize transition-all group-hover:text-white">
                  {item.name}
                </h3>
                {/* <div className="tags flex flex-wrap flex-row justify-center items-center">
                  {item.tags.map((item, index) => (
                    <span
                      className="projectDetail__label text-sm py-1 px-3 mr-1 mb-1 rounded-full text-white bg-indigo-900 font-medium capitalize"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default SoftSkill;
