import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'; // Importa desde 'swiper/modules'
import 'swiper/css'; // Estilos principales de Swiper
import 'swiper/css/navigation'; // Estilos de navegación
import 'swiper/css/pagination'; // Estilos de paginación
import CarrouselItem from './CarrouselItem';

export default function SwiperSlider() {
  return (
    <div className='absolute top-0 w-full'>
    <Swiper
      modules={[Pagination, Autoplay]} // Pasa los módulos aquí
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
    >
      <SwiperSlide>
        <CarrouselItem 
            title={"STOP THE BLEED"}
            topTitle={"stb"}    
            description={"Curso donde podrás identificar y reconocer el tipo de hemorragia potencialmente mortales para la vida de una persona y poder intervenir de manera efectiva"}
            url_img={"/StopTheBleed/BannerStopTheBleed.webp"}
        ></CarrouselItem>
      </SwiperSlide>
      <SwiperSlide>
          <CarrouselItem
            title={"Reanimación Cardiopulmonar"}
            topTitle={"rcp / bls"}
            description={"Aprende las técnicas esenciales de reanimación cardiopulmonar básica (RCP) para salvar vidas en situaciones de emergencia. Con nuestro curso práctico y accesible, estarás preparado para actuar con confianza y eficacia. ¡Inscríbete ahora y adquiere habilidades vitales para cualquier entorno!"}
            url_img={"/RCP/RCP3.webp"}
          >
          </CarrouselItem>
      </SwiperSlide>
      <SwiperSlide>
      <CarrouselItem 
        title={"Tactical Emergency Casualty Care"}
        topTitle={"TECC"}
        description={"Atención táctica a víctimas de combate, introduce técnicas basadas en evidencia para salvar vidas y estrategias para proporcionar la mejor atención del trauma en el campo de batalla."}
        url_img={"/TECC/BannerTecc.png"}
      />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}