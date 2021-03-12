import Creation from "../components/Creation";
import creationsMockup from "../utils/creationsMock";

const CreationContainer = () => {
  return (
    <div className="grid gap-4 px-4 my-6 ">
      {creationsMockup.map((creation) => (
        <Creation data={creation} />
      ))}

      <div className="text-center text-xs font-semibold border-2 border-verDarkGray w-1/2 mx-auto px-8 py-2 uppercase tracking-widest">
        see all
      </div>
    </div>
  );
};

export default CreationContainer;
