"use client";

import { useState, useEffect } from "react";


export default function Principal() {
  const [datos, ponerDatos] = useState(null);

  useEffect(() => {
    async function llamarApi() {
      const peticion = await fetch("https://reqres.in/api/users?page=1");
      const respuesta = await peticion.json();
      ponerDatos(respuesta.data);

  
    }
    llamarApi();

  }, {});

  //console.log(datos);
  return (
    <u>
      {datos ? (
        datos.map((datos) => {
          return <Tarjeta datos={datos} />;
        })
      ) : (
        <p>
          Procesando...</p>

      )}
    </u>
  )
};


function Tarjeta(props) {
  return (
    <>
      {
        props.datos ? (
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4"></div>
            <div class="flex flex-col items-center pb-10">
              <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={props.datos.avatar}

              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {props.datos.first_name}
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {props.datos.email}
              </span>
            </div>
          </div>
        ) : (
          <p>Procesando</p>
        )}
    </>
  );
};
