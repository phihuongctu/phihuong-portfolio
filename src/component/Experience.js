const dataStudy = [
  {
    name: "Cần Thơ University",
    dateStart: 2015,
    dateEnd: 2019,
    description: "Chuyên ngành Công Nghệ Thông Tin. Khóa đào tạo 4 năm.",
  },
  {
    name: " THPT Hòa An",
    dateStart: 2002,
    dateEnd: 2014,
    description:
      "Một trường THPT nằm ở vùng sâu vùng xa nhưng tỉ lệ học sinh đậu đại học luôn trên 80%.",
  },
];
const dataWork = [
  {
    name: " Mạng Xã Hội Du Lịch Hahalolo",
    dateStart: 2020,
    dateEnd: "Present",
    description:
      "Mạng xã hội Hahalolo cũng đồng thời được tích hợp Dịch vụ du lịch trực tuyến (OTA – Online Travel Agent) và Thương mại Điện tử (TMĐT).",
  },
  {
    name: "Thiết Kế Website Toàn Năng",
    dateStart: 2019,
    dateEnd: 2020,
    description: "Thiết kế website chuyên nghiệp.",
  },
];
function Experience(props) {
  return (
    <section id="experience" className="experience mb-12">
      <div className="container max-w-screen-lg mx-auto">
        <div className="title text-center text-3xl font-semibold mb-8 text-text lg:text-left">
          <h2>Experience</h2>
        </div>
        <div className="experience-wrapper grid gap-4 mx-4 my-auto lg:grid-cols-2 lg:mx-0">
          <div className="col relative bg-white rounded-2xl p-8 shadow-lg">
            {dataStudy.map(function (item, index) {
              return (
                <div className="study-content relative mb-8 pl-12" key={index}>
                  <span className="time text-base text-text mb-4 text-text">
                    {item.dateStart} - {item.dateEnd}
                  </span>
                  <h3 className="title text-2xl text-text font-semibold my-3 text-text">
                    {item.name}
                  </h3>
                  <p className="text text-base text-text">{item.description}</p>
                </div>
              );
            })}

            <span className="line absolute left-6 w-px bg-purple-600 top-8 bottom-12"></span>
          </div>

          <div className="col relative bg-white rounded-2xl p-8 shadow-lg">
            {dataWork.map(function (item, index) {
              return (
                <div className="work-content relative mb-8 pl-12" key={index}>
                  <span className="time text-base text-text mb-4">
                    {item.dateStart} - {item.dateEnd}
                  </span>
                  <h3 className="title text-2xl text-text font-semibold my-3">
                    {item.name}
                  </h3>
                  <p className="text text-base text-text">{item.description}</p>
                </div>
              );
            })}
            <span className="line absolute left-6 w-px bg-purple-600 top-8 bottom-12"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;

// Keyframes
