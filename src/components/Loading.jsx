const Loading = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 rounded-full animate-spin border-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
        <p className="text-purple-500 font-medium text-xl">Loading Menu...</p>
      </div>
    </div>
  );
};

export default Loading;
