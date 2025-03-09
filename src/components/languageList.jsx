import { Dart, Javascript, Php, Python, Typescript } from "@/config/site";
import React from "react";

const languages = [<Python />, <Javascript />, <Php/>, <Dart/>, <Typescript/>];


export default function LanguageList() {
  console.log(languages);
  return (
    <>
      {languages.map((component, index) => (
        <div key={index} className="mx-4"> {component} </div>
      ))}
      
    </>
  );
}
