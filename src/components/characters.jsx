import Vindicta from "./Vindicta";
import Libro from "./Libro";
import Nologisam from "./Nologicsam";
import Nox from "./Nox";

import cyperImg from "/images/cyper.png";
import jettImg from "/images/jett.png";
import neonImg from "/images/neon.png";
import omenImg from "/images/omen.png";

const characters = [
  { name: "Vindicta", component: Vindicta, image: neonImg },
  { name: "Libro", component: Libro, image: omenImg },
  { name: "Nologisam", component: Nologisam, image: jettImg },
  { name: "Nox", component: Nox, image: cyperImg }
];

export default characters;
