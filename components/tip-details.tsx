import LanguageIcon from "./language-icon";
type Tip = {
  id: number;
  language: string;
  title: string;
  tip: string;
  author: string;
  date: string;
};

export const TipDetails = ({ data }: { data: Tip }) => {
  return (
    <div className="flex flex-col justify-center h-screen items-center gap-3">
      <h1 className="text-2xl md:text-3xl tracking-tighter text-center text-red-300 underline font-extrabold uppercase">
        {data.title}
      </h1>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center tracking-tight">
        {data.tip}
      </p>
      <LanguageIcon language={data.language} />
      <p className="font-bold text-sm md:text-base text-yellow-700">
        by {data.author}
      </p>
      <small>on {data.date}</small>
    </div>
  );
};
