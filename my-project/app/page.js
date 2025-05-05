"use client";
import { GiFlowerEmblem } from "react-icons/gi";
import { MdCamera } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Image
        src="/about/sunflower.gif"
        alt="Sunflower"
        width={400}
        height={400}
        className="
          absolute
          top-88
          right-0
          z-0
          /* We rely on this class for the 'w-[400px] h-auto' effect */
        "
        style={{ width: "400px", height: "auto" }}
      />
      <Image
        src="/about/sunflower.gif"
        alt="Sunflower"
        width={400}
        height={400}
        className="
          absolute
          top-52
          right-28
          z-0
        "
        style={{ width: "400px", height: "auto" }}
      />
      <Image
        src="/about/sunflower.gif"
        alt="Sunflower"
        width={400}
        height={400}
        className="
          absolute
          top-10
          right-2
          z-0
        "
        style={{ width: "400px", height: "auto" }}
      />
      <Image
        src="/about/twoflower.PNG"
        alt="Twoflower"
        width={300}
        height={300}
        className="
          absolute
          bottom-8
          left-10
          z-0
        "
        style={{ width: "300px", height: "auto" }}
      />
      <Image
        src="/about/hibiscus.png"
        alt="Hibiscus"
        width={200}
        height={200}
        className="
          absolute
          bottom-72
          left-4
          z-0
        "
        style={{ width: "200px", height: "auto" }}
      />

      <div className="relative z-10 px-80 pt-24 font-nav min-h-screen">
        <div className="flex flex-row items-stretch justify-between">
          <div className="max-w-md flex flex-col justify-between">
            <div>
              <h1 className="text-[#9e8bb8] text-2xl italic font-bold mb-6 hover:text-[#d1d1d1] duration-200">
                likhitha Koppula
              </h1>

              <ul className="space-y-2">
                <li
                  className="
                    flex 
                    items-center 
                    gap-x-2 
                    group 
                    transition-all 
                    duration-300 
                    hover:translate-x-1
                  "
                >
                  <GiFlowerEmblem
                    className="
                      transform 
                      transition-all 
                      duration-300 
                      text-[#bfc2c1] 
                      group-hover:rotate-16
                      group-hover:text-[#d3d3d3]
                    "
                  />
                  <span>
                    first year{" "}
                    <a
                      href="https://uwaterloo.ca/systems-design-engineering/"
                      className="relative inline-block group pb-1"
                    >
                      syde @ uwaterloo
                      <span
                        className="
                          absolute
                          left-0
                          bottom-0
                          h-[2px]
                          w-full
                          bg-[#3a3939]
                          z-10
                        "
                      />
                      <span
                        className="
                          absolute 
                          left-0 
                          bottom-0 
                          h-[2px] 
                          w-full 
                          z-20
                          origin-left
                          scale-x-0 
                          transition-all 
                          duration-500 
                          ease-out 
                          group-hover:scale-x-100 
                          group-hover:bg-gradient-to-r 
                          group-hover:from-[#4f1384] 
                          group-hover:to-[#4f1384]
                        "
                      />
                    </a>
                    <Image
                      src="/about/waterloo.jpg"
                      alt="waterloo"
                      width={28}
                      height={26}
                      className="inline-block object-contain relative bottom-[1.5px] ml-2"
                    />
                  </span>
                </li>

                <li
                  className="
                    flex 
                    items-center 
                    gap-x-2 
                    group 
                    transition-all 
                    duration-300 
                    hover:translate-x-1
                  "
                >
                  <GiFlowerEmblem
                    className="
                      transform 
                      transition-all 
                      duration-300 
                      text-[#bfc2c1] 
                      group-hover:rotate-16
                      group-hover:text-[#d3d3d3]
                    "
                  />
                  <span>
                    currently - data engineer @{" "}
                    <a
                      href="https://www.definityfinancial.com/English/about-us/our-brands/default.aspx"
                      className="relative inline-block group pb-1"
                    >
                      definity
                      <span
                        className="
                          absolute
                          left-0
                          bottom-0
                          h-[2px]
                          w-full
                          bg-[#3a3939]
                          z-10
                        "
                      />
                      <span
                        className="
                          absolute 
                          left-0 
                          bottom-0 
                          h-[2px] 
                          w-full 
                          z-20
                          origin-left
                          scale-x-0 
                          transition-all 
                          duration-500 
                          ease-out 
                          group-hover:scale-x-100 
                          group-hover:bg-gradient-to-r 
                          group-hover:from-[#2b7fa6] 
                          group-hover:to-[#2b7fa6]
                        "
                      />
                    </a>
                    <Image
                      src="/about/definity.png"
                      alt="definity"
                      width={14}
                      height={14}
                      className="inline-block object-contain relative bottom-[2.4px] ml-2"
                    />
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-10 mb-6 relative inline-block group">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  px-16
                  py-4
                  mb-2
                  text-white
                  bg-[#265570]
                  rounded-r-lg
                  border-l-4
                  border-[#1c2d37]
                  hover:bg-[#415965]
                  transition-colors
                  duration-1000
                "
              >
                - - - - resume
              </a>

              <Image
                src="/about/butterfly.gif"
                alt="Animated butterfly"
                width={16}
                height={10}
                className="
                  absolute
                  bottom-12
                  right-18
                  pointer-events-none
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-200
                  group-hover:scale-100
                  z-0
                "
                style={{ width: "40px", height: "36px" }}
              />
            </div>

            <p className="mt-2 max-w-xs">
              an engineering student who spends their time exploring various tech
              and documenting special moments
            </p>
            <p className="mt-4 max-w-xs">
              this portfolio is an archive of everything I have made so far
            </p>
            <p className="mt-4 max-w-xs">
              look around and feel free to reach out
            </p>
          </div>

          <div>
            <Image
              src="/about/profile.jpg"
              alt="Profile"
              width={288} 
              height={288}
              className="
                w-72
                h-auto
                object-scale-down
                rounded-sm
                shadow-[8px_-8px_20px_0_#0b0b0b]
                hover:shadow-[8px_-8px_20px_0_#212121]
                transition
                duration-400
                ease-in-out
                pb-2
              "
            />

            <div className="mt-4">
              <h2 className="font-semibold mb-4">syde quests </h2>
              <ul className="space-y-2 list-none pl-8">
                <li
                  className="
                    flex 
                    items-center 
                    gap-1 
                    group
                    transition-transform
                    duration-300
                    hover:translate-x-1
                  "
                >
                  <IoMdArrowDropright />
                  <a
                    href="https://www.instagram.com/kahtihkil.jpg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    memory records
                    <MdCamera
                      className="
                        text-[#bfc2c1]
                        transform
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                        group-hover:text-[#cda4f3]
                      "
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
