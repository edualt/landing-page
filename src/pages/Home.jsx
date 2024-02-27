import Navbar from "../components/Navbar";
import HomeImage from "../assets/home-image.jpg";

import "../assets/css/home.css";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const Home = () => {
  const redirectToPremium = () => {
    window.location.href = "/pricing";
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-10">
        <div className="max-w-2xl">
          <p className="text-5xl font-bold text-center">
            Bienvenido al mundo de las manos que hablan.
          </p>
          <p className="text-2xl text-center text-zinc-700 pt-4">
            ¿Sabías que el lenguaje de señas tiene su propia gramática y
            estructura lingüística única?
          </p>
        </div>
        <img
          src={HomeImage}
          alt="Lenguaje de señas"
          className="w-96 h-96 mt-10 object-contain"
        />

        <div className="max-w-2xl mt-10 mb-5">
          <p className="text-2xl text-center text-zinc-700">
            En este sitio web podrás aprender el lenguaje de señas mexicano
            (LSM) de manera fácil y rápida.
          </p>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="scroll"></div>
        </div>

        {/* center div */}
        <div className="flex flex-col md:flex-row justify-center md:items-stretch items-center">
          <div className="flex-grow w-full sm:lg:w-1/2 md:w-1/3 bg-zinc-100 rounded-xl p-5 m-5">
            <p className="text-xl font-bold text-center mb-5">
              Días de la semana
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5RSCf5EQscE?si=PKIHsLodYCRYailK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full object-contain rounded-xl mb-5"
            ></iframe>
            <p className="text-lg text-center text-zinc-700">
              Aprende los días de la semana en lenguaje de señas.
            </p>
          </div>
          <div className="flex-grow w-full sm:lg:w-1/2 md:w-1/3 bg-zinc-100 rounded-xl p-5 m-5">
            <p className="text-xl font-bold text-center mb-5">Números</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bh5bY6axrz4?si=09EaA6xiv9lIPRQG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full  object-contain rounded-xl mb-5"
            ></iframe>
            <p className="text-lg text-center text-zinc-700">
              Aprende los números en lenguaje de señas.
            </p>
          </div>
          <div className="flex-grow w-full sm:lg:w-1/2 md:w-1/3  bg-zinc-100 rounded-xl p-5 m-5">
            <p className="text-xl font-bold text-center mb-5">Vehiculos</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p0tkv-5IYRg?si=wM2euU1BmicjR5Zc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full  object-contain rounded-xl mb-5"
            ></iframe>
            <p className="text-lg text-center text-zinc-700">
              Aprende los vehículos en lenguaje de señas.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mt-10 mb-5">
          <p className="text-2xl text-center text-zinc-700">
            Ahora que conoces algunas palabras, te invitamos a conocer el
            abecedario completo, para que puedas formar tus propias palabras y
            comunicarte con el lenguaje de señas.
          </p>
        </div>

        <div className="w-full sm:lg:w-2/3 bg-zinc-100 rounded-xl p-5 m-5">
          <p className="text-xl font-bold text-center mb-5">
            Aprende el abecedario
          </p>
          <iframe
            width="100%"
            height="640"
            src="https://www.youtube.com/embed/44Ze_C8WTWw?si=H0Uvjbir8PGkqMLb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full object-contain rounded-xl mb-5"
          ></iframe>
          <p className="text-lg text-center text-zinc-700">
            Aprende el abecedario en lenguaje de señas.
          </p>
        </div>

        <div className="max-w-2xl mt-10 mb-5">
          <p className="text-2xl text-center text-zinc-700">
            ¿Quieres más contenido? Presiona el botón para obtener contenido
            premium.
          </p>
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-black hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2  hidden md:block" onClick={redirectToPremium}>
              Obtener contenido premium -{">"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
