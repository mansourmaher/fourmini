import React from "react";
import CourseCard from "./_explorecomponents/CourseCard";

import logo from "../../images/logo2.webp";
import Image from "next/image";
import backgroundFaqs from "@/app/images/background-faqs.jpg";
import AvatarGroup from "@/app/ui-components/avatarsgroup";
import { Button } from "@/app/_landingPageComponents/Button";
import LearnSectionheaders from "@/app/(learn)/_learn_compoenets/learnsections";

const courses = [
  {
    id: "1",
    title: "React for Beginners",
    description:
      "Learn React from scratch with this course for beginners and start your career as a React developer.",
    category: "Web Development",
    price: 100,
    chapterLenght: 10,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",
    avg: 4.5,
    totalReviews: 120,
    existingpurchase: true,
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    description:
      "Master advanced JavaScript concepts to build complex web applications with ease.",
    category: "Web Development",
    price: 120,
    chapterLenght: 15,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.7,
    totalReviews: 95,
    existingpurchase: false,
  },
  {
    id: "3",
    title: "Full-Stack Web Development",
    description:
      "Become a full-stack developer by learning both front-end and back-end technologies.",
    category: "Web Development",
    price: 150,
    chapterLenght: 20,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.8,
    totalReviews: 200,
    existingpurchase: true,
  },
  {
    id: "4",
    title: "Mobile App Development with Flutter",
    description:
      "Build cross-platform mobile applications using Flutter and Dart.",
    category: "Mobile Development",
    price: 130,
    chapterLenght: 12,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.6,
    totalReviews: 85,
    existingpurchase: false,
  },
  {
    id: "5",
    title: "Data Science for Beginners",
    description:
      "Learn the fundamentals of data science, including Python, machine learning, and data visualization.",
    category: "Data Science",
    price: 140,
    chapterLenght: 18,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.9,
    totalReviews: 150,
    existingpurchase: true,
  },
  {
    id: "6",
    title: "UI/UX Design Principles",
    description:
      "Understand the core principles of user interface and user experience design.",
    category: "Design",
    price: 110,
    chapterLenght: 8,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.4,
    totalReviews: 60,
    existingpurchase: false,
  },
  {
    id: "7",
    title: "DevOps Essentials",
    description:
      "Learn the essentials of DevOps and how to implement CI/CD pipelines.",
    category: "DevOps",
    price: 160,
    chapterLenght: 14,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.7,
    totalReviews: 100,
    existingpurchase: true,
  },
  {
    id: "8",
    title: "Python for Data Analysis",
    description:
      "Analyze and visualize data using Python libraries like Pandas, NumPy, and Matplotlib.",
    category:
      "Data Science Data ScienceData ScienceData ScienceData ScienceData Science",
    price: 135,
    chapterLenght: 12,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.8,
    totalReviews: 90,
    existingpurchase: true,
  },
  {
    id: "9",
    title: "Machine Learning with TensorFlow",
    description: "Learn machine learning and neural networks using TensorFlow.",
    category: "AI & Machine Learning",
    price: 170,
    chapterLenght: 20,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.9,
    totalReviews: 140,
    existingpurchase: false,
  },
  {
    id: "10",
    title: "Cloud Computing with AWS",
    description:
      "Understand the fundamentals of cloud computing and AWS services.",
    category: "Cloud Computing",
    price: 155,
    chapterLenght: 16,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.7,
    totalReviews: 110,
    existingpurchase: true,
  },
  {
    id: "11",
    title: "Cybersecurity Basics",
    description:
      "Learn the basics of cybersecurity, including network security, cryptography, and ethical hacking.",
    category: "Cybersecurity",
    price: 125,
    chapterLenght: 9,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.6,
    totalReviews: 75,
    existingpurchase: false,
  },
  {
    id: "12",
    title: "Blockchain Development",
    description:
      "Dive into blockchain development and smart contracts using Solidity and Ethereum.",
    category: "Blockchain",
    price: 180,
    chapterLenght: 22,
    imageUrl:
      "https://utfs.io/f/38d1df14-a9d0-418c-9e04-7009a65aecbc-pfwv33.jpg",

    avg: 4.8,
    totalReviews: 160,
    existingpurchase: true,
  },
];

function ExplorePage() {
  return (
    <div className="space-y-8">
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
            <p>Instructor: maher</p>
          </div>

          <div className="flex gap-x-4 items-center">
            <Button />
            <p>
              <span className="font-bold">+28000</span> students enrolled
            </p>
          </div>

          {/* New section for Enroll Options */}
          <div className="mt-4 flex flex-col space-y-3">
            <div className="p-4 border rounded-md bg-gray-100">
              <p className="text-sm font-semibold">Promotion:</p>
              <p className="text-sm text-gray-700">
                Enroll in this course and share your referral link to get 15%
                off the price. If your friend enrolls using your link, you ll
                also receive 15% off!
              </p>
              <div className="mt-2">
                <button className="px-3 py-1.5 bg-green-500 text-white text-sm rounded-md hover:bg-green-600">
                  Copy Referral Link
                </button>
              </div>
            </div>
          </div>

          {/* Option for using a referral link */}
          <div className="mt-4 p-4 border rounded-md bg-gray-100">
            <p className="text-sm font-semibold">Invited by a Friend?</p>
            <p className="text-sm text-gray-700">
              Use your friend s referral link to get 15% off your enrollment!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center -translate-y-18">
        <LearnSectionheaders />
      </div>

      <div className="container mx-auto p-8">
        <p className="text-2xl font-semibold">
          Based on your preferences, we recommend tailored courses just for you.
        </p>
        <p className="text-sm text-gray-700 my-4">
          Our personalized recommendations are carefully selected to help you
          grow in your areas of interest. We analyze your learning patterns and
          preferences to curate a unique selection of courses that align with
          your goals. Whether you re a beginner looking to explore new topics or
          an experienced learner advancing your expertise, our system ensures
          you get the most relevant and impactful content.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6  ">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
