import OverView from "@/app/overview/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-dvw max-h-dvh">
        <OverView />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"/>
    </div>
  );
}
