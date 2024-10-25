export default function Background({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen relative text-stone-900 dark:text-stone-100">
      <div className="absolute top-0 -z-50 w-full h-full dark:bg-stone-800 overflow-hidden">
        <div className="absolute top-[15%] right-0 w-52 h-52 bg-gradient-to-r from-[#059669] via-[#66d9c4] to-[#89c2d9] rounded-full opacity-15 filter blur-3xl animate-move animate-colorChange"></div>
        <div className="absolute top-[5%] right-[10%] w-64 h-64 bg-gradient-to-r from-[#66d9c4] to-[#89c2d9] rounded-full opacity-40 filter blur-3xl animate-move animate-colorChange"></div>
        <div className="absolute top-[15%] left-0 w-64 h-64 bg-gradient-to-r from-[#89c2d9] to-[#f3e99f] rounded-full opacity-40 filter blur-3xl animate-move animate-colorChange"></div>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
