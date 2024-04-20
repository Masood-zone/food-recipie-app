function Loader({ loading }) {
  return loading ? (
    <div className="flex justify-center items-center w-full my-20">
      <div className="loader"></div>
      <p className="font-medium text-xl pl-3">Loading</p>
    </div>
  ) : (
    <></>
  );
}

export default Loader;
