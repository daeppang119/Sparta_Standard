import React from "react";

import type { FilmType } from "@/types";

type Props = { params: { slug: string } };

export default function TestFilmsDetilPage({ params }: Props) {
  const id = { params };

  return <div>page</div>;
}

export async function generateStaticParams(test: any) {
  // 가능한 모든 films 정보를 detail 페이지 4개를 미리 만들어 줌
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films`);
  const films: FilmType[] = await response.json();

  return films.map((film) => ({
    slug: String(film.id),
  }));
}
