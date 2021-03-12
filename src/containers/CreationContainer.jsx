import Creation from "../components/Creation";
import creationsMockup from "../utils/creationsMock";

const CreationContainer = () => {
  return (
    <div className="grid gap-4 px-4 my-6">
      {creationsMockup.map((creation) => (
        <Creation data={creation} />
      ))}
    </div>
  );
};

export default CreationContainer;
