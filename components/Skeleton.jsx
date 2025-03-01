const Skeleton = () => {
  return (
    <div className="container bg-[#FFF7ED] animate-pulse">
      {/* FilterContainer Skeleton */}
      <div className="VanContainer">
        <div className="FilterContainer p-4">
          <div className="h-8 w-64 bg-gray-300 rounded mb-4"></div>
          <div className="flex justify-between items-center gap-3">
            <div className="space-x-2 flex">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="h-10 w-24 bg-gray-300 rounded"
                  ></div>
                ))}
            </div>
            {/* <div className="h-8 w-28 bg-gray-300 rounded"></div> */}
          </div>
        </div>

        {/* VanListContainer Skeleton */}
        <div className="VanListContainer p-3 grid grid-cols-2 gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="bg-gray-300 rounded-lg p-4">
                <div className="h-32 bg-gray-400 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-400 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;