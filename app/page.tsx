import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Download, Info, MapPin, MessageSquare, PawPrint, Shield } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold text-emerald-700">Adopta Huellitas</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              Inicio
            </Link>
            <Link href="#beneficios" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              Beneficios
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              Cómo Funciona
            </Link>
            <Link href="#testimonios" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              Testimonios
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button
              variant="outline"
              className="hidden md:flex border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            >
              Iniciar Sesión
            </Button> */}
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">Descargar App</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24"
        >
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="space-y-6 md:w-1/2">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
                Encuentra el hogar perfecto para cada mascota
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-emerald-800">
                Adopta Huellitas
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Conectamos a personas amorosas con mascotas que necesitan un hogar. Nuestra aplicación facilita el
                proceso de adopción, haciendo que sea simple y gratificante encontrar a tu compañero perfecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Download className="mr-2 h-4 w-4" /> Descargar App
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
                  <Info className="mr-2 h-4 w-4" /> Conocer Más
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Persona adoptando una mascota"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  <span className="font-medium text-gray-800">+1 Adopciones exitosas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-emerald-100 p-3 mb-4">
                  <PawPrint className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">+10</h3>
                <p className="text-sm text-gray-500">Mascotas Disponibles</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-4">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">+1</h3>
                <p className="text-sm text-gray-500">Adopciones Exitosas</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-100 p-3 mb-4">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">+2</h3>
                <p className="text-sm text-gray-500">Refugios Asociados</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-emerald-100 p-3 mb-4">
                  <MapPin className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">+10</h3>
                <p className="text-sm text-gray-500">Ciudades</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800">
                Beneficios de Adoptar
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Adoptar una mascota no solo cambia su vida, sino también la tuya. Descubre por qué adoptar es la mejor
                opción.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-emerald-100 p-3 w-fit mb-4">
                  <Heart className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Salvas una Vida</h3>
                <p className="text-gray-600">
                  Al adoptar, le das una segunda oportunidad a un animal que necesita un hogar, salvándolo de
                  situaciones difíciles.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-amber-100 p-3 w-fit mb-4">
                  <MessageSquare className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-2">Compañía Incondicional</h3>
                <p className="text-gray-600">
                  Las mascotas adoptadas suelen desarrollar un vínculo especial con sus dueños, ofreciendo amor y
                  lealtad incondicionales.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 p-3 w-fit mb-4">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">Apoyas a Refugios</h3>
                <p className="text-gray-600">
                  Tu adopción ayuda a los refugios a continuar su labor de rescate y cuidado de animales abandonados o
                  maltratados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800">
                ¿Cómo Funciona?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Adopta Huellitas hace que el proceso de adopción sea simple, seguro y gratificante.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-emerald-100 p-4 mb-4 relative">
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    1
                  </span>
                  <PawPrint className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Explora Perfiles</h3>
                <p className="text-gray-600">
                  Navega por perfiles de mascotas disponibles para adopción, filtrando por tipo, tamaño, edad y
                  ubicación.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-4 mb-4 relative">
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    2
                  </span>
                  <MessageSquare className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-2">Contacta al Refugio</h3>
                <p className="text-gray-600">
                  Comunícate directamente con el refugio o protectora a través de nuestra app para conocer más sobre la
                  mascota.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-100 p-4 mb-4 relative">
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    3
                  </span>
                  <Heart className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">Completa la Adopción</h3>
                <p className="text-gray-600">
                  Sigue el proceso guiado de adopción, recibe consejos personalizados y da la bienvenida a tu nuevo
                  amigo.
                </p>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-4">Descarga la App</h3>
                    <p className="text-gray-600 mb-6">
                      Disponible para Android. Comienza tu viaje de adopción hoy mismo y encuentra a tu compañero
                      perfecto.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                        <Download className="mr-2 h-4 w-4" /> App Store
                      </Button>
                      <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white">
                        <Download className="mr-2 h-4 w-4" /> Google Play
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="App Adopta Huellitas"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800">
                Historias de Éxito
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Conoce las experiencias de quienes ya han encontrado a su mascota perfecta a través de Adopta Huellitas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Usuario"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">María González</h4>
                    <p className="text-sm text-gray-500">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Gracias a Adopta Huellitas encontré a Luna, mi compañera perfecta. El proceso fue muy sencillo y el
                  refugio me ayudó en todo momento. Ahora no puedo imaginar mi vida sin ella."
                </p>
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-2 rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Mascota adoptada"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex">
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Usuario"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Carlos Rodríguez</h4>
                    <p className="text-sm text-gray-500">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Adoptar a Max ha sido una de las mejores decisiones de mi vida. La app me permitió encontrar
                  exactamente el tipo de perro que buscaba y el proceso fue muy transparente."
                </p>
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-2 rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Mascota adoptada"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex">
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Usuario"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ana Martínez</h4>
                    <p className="text-sm text-gray-500">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Adopté a Mía, una gatita de 2 años, y ha transformado mi hogar. La aplicación me conectó con el
                  refugio perfecto y me guió durante todo el proceso de adopción."
                </p>
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-2 rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Mascota adoptada"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex">
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-emerald-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Cambia una Vida Hoy</h2>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto mb-8">
              Miles de mascotas están esperando encontrar un hogar lleno de amor. Descarga nuestra app y comienza tu
              viaje de adopción.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Download className="mr-2 h-4 w-4" /> Descargar App
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-600">
                <Info className="mr-2 h-4 w-4" /> Conocer Más
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-800 text-emerald-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="h-6 w-6 text-amber-500" />
                <span className="text-xl font-bold text-white">Adopta Huellitas</span>
              </div>
              <p className="text-sm text-emerald-200 mb-4">
                Conectando corazones humanos con huellitas que necesitan amor.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-emerald-200 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-emerald-200 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-emerald-200 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-emerald-200 hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#beneficios" className="text-emerald-200 hover:text-white">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#como-funciona" className="text-emerald-200 hover:text-white">
                    Cómo Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="text-emerald-200 hover:text-white">
                    Testimonios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-emerald-200 hover:text-white">
                    Guía de Adopción
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-200 hover:text-white">
                    Cuidados Básicos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-200 hover:text-white">
                    Refugios Asociados
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-200 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span className="text-emerald-200">Buenos Aires, Argentina</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-emerald-200">info@adoptahuellitas.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-emerald-200">+54 11 1234-5678</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-600 mt-8 pt-8 text-center">
            <p className="text-sm text-emerald-300">
              &copy; {new Date().getFullYear()} Adopta Huellitas. Todos los derechos reservados.
              Desarrollado con ♥ por <Link href="https://www.linkedin.com/in/imanol-valenzuela-eguez/" target="_blank" className="text-emerald-200 hover:text-white">
                    ImaaValenzuela
                  </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
