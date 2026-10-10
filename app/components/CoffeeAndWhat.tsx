"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

async function fetchThaiMeals(signal: AbortSignal): Promise<Meal[]> {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai", {
    method: "GET",
    cache: "no-store",
    signal,
  });

  if (!response.ok) throw new Error("Unable to fetch a meal");

  const data = await response.json();
  if (!Array.isArray(data?.meals) || data.meals.length === 0) {
    throw new Error("Invalid meal data");
  }

  return data.meals.map((meal: Meal) => {
    if (typeof meal?.idMeal !== "string" || !meal.idMeal.trim() ||
        typeof meal?.strMeal !== "string" || !meal.strMeal.trim() ||
        typeof meal?.strMealThumb !== "string" || !meal.strMealThumb.trim()) {
      throw new Error("Invalid meal data");
    }

    const imageUrl = new URL(meal.strMealThumb);
    if (imageUrl.protocol !== "https:" || imageUrl.hostname !== "www.themealdb.com") {
      throw new Error("Invalid meal image");
    }

    return { idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb };
  });
}

export default function CoffeeAndWhat() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [apiLoading, setApiLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [pendingMeal, setPendingMeal] = useState<{
    meal: Meal;
    controller: AbortController;
    requestId: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const request = useRef<AbortController | null>(null);
  const meals = useRef<Meal[]>([]);
  const lastMealId = useRef<string | null>(null);
  const requestId = useRef(0);
  const imageTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loading = apiLoading || imageLoading;

  const finishImage = useCallback((controller: AbortController, nextMeal: Meal | null) => {
    if (controller.signal.aborted || request.current !== controller) return;
    if (imageTimeout.current) clearTimeout(imageTimeout.current);
    imageTimeout.current = null;
    request.current = null;
    setImageLoading(false);
    if (nextMeal) {
      setMeal(nextMeal);
    } else {
      setPendingMeal(null);
      setError("โหลดรูปภาพไม่สำเร็จ กรุณากดสุ่มใหม่อีกครั้ง");
    }
  }, []);

  const loadMeal = useCallback((controller: AbortController) => {
    const mealList = meals.current.length > 0
      ? Promise.resolve(meals.current)
      : fetchThaiMeals(AbortSignal.any([controller.signal, AbortSignal.timeout(15000)]));

    return mealList
      .then((availableMeals) => {
        if (controller.signal.aborted || request.current !== controller) return;
        meals.current = availableMeals;
        const alternatives = availableMeals.filter((item) => item.idMeal !== lastMealId.current);
        const candidates = alternatives.length > 0 ? alternatives : availableMeals;
        const nextMeal = candidates[Math.floor(Math.random() * candidates.length)];
        lastMealId.current = nextMeal.idMeal;
        setPendingMeal({ meal: nextMeal, controller, requestId: ++requestId.current });
        setImageLoading(true);
        setApiLoading(false);
        imageTimeout.current = setTimeout(() => finishImage(controller, null), 15000);
      })
      .catch(() => {
        if (!controller.signal.aborted && request.current === controller) {
          setError("โหลดเมนูไม่สำเร็จ กรุณากดสุ่มใหม่อีกครั้ง");
          setApiLoading(false);
          request.current = null;
        }
      });
  }, [finishImage]);

  useEffect(() => {
    const controller = new AbortController();
    request.current = controller;
    void loadMeal(controller);
    return () => {
      request.current?.abort();
      if (imageTimeout.current) clearTimeout(imageTimeout.current);
    };
  }, [loadMeal]);

  function surpriseMe() {
    if (request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setMeal(null);
    setPendingMeal(null);
    setApiLoading(meals.current.length === 0);
    setImageLoading(meals.current.length > 0);
    setError(null);
    void loadMeal(controller);
  }

  return (
    <section id="coffee-and-what" aria-labelledby="coffee-and-what-title"
      className="border-t border-[#35291f20] py-16 md:py-20">
      <div className="lab-container flex flex-col items-center text-center">
        <p className="eyebrow">A LITTLE SOMETHING WITH YOUR COFFEE</p>
        <h2 id="coffee-and-what-title">Coffee &amp; What? <span aria-hidden="true">☕</span></h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#74685b]">
          A fresh idea for your next coffee break. Let chance pick the menu.
        </p>

        <div className="mt-8 w-full max-w-sm" aria-busy={loading}>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#e7e6d6] shadow-sm">
            {pendingMeal && (
              <Image key={pendingMeal.requestId}
                src={pendingMeal.meal.strMealThumb} alt={pendingMeal.meal.strMeal}
                width={500} height={500} unoptimized
                loading="eager"
                className={`h-full w-full object-cover${loading ? " invisible" : ""}`}
                onLoad={() => finishImage(pendingMeal.controller, pendingMeal.meal)}
                onError={() => finishImage(pendingMeal.controller, null)}
              />
            )}
            {loading && (
              <div role="status" className="absolute inset-0 flex items-center justify-center gap-3 bg-[#f8f5ed]/90 text-sm text-[#687245]">
                <span aria-hidden="true" className="size-5 rounded-full border-2 border-[#687245]/25 border-t-[#687245] motion-safe:animate-spin" />
                Loading...
              </div>
            )}
            {!meal && !loading && <div aria-hidden="true" className="flex h-full items-center justify-center text-5xl">☕</div>}
          </div>
          <div aria-live="polite">
            {meal && <h3 className="mt-6 text-xl font-medium tracking-tight">{meal.strMeal}</h3>}
          </div>
        </div>

        {error && <p role="alert" className="mt-4 max-w-sm text-sm text-[#9a382a]">{error}</p>}
        <button type="button" onClick={surpriseMe} disabled={loading}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#687245] px-7 py-3 text-sm text-white transition-colors hover:bg-[#4c5833] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#687245] disabled:cursor-wait disabled:opacity-60 motion-reduce:transition-none">
          Surprise Me! 🎲
        </button>
      </div>
    </section>
  );
}
