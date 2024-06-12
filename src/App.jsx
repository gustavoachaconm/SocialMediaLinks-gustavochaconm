import React, { useState, useEffect } from "react";
import Img from "./Img.jsx";
import {
  EnvelopeIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
import {
  X,
  Facebook,
  Instagram,
  Threads,
  Tiktok,
  Whatsapp,
} from "./SocialMediaIcons.jsx";

const saludos = [
  "¡Bienvenido!",
  "¡Welcome!",
  "¡Bienvenue!",
  "¡Willkommen!",
  "¡Benvenuto!",
];

const App = () => {
  const [saludoActual, setSaludoActual] = useState(saludos[0]);
  const [indiceSaludo, setIndiceSaludo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceSaludo((indiceActual) => {
        const nuevoIndice =
          indiceActual + 1 === saludos.length ? 0 : indiceActual + 1;
        setSaludoActual(saludos[nuevoIndice]);
        return nuevoIndice;
      });
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <nav className=" sticky top-0 flex w-full bg-green-600 p-3 pl-8 text-white">
        <p className=" font-lato text-xl font-light italic text-green-900 md:text-2xl">
          gustavochaconm.
        </p>
      </nav>
      <div className="flex flex-col justify-center bg-gray-50 text-green-900">
        <section className="mx-auto  p-9 pt-14">
          <div className="mb-6 flex items-center">
            <Img />
            <div className="ml-6">
              <h1 className=" mb-[-7px] mt-[-6px] font-lato text-xl font-medium text-green-900  md:text-2xl">
                Gustavo Chacon
              </h1>
              <a className=" font-lato text-[13px] font-light text-green-500 md:text-[17px] ">
                <p className="mb-2">@gustavoachaconm</p>
              </a>
              <div className="flex">
                <a
                  href="https://www.instagram.com/gustavoachaconm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.tiktok.com/@gustavoachaconm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tiktok />
                </a>
                <a
                  href="https://web.facebook.com/gustavoachaconm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://twitter.com/gustavoachaconm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X />
                </a>
              </div>
            </div>
          </div>
          <section className=" mb-6 flex justify-center text-center font-lato text-[13px] font-extralight ">
            <p className="mr-2">
              <span className="font-bold text-green-600">3+</span> años de
              experiencia
            </p>
            <p>
              <span className="font-bold text-green-600">59+</span> aplicaciones
              creadas
            </p>
          </section>
          <section className="mb-6 flex max-w-[560px] flex-col justify-center font-lato md:px-14">
            <p className=" mb-4 text-center">
              Ingeniero de software con experiencia sólida como desarrollador
              <span className=" font-semibold text-green-600">
                {" "}
                full-stack
              </span>{" "}
              freelance y{" "}
              <span className=" font-semibold text-green-600">CTO</span>.{" "}
              Especializado en liderar proyectos tecnológicos y desarrollar
              soluciones innovadoras de principio a fin.
            </p>
            <p className="mb-4 px-8 text-center text-sm">
              Aquí podrás encontrar todos mis enlaces de interés.
            </p>
            {/*
            <p className="text-center font-fira text-sm font-semibold uppercase">
              {saludoActual}
            </p>
            */}
          </section>
          <section className="text-green-600">
            <div className="mb-3 font-lato text-xl font-semibold">
              <p>Contacto</p>
            </div>
            <a
              className="group mb-4 flex rounded-xl bg-gray-200 p-2 hover:bg-green-600"
              href="https://api.whatsapp.com/message/4GG6JGWSDYCQF1?autoload=1&app_absent=0"
            >
              <div className="mr-4 flex items-center ">
                <ChatBubbleBottomCenterIcon className="h-8 fill-green-600 group-hover:fill-gray-200" />
              </div>
              <div className=" font-lato group-hover:text-gray-200">
                <h2 className=" font-semibold">Whatsapp</h2>
                <p className=" font-fira text-[12px] text-green-900 group-hover:text-gray-200">
                  +57 311 5158973
                </p>
              </div>
            </a>
            <a
              className="group flex rounded-xl bg-gray-200 p-2 hover:bg-green-600"
              href="mailto:contact@gustavoachaconm.com"
            >
              <div className="mr-4 flex items-center">
                <EnvelopeIcon className="h-8 fill-green-600 group-hover:fill-gray-200" />
              </div>
              <div className=" font-lato group-hover:text-gray-200">
                <h2 className=" font-semibold">Email</h2>
                <p className=" font-fira text-[12px] text-green-900 group-hover:text-gray-200">
                  contact@gustavoachaconm.com
                </p>
              </div>
            </a>
          </section>
          <footer className="flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <h3 className=" my-4 rotate-12 pb-8 text-center font-fira text-7xl font-medium text-green-600">
                g
              </h3>
              <span className=" font-lato text-[10px] font-extralight ">
                &copy;2022-{new Date().getFullYear()}{" "}
                <span className="text-green-600">
                  SocialMediaLinks by Gustavo Chacon
                </span>{" "}
                v2.
              </span>
              <span className="font-lato text-[10px]">
                BUILDING SOFTWARE WITH<span className="mx-1">❤️</span>TO THE
                WORLD.
              </span>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default App;
