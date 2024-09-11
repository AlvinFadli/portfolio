type CardDetailProps = {
  companyName?: string;
  details?: string;
};

function CardDetail({ companyName, details }: CardDetailProps) {
  return (
    <div className=" bg-slate-50 py-4 rounded-lg divide-x flex divide-border">
      <div className="grid gap-2  px-4 self-start">
        <p className="font-light text-xs">Company</p>
        <p className="font-bold text-xs">{companyName}</p>
      </div>
      <div className="grid gap-2  px-4 self-start">
        <p className="font-light text-xs">Tech Stack</p>
        <p className="font-bold text-xs">{details}</p>
      </div>
    </div>
  );
}

export { CardDetail };
export type { CardDetailProps };
