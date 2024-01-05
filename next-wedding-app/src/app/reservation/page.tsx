"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const ReservationPage = () => {
  const router = useRouter();

  const handlerNewReservationBtn = () => {
    router.push("/reservation/new");
  };

  return (
    <div className="w-full mx-[60px]">
      <section className="flex justify-end">
        <Button
          onClick={handlerNewReservationBtn}
          color="primary"
          variant="ghost"
          radius="full"
          className="px-5"
        >
          예약하기
        </Button>
      </section>
      <section>리스트</section>
    </div>
  );
};

export default ReservationPage;
