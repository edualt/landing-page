import Navbar from '../components/Navbar';
import HomeImage from '../assets/home-image.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-10">
        <div className="max-w-2xl">
          <p className="text-5xl font-bold text-center">¡Bienvenido al mundo de las manos que hablan!</p>
          <p className="text-2xl text-center text-zinc-700 pt-4">¿Sabías que el lenguaje de señas tiene su propia gramática y estructura lingüística única?</p>
        </div>
        <img src={HomeImage} alt="Lenguaje de señas" className="w-96 h-96 mt-10 object-contain" />

      </div>
    </>
  );
}

export default Home;
