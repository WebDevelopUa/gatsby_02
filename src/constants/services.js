import React from "react";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

const servicesCollection = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Phasellus imperdiet dolor tortor, id gravida nisi dapibus ac. Etiam porttitor faucibus cursus. Nulla at tempus ex. `
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris pulvinar arcu justo, et convallis urna vulputate nec. Etiam ultrices urna non velit laoreet, ut porttitor mi pellentesque. Praesent placerat ex eget sem bibendum, vel pellentesque eros ultrices. Maecenas metus leo, porta eget tellus quis, dignissim congue quam.`
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `Sed sed interdum leo. Praesent eget sapien at erat tincidunt mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur varius dapibus. Cras nisl nulla, suscipit euismod ex ac, faucibus venenatis turpis.`
  }
];

export default servicesCollection;
