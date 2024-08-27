import AppLaunchComplete from "@/components/ui/AppLaunchComplete/AppLaunchComplete";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Importa el componente Link desde react-router-dom

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <div className="bg-red-500 h-1"></div>
        <header className="px-4 lg:px-6 h-14 flex items-center p-4 bg-muted/50">
          <Link className="flex items-center justify-center" to="#">
            <img className="w-28" src="./public/img/logo.png" alt="logo" />
            <span className="ml-2 text-lg font-semibold"> </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-lg font-medium hover:text-gray-500  font-semibold"
              to="#inicio"
            >
              Inicio
            </Link>
            <Link
              className="text-lg font-medium hover:text-gray-500   font-semibold"
              to="#caracteristicas"
            >
              Características
            </Link>
            <Link
              className="text-lg font-medium hover:text-gray-500  font-semibold"
              to="#galeria"
            >
              Galería
            </Link>
            <Link
              className="text-lg font-medium hover:text-gray-500   font-semibold"
              to="#contacto"
            >
              Contacto
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          <section
            id="inicio"
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/50 "
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Bienvenido a Nuestra Página
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl font-semibold ">
                    Descubre la simplicidad y elegancia de nuestro diseño
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className="bg-red-500 rounded-3xl hover:scale-110 transition-transform hover:bg-red-500">
                    Comenzar
                  </Button>
                  <Button className="bg-violet-600 rounded-3xl outline hover:scale-110 transition-transform hover:bg-violet-600">
                    Saber más
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section
            id="caracteristicas"
            className="w-auto py-12 md:py-24 lg:py-32 bg-muted/50"
          >
            <div className="container px-4 md:px-6">
              <AppLaunchComplete />
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            © 2024 Acme Inc. Todos los derechos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Términos de servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Privacidad
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Home;
