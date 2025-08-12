import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

type props = {
  cast: any[];
};

function Cast({ cast }: props) {
  return (
    <div>
      {" "}
      {/* Cast Carousel */}
      <section className="py-4 text-white w-[100%] m-auto  mt-10">
        {/* <h2 className="text-2xl font-semibold mb-4">Cast</h2> */}
        {cast?.length > 0 ? (
          <Swiper
            spaceBetween={15}
            slidesPerView={"auto"}
            className="!overflow-auto no-scroll"
            // navigation={true}
          >
            {cast.map((member: any, index: number) => (
              <SwiperSlide
                key={index}
                className="!w-[120px] bg-[#111] rounded-lg text-center text-sm p-2"
              >
                <Image
                  src={
                    member.profile_path
                      ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                      : "/no-image.png"
                  }
                  alt={member.name}
                  width={100}
                  height={150}
                  className="rounded-lg mx-auto mb-2 object-cover h-[150px] w-[100px]"
                />
                <p className="font-semibold h-[20px] text-ellipsis overflow-hidden ">
                  {member.name}
                </p>
                <p className="text-xs h-[20px] text-ellipse overflow-hidden text-gray-400">
                  {member.character}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-sm text-gray-400">
            No cast information available.
          </p>
        )}
      </section>
    </div>
  );
}

export default Cast;
