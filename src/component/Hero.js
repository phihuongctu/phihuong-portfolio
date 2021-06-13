import avt from "../asset/img/avt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Scrolldown from "./ScrollDown";
function Intro(props) {
  const Social = [
    {
      name: "faFacebook",
      link: "https://www.facebook.com/phihuong.tu/",
      icon: (
        <FontAwesomeIcon icon={faFacebook} size="2x" className="text-text" />
      ),
    },
    {
      name: "faGithub",
      link: "https://github.com/phihuongctu",
      icon: <FontAwesomeIcon icon={faGithub} size="2x" className="text-text" />,
    },
    {
      name: "faInstagram",
      link: "https://www.instagram.com/phi_huong/",
      icon: (
        <FontAwesomeIcon icon={faInstagram} size="2x" className="text-text" />
      ),
    },
    {
      name: "faTwitter",
      link: "https://twitter.com/phihuong9",
      icon: (
        <FontAwesomeIcon icon={faTwitter} size="2x" className="text-text" />
      ),
    },
  ];
  return (
    <section
      id="home"
      className="intro items-center h-screen grid relative mb-12"
    >
      <div className="text-center max-w-screen-lg mx-auto">
        <div className="avatar my-0 mx-auto mb-6  w-28 h-28">
          <img src={avt} alt="Bolby" className="rounded-full"></img>
        </div>

        <h1 className="mb-2 mt-0 text-4xl font-bold text-text">{props.name}</h1>
        <span>
          <span className="text-rotating morphext">
            <span className=" text-base font-semibold text-text">
              I'm a {props.work}
            </span>
          </span>
        </span>
        <ul className="social grid gap-4 items-center grid-cols-4 m-6">
          {Social.map(function (item, index) {
            return (
              <li className="list-inline-item " key={index}>
                <a href={item.link}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <button className=" font-bold text-white px-4 py-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full">
            Hire me
          </button>
        </div>
      </div>
      <Scrolldown></Scrolldown>
    </section>
  );
}

export default Intro;
//Animated ball
const colors = [
  "#4cc9f0",
  "#4895ef",
  "#4361ee",
  "#3f37c9",
  "#3a0ca3",
  "#480ca8",
  "#560bad",
  "#7209b7",
  "#b5179e",
  "#f72585",
];

const numBalls = 20;
const balls = [];
setTimeout(function () {
  const content = document.getElementById("contents");
  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 90)}%`;
    ball.style.top = `${Math.floor(Math.random() * 100)}%`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    content.append(ball);
  }
  balls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12,
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` },
      ],
      {
        duration: (Math.random() + 1) * 5000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  });
}, 1000);
