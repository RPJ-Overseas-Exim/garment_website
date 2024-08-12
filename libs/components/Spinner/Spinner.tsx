import { cn } from "@/lib/utils";

export default function Spinner({
  w,
  h,
  b,
}: {
  w: string;
  h: string;
  b: string;
}) {
  return (
    <>
      <span
        className="animate-spin inline-block border-black border-dotted rounded-full"
        style={{
          height: `${Number(h) * 0.25}rem`,
          width: `${Number(w) * 0.25}rem`,
          borderWidth: b + "px",
        }}
      ></span>
    </>
  );
}
