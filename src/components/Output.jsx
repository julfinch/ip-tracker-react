const Output = ({ data, error }) => {
  return (
    <section className="output md:w-full p-3 mt-6 md:mt-9 space-y-1 md:p-3 h-32 md:h-28 -mb-24 md:-mb-24 bg-white rounded-xl flex flex-col md:flex-row justify-evenly text-center md:text-left h-64 md:justify-between">
      <div className="md:px-5 w-full break-all">
        <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">
          IP Address
        </span>
        <p className="ip-info text-sm sm:text-base md:text-lg md:mt-3 h-0 font-bold text-lg md:text-xl">
          {data?.ip}
        </p>
      </div>

      <div className="md:px-5 md:border-l md:border-gray-300 md:border-solid w-full break-all">
        <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">
          Location
        </span>
        <p className="location-info text-sm sm:text-base md:text-lg md:mt-3 font-bold text-lg md:text-xl">
          {data?.city === undefined
            ? "--"
            : `${data?.city}, ${data?.country_name}`}
        </p>
      </div>

      <div className="md:px-5 md:border-l md:border-gray-300 md:border-solid w-full break-all">
        <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">
          Timezone
        </span>
        <p className="timezone-info text-sm sm:text-base md:text-lg md:mt-3 font-bold text-lg md:text-xl">
          {data?.utc_offset === undefined ? "--" : `UTC: ${data?.utc_offset}`}
        </p>
      </div>

      <div className="md:px-5 md:border-l md:border-gray-300 md:border-solid w-full break-all">
        <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">
          ISP
        </span>
        <p className="isp-info text-sm sm:text-base md:text-lg md:mt-3 font-bold text-lg md:text-xl">
          {data?.org === undefined ? "--" : data?.org}
        </p>
      </div>
    </section>
  );
};

export default Output;
