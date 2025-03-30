import React, { useEffect, useState, useRef } from "react";
import data from '../pages/data.json'
import { Link } from "react-router-dom";
// import Welcome from './Welcome';
// import Forbidden from './Forbidden';

export default function Home() {
  const myRef = useRef(null);

  return (
    <div>
      {/* {isMobile ? <Forbidden /> : <Welcome />} */}
      {/* <Welcome /> */}
        <div className="container md:px-24 pb-12">
          <p className="font-semibold text-3xl mb-1 mt-12">
            Twibbon Template
          </p>
          <p className="text-light opacity-50 text-sm mb-2">
            Hasil export menggunakan 1:1
          </p>
          <div
            className="grid grid-cols-1 gap-4 lg:grid-cols-4 mt-4"
            id="template"
            // ref={myRef}
          >
            {data.TwibbonProjects.map((twibbonExp, i) => {
              return (
                <div className="flex flex-col">
                  <Link
                    key={twibbonExp.id}
                    to={twibbonExp.link}
                    className="relative flex-shirk-0 w-auto justify-center overflow-y-hidden"
                  >
                    <img
                      src={twibbonExp.src}
                      className="w-full object-cover border"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}
