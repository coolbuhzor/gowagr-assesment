import Image from "next/image";
import { PlayerCardSlider } from "@/components/player-card";
import { fetchPlayerDetails } from "@/services/api/player-details";

export const SectionThree = async () => {
  try {
    const response = await fetchPlayerDetails();
    const shotsData = response.props;

    return (
      <section className={"relative flex flex-col gap-10 "}>
        <div className={"bg-custom-pattern bg-bottom -mt-16 py-20"}>
          <div className={"flex flex-col gap-y-4 w-10/12 mx-auto  "}>
            <h1
              className={
                "text-[#D2D4D7] uppercase font-[900] text-[50px] xl:text-[70px] font-anek leading-[2.5rem] md:leading-[2rem] xl:leading-[3rem]"
              }
            >
              Numerours <br /> PLAYER{" "}
              <span className={"text-secondary lowercase font-gloria"}>
                projections
              </span>
            </h1>
            <p className={"text-[#D2D4D7] font-[500] text-sm xl:text-lg"}>
              Available player stats categories for you to pick from:
              <br /> Shots, goals, assists, saves, passes, and more.
            </p>
          </div>
          <Image
            src={"/assets/svg/section-four/purple-flower.svg"}
            alt={"purple flower"}
            className={"absolute -top-[12%] left-[10%] z-[99] animate-slowSpin"}
            width={60}
            height={60}
          />
        </div>

        <div className={"flex flex-col gap-y-4 py-10"}>
          <PlayerCardSlider data={shotsData} direction={"left"} />
          <PlayerCardSlider data={shotsData} direction={"right"} />
          <PlayerCardSlider data={shotsData} direction={"left"} />
          <PlayerCardSlider data={shotsData} direction={"right"} />
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return (
      <section className={"relative flex flex-col gap-10 "}>
        <div className="text-center py-4 text-white">
          Failed to load player data. Please try again later.
        </div>
      </section>
    );
  }
};
