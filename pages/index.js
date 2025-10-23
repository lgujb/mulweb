import { useState } from 'react'
import Hero from '../components/Hero'
import Segmento from '../components/Segmento'
import CatalogoLed from '../components/CatalogoLed'
import CatalogoPostes from '../components/CatalogoPostes'
import CatalogoSolar from '../components/CatalogoSolar'
import Instalaciones from '../components/Instalaciones'
import Cotiza from '../components/Cotiza'
import QuienesSomos from '../components/QuienesSomos'
import Mapa from '../components/Mapa'
import Footer from '../components/Footer'

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState(null)

  const handleBack = () => setSeccionActiva(null)

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero principal */}
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {/* Segmentos principales */}
      {!seccionActiva && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <Segmento 
            titulo="LED URBANO" 
            imagen="/img/ledurbano.jpg" 
            onClick={() => setSeccionActiva('led')}
          />
          <Segmento 
            titulo="POSTES COLONIALES" 
            imagen="/img/postes.jpg" 
            onClick={() => setSeccionActiva('postes')}
          />
          <Segmento 
            titulo="SOLAR INTELIGENTE" 
            imagen="/img/solar.jpg" 
            onClick={() => setSeccionActiva('solar')}
          />
          <Segmento 
            titulo="INSTALACIONES RECIENTES" 
            imagen="/img/instalaciones.jpg" 
            onClick={() => setSeccionActiva('instalaciones')}
          />
        </section>
      )}

      {/* Render condicional */}
      {seccionActiva === 'led' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoLed />
        </div>
      )}

      {seccionActiva === 'postes' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoPostes />
        </div>
      )}

      {seccionActiva === 'solar' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoSolar />
        </div>
      )}

      {seccionActiva === 'instalaciones' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <Instalaciones />
        </div>
      )}

      {seccionActiva === 'cotiza' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <Cotiza />
        </div>
      )}

      {seccionActiva === 'conocenos' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <QuienesSomos />
        </div>
      )}

      {seccionActiva === 'mapa' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <Mapa />
        </div>
      )}

      {/* Footer siempre visible */}
      <Footer />
    </div>
  )
      }
