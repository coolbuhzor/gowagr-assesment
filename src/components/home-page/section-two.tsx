import Image from "next/image";
import Slider from "@/components/marquee-slider";

const iconData = [
  {
    icon: "/assets/svg/ball.svg",
    rounded: "rounded-lg",
    className:
      "bg-[#FD89ED] w-[73.1px] h-[64.61px] rounded-lg border grid place-items-center border-[#141B23]",
    alt: "ball icon",
    height: 49.01,
    width: 47.58,
  },
  {
    icon: "/assets/svg/gloves.svg",
    rounded: "rounded-[56.14px]",
    className:
      "bg-[#6DE0E7] w-[72.86px] h-[67.66px] rounded-[56.14px] border grid place-items-center border-[#141B23]",
    alt: "glove icon",
    height: 44.19,
    width: 43.63,
  },
  {
    icon: "/assets/svg/boot.svg",
    rounded: "rounded-lg",
    alt: "boot icon",
    className:
      "bg-[#88C80C] w-[73.1px] h-[64.61px] rounded-lg border grid place-items-center border-[#141B23]",
    height: 48.25,
    width: 42.98,
  },
  {
    icon: "/assets/svg/target.svg",
    rounded: "rounded-lg",
    alt: "target icon",
    className:
      "bg-[#F9CC00] w-[73.1px] h-[64.61px] rounded-lg border grid place-items-center border-[#141B23]",
    height: 42.86,
    width: 42.85,
  },
];

export const SectionTwo = () => {
  return (
    <>
      <section className={"relative"}>
        <div
          className={
            "clip-slant lg:custom-lg xl:custom-xl 2xl:custom-2xl bg-section-two-bg  bg-no-repeat bg-cover z-50 min-h-[120vh] h-[150vh] relative justify-center flex flex-col"
          }
        >
          <div className={"flex flex-col gap-y-14"}>
            <div className={"flex flex-col gap-y-4"}>
              <div className={"flex gap-x-5 w-fit justify-center mx-auto"}>
                {iconData.map((item, index) => (
                  <IconBox
                    key={index}
                    icon={item.icon}
                    rounded={item.rounded}
                    className={item.className}
                    alt={item.alt}
                    height={item.height}
                    width={item.width}
                  />
                ))}
              </div>
              <h1 className="font-[900] font-anek text-[50px] xl:text-[70px] 2xl:text-[80px] text-center text-primary leading-[2.5rem] xl:leading-[4rem] tracking-tighter">
                WIN UPTO 100X
                <br />
                YOUR CASH. JUST PICK
                <br />
                MORE OR LESS
              </h1>
            </div>
            <div className={"w-[50%] hidden md:hidden lg:block mx-auto"}>
              <Image
                src={"/assets/png/steps.png"}
                alt={"steps "}
                className={"w-full !relative"}
                fill
              />
            </div>
            <div className={"w-[50%] lg:hidden mx-auto"}>
              <Image
                src={"/assets/png/mobilesteps.png"}
                alt={"steps "}
                className={"!w-[80%] !relative"}
                fill
              />
            </div>
          </div>

          <div className="absolute bg-primary bottom-8 lg:bottom-12 left-0 right-0 transform rotate-[2.3deg]">
            <Slider />
          </div>
        </div>
        <Image
          src={"/assets/svg/yellow-item.svg"}
          alt={"image "}
          className={
            "absolute h-24 sm:h-20 lg:h-24 xl:h-24 2xl:h-auto right-[14%] md:right-[14%] lg:right-[11%] xl:right-[18%] 2xl:right-[15%] -top-5  xl:-top-10 md:-top-10 lg:-top-10 z-50 pt-5 animate-fly"
          }
          width={100}
          height={100}
        />
      </section>
    </>
  );
};

const IconBox = ({
  icon,
  alt,
  className,
  height,
  width,
}: {
  icon: string;
  alt: string;
  rounded: string;
  className: string;
  height: number;
  width: number;
}) => {
  return (
    <div className={`${className}`}>
      <Image src={icon} alt={alt} width={width} height={height} />
    </div>
  );
};
