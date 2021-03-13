const Creation = (props) => {
  console.log(props);
  return (
    <div className="relative w-full">
      <p className="text-2xl leading-6 text-white font-thin uppercase bottom-4 left-2 w-1/2 absolute">
        {props.data.title}
      </p>
      <picture className="w-full">
        <source media="(min-width:768px)" srcset={props.data.image_desktop} />
        <img src={props.data.image_mobile} alt="" className="w-full" />
      </picture>
    </div>
  );
};

export default Creation;
