const Layout = () => {
  return (
    <>
      <main className="flex h-screen">
        {/* Columna Izquierda */}
        <section className="bg-gray-200 p-4 w-1/6 flex-shrink-0">
          <h2 className="text-lg font-semibold">Columna Izquierda</h2>
          <p>Contenido de la columna izquierda.</p>
        </section>

        {/* Columna Centro */}
        <section className="bg-gray-300 p-4 w-1/2 flex-shrink-0">
          <h2 className="text-lg font-semibold">Columna Centro</h2>
          <p>Contenido de la columna centro.</p>
        </section>

        {/* Columna Derecha */}
        <section className="bg-gray-400 p-4 w-1/2 flex-shrink-0">
          <h2 className="text-lg font-semibold">Columna Derecha</h2>
          <p>Contenido de la columna derecha.</p>
        </section>
      </main>
    </>
  );
};

export default Layout;
