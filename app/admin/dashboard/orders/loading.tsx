import Spinner from "@/libs/components/Spinner/Spinner";

export default function Loading() {
  return (
    <section
      id="orders-loading"
      className="flex h-full justify-center items-center"
    >
      <Spinner h="12" w="12" b="5" />
    </section>
  );
}
