"use client";
import "./Filter.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<{ [x: string]: string | null }>({
    category: searchParams.get("category"),
    size: searchParams.get("size"),
    pmin: searchParams.get("pmin"),
    pmax: searchParams.get("pmax"),
  });

  const router = useRouter();

  const handleFilterLeave = (filter: string) => {
    const categories = document.querySelector(".shop__" + filter);
    if (categories === null) return;
    categories.classList.remove("shop__tabs-active");
  };

  const handleFilterClick = (filter: string) => {
    const categories = document.querySelector(".shop__" + filter);
    if (categories === null) return;
    categories.classList.toggle("shop__tabs-active");
  };

  const handlePriceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    if (formData.get("pmin")) {
      setFilters({
        ...filters,
        pmin: String(formData.get("pmin")),
      });
    }
    if (formData.get("pmax")) {
      setFilters({
        ...filters,
        pmax: String(formData.get("pmax")),
      });
    }
  };

  const handleFilterItemClick = (filter: string, filterName: string) => {
    if (filters[filterName] === filter) {
      setFilters({ ...filters, [filterName]: null });
      return;
    }
    setFilters({ ...filters, [filterName]: filter });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(filters)) {
      if (value === null) {
        params.delete(key);
        continue;
      }
      params.set(key, value);
    }
    router.push("/shop?" + params.toString());
  }, [filters]);

  return (
    <>
      <aside className="shop__sidebar">
        <div className="shop__filter-wrapper">
          <button
            className={`shop__filter ${
              filters.category !== null ? "shop__filter-active" : ""
            }`}
            onClick={() => handleFilterClick("categories")}
          >
            <span> Category</span>
            <RiArrowDownSLine />
          </button>
          <ul className="shop__categories shop__filter-list">
            <li>
              <input
                type="radio"
                onInput={() => handleFilterItemClick("All", "category")}
                id="all"
                name="category"
              />
              <label htmlFor="all">All</label>
            </li>
            <li>
              <input
                type="radio"
                onInput={() => handleFilterItemClick("Men", "category")}
                id="men"
                name="category"
              />
              <label htmlFor="men">Men</label>
            </li>
            <li>
              <input
                type="radio"
                onInput={() => handleFilterItemClick("Women", "category")}
                id="women"
                name="category"
              />
              <label htmlFor="women">Women</label>
            </li>
          </ul>
        </div>

        <div className="shop__filter-wrapper">
          <button
            className={`shop__filter ${
              filters.size !== null ? "shop__filter-active" : ""
            }`}
            onClick={() => handleFilterClick("size")}
          >
            <span>Size</span>
            <RiArrowDownSLine />
          </button>
          <ul className="shop__size shop__filter-list">
            <li>
              <input
                type="radio"
                onInput={() => handleFilterItemClick("M", "size")}
                name="size"
                id="m"
              />
              <label htmlFor="m">M</label>
            </li>
            <li>
              <input
                type="radio"
                onInput={() => handleFilterItemClick("L", "size")}
                name="size"
                id="l"
              />
              <label htmlFor="l">L</label>
            </li>
            <li>
              <input
                type="radio"
                onInput={() => handleFilterItemClick("XL", "size")}
                name="size"
                id="xl"
              />
              <label htmlFor="xl">XL</label>
            </li>
          </ul>
        </div>

        <div className="shop__filter-wrapper">
          <button
            className={`shop__filter ${
              filters.pmin !== null || filters.pmax !== null
                ? "shop__filter-active"
                : ""
            }`}
            onClick={() => handleFilterClick("price")}
          >
            <span> Price</span>
            <RiArrowDownSLine />
          </button>
          <form
            className="shop__price shop__filter-list"
            onSubmit={(e) => handlePriceSubmit(e)}
          >
            <p>
              <label htmlFor="from">From: </label>
              <input
                type="number"
                id="from"
                name="pmin"
                className="w-full border border-gray-300"
                placeholder={String(filters.pmin)}
              />
            </p>
            <p>
              <label htmlFor="to">To: </label>
              <input
                type="number"
                id="to"
                name="pmax"
                className="w-full border border-gray-300"
                placeholder={String(filters.pmax)}
              />
            </p>
            <button type="submit" className="shop__price__submit">
              Submit
            </button>
          </form>
        </div>
      </aside>
      <h3>Filters {JSON.stringify(filters)}</h3>
    </>
  );
}
