import FlyoutMenu from "@/app/ui-components/floutMenu";
import Image from "next/image";
import logo from "../../images/logo2.webp";

function CourseModule() {
  return (
    <section id="course-module" className="bg-white border-b-2 p-4">
      <div className="space-y-4 grid lg:grid-cols-6 items-start ">
        <div className="col-span-4 space-y-4">
          <h1 className="text-2xl font-extrabold">
            There are 3 modules in this course
          </h1>
          <p className="text-sm text-slate-500 ">
            Based on one of the most popular open online courses in the world,
            this course gives you easy access to the learning techniques used by
            experts in art, music, literature, math, science, sports, and many
            other disciplines. No matter what your current skill level, using
            these approaches can help you master new topics, change your
            thinking and improve your life
          </p>
          <div className="container mx-auto border rounded-lg">
            <div className="grid grid-cols-1 gap-4">
              {/* <div className="flex justify-between items-center p-6 ">
                <div className="flex  gap-2 flex-col ">
                  <p className="text-lg font-semibold">
                    Waht is this course about ?
                  </p>
                  <p className="text-sm text-slate-500">
                    Module 1 : 1 hour to complete
                  </p>
                </div>
                <div className="flex gap-x-1 items-center font-semibold text-blue-500">
                  <p className="">View Details</p>

                  <BiDownArrow />
                </div>
              </div> */}
              <FlyoutMenu />
              <FlyoutMenu />
              <FlyoutMenu />
            </div>
          </div>
        </div>
        <div className="hidden sm:hidden md:hidden lg:col-span-2 lg:grid lg:place-content-center">
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500  [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div
                className="absolute -inset-y-px left-1/2 -z-10 ml-10  skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                aria-hidden="true"
              />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto  md:mx-0 ">
                  <div className=" overflow-hidden rounded-tl-xl bg-gray-900">
                    <Image
                      src={logo}
                      alt="User"
                      className="object-cover"
                      width={400}
                    />
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseModule;
