import { Layout } from '../components/Layout'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'

export default function Home() {
  return (

      <Layout>
      <>

          <Head>
              <link
              rel="stylesheet"
              href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
              />
              <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />

          </Head>
<section className="relative pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrap">
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img
      alt="..."
      className="max-w-full rounded-lg shadow-lg"
      src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    />
  </div>
  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
          Demostracion de Aplicacion de NEXT JS con AUTH0 el manejo de Autentificacion, Registro, Recuperacion de Cuentas, Lista para conectarse a un Backend Server
          Para realizar Operaciones con base de datos --  Proteccion de Rutas -- El Menu contiene la Informacion del Usuario 

          <strong> Ventajas: 
            1.  Rapidez en el desarrollo de aplicaciones Web
            2.  Separacion de entornos de desarrollo
            3.  AUTH0 Proporciona Hooks para el manejo de Informacion  
          </strong>
      </p>
    <div className="md:pr-12">
      <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
        <i className="fas fa-rocket text-xl" />
      </div>
      <h3 className="text-3xl font-semibold">A growing company</h3>
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
        The extension comes with three pre-built pages to help you get
        started faster. You can change the text and images and you're good
        to go.
      </p>
      <ul className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                <i className="fas fa-fingerprint" />
              </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                Carefully crafted components
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                <i className="fab fa-html5" />
              </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Amazing page examples</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                <i className="far fa-paper-plane" />
              </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Dynamic components</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<footer className="relative  pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with{" "}
          <a
            href="https://www.creative-tim.com/product/notus-js"
            className="text-blueGray-500 hover:text-gray-800"
            target="_blank"
          >
            NEXT JS 
          </a>{" "}
          by{" "}
          <a
            href="https://www.creative-tim.com"
            className="text-blueGray-500 hover:text-blueGray-800"
            target="_blank"
          >
            {" "}
           Kach Vidal 
          </a>
          .
        </div>
      </div>
    </div>
  </div>
</footer>
</section>
</>

    </Layout>
  )
}

export const getServerSideProps = withPageAuthRequired();