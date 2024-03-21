import Degg from "./assets/images/desktop/image-transform.jpg";
import Megg from "./assets/images/mobile/image-transform.jpg";
import Mcup from "./assets/images/mobile/image-stand-out.jpg";
import Dcup from "./assets/images/desktop/image-stand-out.jpg";
import Mgrapic from "./assets/images/mobile/image-graphic-design.jpg";
import Dgrapic from "./assets/images/desktop/image-graphic-design.jpg";
import Morange from "./assets/images/mobile/image-photography.jpg";
import Dorange from "./assets/images/desktop/image-photography.jpg";
// images for reviews
import emily from "./assets/images/image-emily.jpg";
import thomas from "./assets/images/image-thomas.jpg";
import jennie from "./assets/images/image-jennie.jpg";
// images for sub sections
import milkBottlesMobile from "./assets/images/mobile/image-gallery-milkbottles.jpg";
import milkBottlesDesktop from "./assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "./assets/images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "./assets/images/desktop/image-gallery-orange.jpg";
import coneMobile from "./assets/images/mobile/image-gallery-cone.jpg";
import coneDesktop from "./assets/images/desktop/image-gallery-cone.jpg";
import sugerCubeMobile from "./assets/images/mobile/image-gallery-sugar-cubes.jpg";
import sugerCubeDesktop from "./assets/images/desktop/image-gallery-sugarcubes.jpg";

const header = "text-4xl  font-bold capitalize pb-3 sm:text-3xl md:text-4xl";
const paragraph = "text-gray-400";

export const section = [
  {
    id: 0,
    title: "transform your brand",
    content:
      "we are a full-service creative agency specializing in helping brands grow fast.engage your clients through compeling csuals that do most of the marketing for you. ",
    link: "lern more",
    image: "",
    class: {
      h: header,
      p: paragraph,
    },
  },
  {
    id: 1,
    title: "",
    content: "",
    link: "",
    image: { mobile: Megg, desktop: Degg },
    class: "",
  },
  {
    id: 2,
    title: "",
    content: "",
    link: "",
    image: { mobile: Mcup, desktop: Dcup },
    class: "",
  },
  {
    id: 3,
    title: "Stand out to the right audience",
    content:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    link: "lern more",
    image: "",
    class: {
      h: header,
      p: paragraph,
    },
  },

  {
    id: 4,
    title: "Graphic design",
    content:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
    link: "",
    image: { mobile: Mgrapic, desktop: Dgrapic },
    class: {
      h: "text-emerald-800 pt-32 font-bold text-3xl sm:text-2xl",
      p: "text-emerald-800 pt-4 text-balance px-2",
    },
  },
  {
    id: 5,
    title: "Photography",
    content:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    link: "",
    image: {
      mobile: Morange,
      desktop: Dorange,
    },
    class: {
      h: "text-sky-900 pt-32 font-bold text-3xl sm:text-2xl ",
      p: "text-sky-900 pt-4 px-2",
    },
  },
];
// navlinks
export const navLinks = [
  { id: 0, name: "about", path: "#" },
  { id: 1, name: "services", path: "#" },
  { id: 2, name: "projects", path: "#" },
];

export const reviews = [
  {
    id: 0,
    image: emily,
    content:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R. ",
    job: "Marketing Director",
  },
  {
    id: 1,
    image: thomas,
    content:
      " Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. ",
    name: " Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    id: 2,
    image: jennie,
    content:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: " Jennie F.",
    job: "Business Owner ",
  },
];
export const subsectionImages = [
  {
    id: 0,
    image: {
      mobile: milkBottlesMobile,
      desktop: milkBottlesDesktop,
    },
  },
  {
    id: 1,
    image: {
      mobile: orangeMobile,
      desktop: orangeDesktop,
    },
  },
  {
    id: 2,
    image: {
      mobile: coneMobile,
      desktop: coneDesktop,
    },
  },
  {
    id: 3,
    image: {
      mobile: sugerCubeMobile,
      desktop: sugerCubeDesktop,
    },
  },
];
