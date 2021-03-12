const Creation = (props) => {
  console.log(props);
  return (
    <div className="relative">
      <p className="text-2xl leading-6 text-white font-thin uppercase bottom-4 left-2 w-1/2 absolute">
        {props.data.title}
      </p>
      <picture>
        <img src={props.data.image_mobile} alt="" />
      </picture>
    </div>
  );
};

export default Creation;
