export function HeaderBanner() {
  return (
    <header className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 border-b-2 border-amber-700 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl font-serif font-bold text-white tracking-wide drop-shadow-md">
            Jejum de Ester
          </h1>
          <p className="text-xs md:text-sm text-amber-50 mt-0.5 md:mt-1 font-light tracking-wider">
            Uma jornada de fé e transformação
          </p>
        </div>
      </div>
    </header>
  )
}
