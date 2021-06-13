import avt from "../asset/img/avt.jpg";
function About(props) {
  const dataSkill = [
    {
      title: "CSS/sass/tailwind",
      valueNow: "80%",
      color: "blue",
    },
    {
      title: "Javascript/Jquery",
      valueNow: "75%",
    },
    {
      title: "ReactJS",
      valueNow: "65%",
    },
  ];
  return (
    <section id="about" className="About mb-12">
      <div className="containner max-w-screen-lg mx-auto">
        <div className="title text-center text-3xl font-semibold mb-8 text-text lg:text-left">
          <h2>About Me</h2>
        </div>
        <div className="content flex flex-col lg:flex-row">
          <div className="avt w-40 my-0 mx-auto mb-6 h-40">
            <img src={avt} alt="Bolby" className=" rounded-full"></img>
          </div>
          <div className=" bg-white mx-4 my-auto skil p-4 flex  rounded-2xl shadow-lg flex-col  lg:w-4/5 lg:ml-20 lg:flex-row">
            <div className=" text-text mr-4 mb-4 text-left text lg:w-1/2 lg:mb-0 flex flex-col justify-between">
              <p className="text-text">
                I am Phi Huong, web developer from Can Tho. I have rich
                experience in web site design and building and customization,
                also I am good at WordPress.
              </p>
              <button className=" w-max my-0 mx-auto mt-4 font-bold text-white px-4 py-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full">
                Dowload CV
              </button>
            </div>
            <div className="skill-detail lg:w-1/2">
              {dataSkill.map(function (item, index) {
                return (
                  <div className="skill-detail-item mb-4 " key={index}>
                    <div className="skill-info flex justify-between">
                      <h4 className=" mb-3 mt-0 text-xl font-semibold text-text capitalize">
                        {item.title}
                      </h4>
                      <span className="">{item.valueNow}</span>
                    </div>
                    <div className="progress bg-gray-200 rounded-lg">
                      <div
                        className="progress-bar h-2 rounded-lg"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={item.valueNow}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="mt-12 achievement grid grid-cols-3 gap-4">
          <div className=" h-40 shadow-lg p-4 bg-white fact-item flex rounded-lg items-center">
            <FontAwesomeIcon icon={faFire} className="text-3xl" />
            <div className="details px-4">
              <h3 className="mb-0 mt-0 number">
                <em className="count font-semibold text-3xl">198</em>
              </h3>
              <p className="mb-0 text-2xl">Projects completed</p>
            </div>
          </div>
          <div className=" h-40 shadow-lg p-4 bg-white fact-item flex rounded-lg items-center">
            <FontAwesomeIcon
              icon={faFire}
              className="text-3xl"
              color="#FF4C60"
            />
            <div className="details px-4">
              <h3 className="mb-0 mt-0 number">
                <em className="count font-semibold text-3xl">198</em>
              </h3>
              <p className="mb-0 text-2xl">Projects completed</p>
            </div>
          </div>
          <div className=" h-40 shadow-lg p-4 bg-white fact-item flex rounded-lg items-center">
            <FontAwesomeIcon icon={faFire} className="text-3xl" />
            <div className="details px-4">
              <h3 className="mb-0 mt-0 number">
                <em className="count font-semibold text-3xl">198</em>
              </h3>
              <p className="mb-0 text-2xl">Projects completed</p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
export default About;
