import CreationContainer from "./CreationContainer";
import heroImage from "../images/mobile/image-interactive.jpg";
import heroImageDesktop from "../images/desktop/image-interactive.jpg";

const Main = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="lg:flex">
        <div className="lg:w-3/4">
          <picture>
            <source media="(min-width: 1024px)" srcset={heroImageDesktop} />
            <img src={heroImage} alt="heroImage" className="w-full p-6" />
          </picture>
        </div>
        <div className="lg:w-3/4 lg:flex lg:flex-col lg:justify-center">
          <h4 className="text-center text-4xl uppercase font-thin my-4">
            The leader in interactive VR
          </h4>
          <div className="text-center text-veryDarkGray px-6">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </div>
        </div>
      </div>

      <CreationContainer />
    </div>
  );
};

export default Main;
