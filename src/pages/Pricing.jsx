import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <>
      <NavBar />
      <section className="relative z-10 overflow-hidden bg-white pb-12 pt-10 dark:bg-dark lg:pb-[90px] lg:pt-[12px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark  sm:text-4xl md:text-[40px]">
                  Nuestro plan
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Cambiate a nuestro plan premium y obtén acceso a todas las
                  funciones y actualizaciones futuras.
                </p>
              </div>
            </div>
          </div>

          {/* center div */}
          <div className="flex flex-col justify-center items-center ">
            <PricingCard
              type="Premium"
              price="$120"
              subscription="mes"
              description="Perfecto para pequeñas empresas y startups que quieren crecer."
              buttonText="Escoger plan"
              active
            >
              <List>Acceso a todas las funciones</List>
              <List>Acceso a todas las actualizaciones</List>
              <List>Soporte 24/7</List>

            </PricingCard>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};

export default Pricing;
