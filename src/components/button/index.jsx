function Button({ title, loading }) {
  return loading ? (
    <button
      className="bg-[#F43F5E] py-3 px-1 rounded-md text-white font-semibold w-full mt-5 flex items-center justify-center"
      disabled={loading}
    >
      <span className="loader"></span>
      <span>Loading...</span>
    </button>
  ) : (
    <button
      type="submit"
      className="bg-[#F43F5E] py-3 px-1 rounded-md text-white font-semibold w-full mt-5"
    >
      {title}
    </button>
  );
}

export default Button;
