import Creation from "../components/Creation";
import creationsMockup from "../utils/creationsMock";

const CreationContainer = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 my-6 max-w-3xl mx-auto">
      <h3 className="text-center uppercase text-3xl font-thin md:col-span-2 lg:col-span-4	">
        Our creatons
      </h3>
      {creationsMockup.map((creation) => (
        <Creation data={creation} />
      ))}

      <div className="text-center text-xs font-semibold border-2 border-darkGray max-w-2xl mx-auto px-8 py-2 uppercase tracking-widest hover:bg-black hover:text-white transition ease-out duration-700 cursor-pointer md:col-span-2  lg:col-span-4">
        see all
      </div>
    </div>
  );
};

export default CreationContainer;
