import { useState, useEffect } from "react";
import "./index.css";
import imgBg from "./images/pattern-bg.png";
import useSWR from "swr";
import { AnimatePresence } from "framer-motion";
import Search from "./components/Search";
import Output from './components/Output';
import Modal from "./components/Modal";
import Map from './components/Map';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useTracker = (ip) => {
  const { data, error } = useSWR(`https://ipapi.co/${ip}/json/`, fetcher);

  return {
    data,
    error
  };
};

export default function App() {
  const [ip, setIp] = useState("");
  const { data, error } = useTracker(ip);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (data?.error) {
      setOpenModal(true);
    }
  }, [data?.error]);
  return (
    <>
        <main className="min-h-screen container">
          <header
            className="px-12 md:px-28 z-0 flex w-screen flex-col justify-center"
            style={{
              backgroundImage: `url("${imgBg}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <h1 className="text-xl text-white text-center mb-4 md:mb-7 font-bold">
              IP Address Tracker
            </h1>
            <div className="origin-center">
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {data?.error ? (
                  <Modal
                    data={data}
                    open={openModal}
                    onClose={() => {
                      setOpenModal(false);
                    }}
                  />
                ) : null}
              </AnimatePresence>
            </div>
            <Search setIp={setIp} />
            <Output data={data} error={error}/>
          </header>
          <div className="h-screen w-screen">
          <Map data={data} error={error} />
          </div>
        </main>
    </>
  );
}
