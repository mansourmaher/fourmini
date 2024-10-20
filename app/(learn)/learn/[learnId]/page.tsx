import { Container } from "@/app/_landingPageComponents/Container";
import Breadcrumb from "@/app/ui-components/breadcrumbs";
import Image from "next/image";
import React from "react";

import backgroundFaqs from "@/app/images/background-faqs.jpg";
import AvatarGroup from "@/app/ui-components/avatarsgroup";
import Button from "@/app/ui-components/button";
import { BookOpenIcon } from "@heroicons/react/20/solid";
import LearnSectionheaders from "../../_learn_compoenets/learnsections";
import Recemondation from "../../_learn_compoenets/recemondation";
import WahtLearn from "../../_learn_compoenets/whatlearn";
import CourseModule from "../../_learn_compoenets/courseModule";
import RecemondedBlock from "../../_learn_compoenets/recomendedBlock";
import CategoryCompoent from "../../_learn_compoenets/ReveiwsCompoent";

const staticDtatoDisplay = {
  title: "Learning how to youth in the community",
  avatars: [
    {
      name: "John Doe",
      src: "https://randomuser.me/api/portraits",
    },
    {
      name: "Jane Doe",
      src: "https://randomuser.me/api/portraits",
    },
    {
      name: "John Doe",
      src: "https://randomuser.me/api/portraits",
    },
    {
      name: "Jane Doe",
      src: "https://randomuser.me/api/portraits",
    },
  ],
  enrolled: "80,000",
  modules: "3",
  reviews: "2859",
  average: "4.8",
  level: "Beginner level",
  leveldesc: "No prior expert needed",
  likes: "98%",
};

function LearnPage() {
  return (
    <div className="space-y-4">
      {/* <div className="container mx-auto">
        <Breadcrumb />
      </div> */}

      <div className="relative">
        <Image
          src={backgroundFaqs}
          alt="Learn Hero"
          loading="lazy"
          className="object-cover h-[70vh] w-screen"
        />
        <div className="absolute inset-0 flex flex-col items-center text-center container mx-auto place-content-center space-y-4 md:items-center lg:items-start md:text-left">
          <h1 className="text-4xl font-extrabold">
            Learn More About Our Platform
          </h1>
          <div className="flex gap-x-2 items-center">
            <AvatarGroup />
            <p>Instructor: {staticDtatoDisplay.avatars[0].name}</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <Button />
            <p>
              <span className="font-bold">{staticDtatoDisplay.enrolled}</span>{" "}
              students enrolled
            </p>
          </div>
        </div>
      </div>

      {/* Card component */}
      <div className="relative w-11/12 -translate-y-24 bg-white rounded-lg shadow-lg lg:p-10 mx-auto -mt-[90px]">
        <div className="grid grid-cols-1 place-content-center sm:grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="space-y-2 border-r border-gray-300 pr-4">
            <div className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-indigo-500 mr-2" />
              <p className="text-2xl font-bold">3 modules</p>
            </div>
            <p className="text-sm text-slate-500">
              Gain insight into a topic and learn the fundamentals.
            </p>
          </div>{" "}
          <div className="space-y-2 border-r border-gray-300 pr-4">
            <div className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-indigo-500 mr-2" />
              <p className="text-2xl font-bold">3 modules</p>
            </div>
            <p className="text-sm text-slate-500">
              Gain insight into a topic and learn the fundamentals.
            </p>
          </div>{" "}
          <div className="space-y-2 border-r border-gray-300 pr-4">
            <div className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-indigo-500 mr-2" />
              <p className="text-2xl font-bold">3 modules</p>
            </div>
            <p className="text-sm text-slate-500">
              Gain insight into a topic and learn the fundamentals.
            </p>
          </div>{" "}
          <div className="space-y-2 border-r border-gray-300 pr-4">
            <div className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-indigo-500 mr-2" />
              <p className="text-2xl font-bold">3 modules</p>
            </div>
            <p className="text-sm text-slate-500">
              Gain insight into a topic and learn the fundamentals.
            </p>
          </div>
          {/* Repeat similar sections for other columns */}
        </div>
      </div>

      {/* Sections below the card */}
      <div className="transform -translate-y-24 ">
        <div className="mt-10  container mx-auto">
          <LearnSectionheaders />
        </div>
        <div className="mt-10 container mx-auto">
          <WahtLearn />
        </div>
        <div className="mt-10 container mx-auto">
          <CourseModule />
        </div>
        <div className="mt-10 container mx-auto">
          <RecemondedBlock />
        </div>
        <div className="mt-10 container mx-auto">
          <CategoryCompoent />
        </div>
      </div>
    </div>
  );
}

export default LearnPage;