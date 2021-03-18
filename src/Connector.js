import React from "react";
import NavbarCmp from "./NavbarCmp";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";
function Connector() {
  return (
    <div>
      <NavbarCmp />
      <div>
        <Row className="justify-content-center">
          <Cards
            title="React-Projects"
            txt="There are some react projects"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
            link="https://github.com/jahanzaib4587/Keep_App_React.git"
          />
          <Cards
            title="C++-Projects"
            txt="There are some C++ projects"
            src="https://i.pinimg.com/474x/77/fc/a5/77fca518c18ea242a72d26e649148567.jpg"
            link="https://hackr.io/blog/cpp-projects"
          />
          <Cards
            title="C#-Projects"
            txt="There are some C# projects"
            src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
            link="https://github.com/jahanzaib4587/EAD_Assignments.git"
          />
          <Cards
            title="Android-Projects"
            txt="There are some Android-Java projects"
            src="https://miro.medium.com/max/689/1*wSxeE-1tYe0e0uFJ1hJQRg.jpeg"
            link="https://github.com/jahanzaib4587/Quiz_App.git"
          />

          <Cards
            title="Flutter-Projects"
            txt="There are some Flutter projects"
            src="data:image/png;base64,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"
            link="https://github.com/jahanzaib4587/Flutter-Code.git"
          />
          <Cards
            title="Presentations"
            txt="There are some MS Powerpoint presentaions"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Microsoft_Office_PowerPoint_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282018%E2%80%93present%29.svg.png"
            link="https://github.com/jahanzaib4587/Presentations.git"
          />
        </Row>
      </div>
    </div>
  );
}

export default Connector;
