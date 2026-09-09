import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface SubjectInfo {
  name: string;
  logo: string;
  link : string;
}

interface SubjectProps {
  info: SubjectInfo;
}

function Subject({ info }: SubjectProps) {
  return (
    <Link href={`/subject/${info.link}`} className="w-full">
    <Card className="overflow-hidden py-0 gap-0 cursor-pointer transition-shadow hover:shadow-md">
      {/* Illustration */}
      <div className="relative w-full aspect-video">
        <Image
          src={info.logo}
          alt={info.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name + arrow */}
      <CardContent className="flex items-center justify-between px-4 py-4">
        <span className="font-semibold text-foreground">{info.name}</span>
        <div className="flex items-center justify-center size-8 rounded-full bg-secondary">
          <ChevronRight className="size-4 text-primary" />
        </div>
      </CardContent>
    </Card>
    </Link>
  );
}

export default Subject;
export type { SubjectInfo };