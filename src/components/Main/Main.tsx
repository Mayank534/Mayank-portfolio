import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import adobephotoshop from "../../assets/Adobe Photoshop.svg";
import arduino from "../../assets/arduino.svg";
import bash from "../../assets/Bash.svg";
import blender from "../../assets/Blender.svg";
import bloomberg from "../../assets/bloomberg.svg";
import canva from "../../assets/Canva.svg";
import cpp from "../../assets/c++.svg";
import docker from "../../assets/Docker.svg";
import gazebo from "../../assets/Gazebo.svg";
import git from "../../assets/Git.svg";
import jupyter from "../../assets/Jupyter.svg";
import markdown from "../../assets/Markdown.svg";
import matplotlib from "../../assets/Matplotlib.svg";
import mysql from "../../assets/MySQL.svg";
import numpy from "../../assets/NumPy.svg";
import opencv from "../../assets/OpenCV.svg";
import pandas from "../../assets/Pandas.svg";
import pytorch from "../../assets/PyTorch.svg";
import ros from "../../assets/Robot Operating System (ROS).svg";
import sckitlearn from "../../assets/scikit-learn.svg";
import solidity from "../../assets/Solidity.svg";
import tensorflow from "../../assets/TensorFlow.svg";
import unity from "../../assets/Unity.svg";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 5
              },
              "remove": {
                "quantity": 5
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 40,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": boostrapIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": cssIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": wordpress,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": shopify,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": htmlIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": jsIcon,
                  "width": 20,
                  "height": 20
                },
                // {
                //   "src": mysqlIcon,
                //   "width": 20,
                //   "height": 20
                // },
                {
                  "src": python,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": java,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": reactIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": sassIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": typescriptIcon,
                  "width": 20,
                  "height": 20
                },
                // {
                //   "src": vscodeIcon,
                //   "width": 20,
                //   "height": 20
                // },
                {
                  "src": vueIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": adobephotoshop,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": arduino,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": bash,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": blender,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": bloomberg,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": canva,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": cpp,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": docker,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": gazebo,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": git,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": jupyter,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": markdown,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": matplotlib,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": mysql,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": numpy,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": opencv,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": pandas,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": pytorch,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": ros,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": sckitlearn,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": solidity,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": tensorflow,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": unity,
                  "width": 20,
                  "height": 20
                },

              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}