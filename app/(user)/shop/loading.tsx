import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <article className="container loading-products ">
      <div className="shop__products py-4">
        {Array.from({ length: 9 }).map((_, i) => {
          return (
            <div key={i}>
              <Skeleton className="bg-zinc-400 h-[300px] w-full rounded-xl" />
              <div className="mt-4">
                <Skeleton className="h-4 w-[250px] bg-zinc-400" />
                <Skeleton className="h-4 w-[200px] bg-zinc-400 mt-2" />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
