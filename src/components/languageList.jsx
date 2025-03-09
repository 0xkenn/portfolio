import { Dart, Javascript, Php, Postgre, Python, Typescript } from "@/config/site";
import React from "react";

const languages = [<Python />, <Javascript />, <Php/>, <Dart/>, <Typescript/>];
const databases = [<Postgre/>];


 const LanguageList = () => {
  return (
    <>
      {languages.map((component, index) => (
       <div key={index} className="w-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mx-4 md:mx-4">
       {component}
     </div>
        ))}
      
    </>
  );
}

const DbList = () => {
  
  return (
    <>
    {databases.map((component, index) => {
      <div key={index} className="mx-4 h-4 w-4"> {component} </div>
    })}
    </>
  )
}

export { LanguageList, DbList };