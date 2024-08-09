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
    <span
      className={`h-${h} w-${w} border-2 animate-spin inline-block border-black border-dotted rounded-full`}
    ></span>
  );
}
