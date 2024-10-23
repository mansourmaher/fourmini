import { EyeDropperIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ReviewProgress from "./Review";
import { Badge } from "@/components/ui/badge";
import { BookOpen, DollarSign, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  chapterLenght: number;
  imageUrl: string | StaticImageData;
  avg: number;
  totalReviews: number;
  existingpurchase: boolean;
}

type CourseCardProps = {
  course: Course;
};

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="p-4  border flex flex-col  rounded-lg">
      <div className="relative aspect-video rounded-xl mb-2">
        <Image
          className="object-cover"
          src={course.imageUrl}
          alt="Course Image"
          fill
          priority
        />
      </div>
      <hr className="border-t border-muted-foreground mb-1" />

      <h1 className="text-lg font-semibold">{course.title}</h1>
      <p className="text-sm text-muted-foreground mt-1.5  line-clamp-3 h-14 ">
        {course.description}
      </p>

      <div className="px-2">
        <ReviewProgress
          courseId={course.id}
          avg={course.avg!}
          totalReviews={course.totalReviews!}
          isForCard={true}
        />
      </div>
      <div className="flex ">
        <Badge variant="yellow" className="mb-1">
          {course.category}
        </Badge>
      </div>
      <div className="flex flex-row justify-between items-center md:flex-cols-3 sm:flex-cols-3 ">
        <div className=" ">
          <Badge variant="outline">
            <BookOpen size={14} className="mr-2" />
            {course.chapterLenght} chapters
          </Badge>
        </div>
        <Badge variant="primary">
          <DollarSign size={14} className="mr-2" />
          {course.price} D
        </Badge>
      </div>

      <div className="flex justify-between items-center">
        <div className="mt-6 ">
          <Button variant={"primary"}>
            <Link
              href={`/learn/${course.id}`}
              className="flex items-center gap-x-3 "
            >
              <Eye size={18} /> View Course
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
