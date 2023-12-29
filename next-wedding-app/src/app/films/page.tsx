"use client";

import Spacer from "@/components/ui/Spacer";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Flims() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFlims = async () => {
      const response = await axios.get(" http://localhost:4000/films");
      const fetchedFilms = response.data;

      setFilms(fetchedFilms);
    };

    fetchFlims();
  }, []);

  useEffect(() => {
    console.log(films);
  }, [films]);

  return (
    <div className="w-full px-[10px]">
      <ul className="flex gap-[10px] justify-end">
        <li>All</li>
        <li>Wedding day</li>
        <li>Pre-wedding</li>
        <li>Baby</li>
      </ul>
      <Spacer y={40} />
      <section className="flex justify-center">{}</section>
    </div>
  );
}
