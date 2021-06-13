import img1 from "../asset/img/news.svg";
import img2 from "../asset/img/Portfolio.svg";
import img3 from "../asset/img/color.svg";
import img4 from "../asset/img/Support V2.svg";
import img5 from "../asset/img//Timezone.svg";
import img6 from "../asset/img/news-2.svg";

function Service(props) {
  const project = [
    {
      name: "Website tin tức Teen1s",
      description: "",
      img: img1,
      tags: ["React", "API", "GraphQL", "Wordpress"],
    },
    {
      name: "Portfolio",
      description: "",
      img: img2,
      tags: ["React", "Tailwind", "Sass"],
    },
    {
      name: "generator color",
      description: "",
      img: img3,
      tags: ["javascript"],
    },
    {
      name: "Quiz app",
      description: "",
      img: img6,
      tags: ["javascript"],
    },
    {
      name: " xử lí dữ liệu video từ Youtube",
      description: "",
      img: img4,
      tags: ["Python"],
    },
    {
      name: "Hệ Thống Quản Lý Đào Tạo Trường Đại Học",
      description: "",
      img: img5,
      tags: ["PHP", "Mysql", "css", "bootstrap"],
    },
  ];
  return (
    <section id="project" className="service mb-12">
      <div className="container max-w-screen-lg mx-auto">
        <div className="title text-center text-3xl font-semibold mb-8 text-text lg:text-left">
          <h2>Project</h2>
        </div>
        <div className="content grid  gap-4 mx-4 my-auto lg:grid-cols-3 lg:mx-0">
          {project.map(function (item, index) {
            return (
              <div
                className=" service-box min-h-card px-4 py-8 text-center flex justify-between items-center flex-col rounded-3xl shadow-lg  transform transition duration-500 hover:-translate-y-2"
                data-color="#6C6CE5"
                key={index}
              >
                <img
                  src={item.img}
                  alt="Bolby"
                  className=" w-48 h-48 transform transition duration-500 hover:scale-110 "
                ></img>
                <h3 className="my-3 text-white text-xl font-bold capitalize">
                  {item.name}
                </h3>
                <div className="tags flex flex-wrap flex-row justify-center items-center">
                  {item.tags.map((item, index) => (
                    <span
                      className="projectDetail__label text-sm py-1 px-3 mr-1 mb-1 rounded-full text-white bg-indigo-900 font-medium capitalize"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Service;
