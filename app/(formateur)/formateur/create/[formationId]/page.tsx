import CourseDetails from "./_formationComponets/courseDetails";
import CourseContent from "./_formationComponets/courseContent";
import CourseSetings from "./_formationComponets/courseSetings";
import CoursePreview from "./_formationComponets/coursePreview";
import CourseHelpAndPublish from "./_formationComponets/courseNeedHelpAndPublis";

export default function CreatePage() {
  return (
    <div className="container mx-auto py-6 space-y-8 mt-16 ">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CourseDetails />
          <CourseContent />
        </div>
        <div className="space-y-6">
          <CourseSetings />
          <CoursePreview />
          <CourseHelpAndPublish />
        </div>
      </div>
    </div>
  );
}
