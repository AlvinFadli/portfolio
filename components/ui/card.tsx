import * as React from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { Button } from "./button";
import { CardDetail, CardDetailProps } from "./card-detail";
import Link from "next/link";

export type CardProps = CardDetailProps & {
  banner: string;
  title: string;
  description: string;
  alt: string;
  buttonLink: string;
  withCardDetail?: boolean;
};

function Card({
  banner,
  title,
  description,
  alt,
  withCardDetail = false,
  buttonLink,
  companyName,
  details,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative p-2 rounded-3xl border bg-card text-card-foreground shadow flex flex-col"
      )}
    >
      <div className="px-6 pt-6 bg-gradient-to-r from-teal-100 via-green-100 to-yellow-100 rounded-t-2xl animated-gradient">
        <Image
          src={banner}
          alt={alt}
          width={1024}
          height={576}
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="p-3 flex flex-col gap-4 justify-between flex-1">
        <div className="space-y-3">
          {withCardDetail && (
            <CardDetail companyName={companyName} details={details} />
          )}
          <div className="grid gap-2">
            <p className="font-bold">{title}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild size="fullWidth">
            <Link href={buttonLink} target="_blank">
              Visit
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Card };
