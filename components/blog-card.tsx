import Image from "next/image";

export type BlogCardProps = {
  banner: string;
  title: string;
  description: string;
  date: string;
};

function BlogCard({ banner, title, description }: BlogCardProps) {
  return (
    <>
      <div className="p-4 border shadow-sm w-full rounded-xl">
        <div className="flex gap-5 items-center">
          <div id="pict" className="w-[96px] h-[66px]">
            <Image
              src={banner}
              width={200}
              height={200}
              className="object-cover w-full h-full rounded-lg"
              alt="blog-mini-image"
            />
          </div>
          <div id="content" className="">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { BlogCard };
