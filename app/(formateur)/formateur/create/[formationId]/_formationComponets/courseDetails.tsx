import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Image as ImageIcon, Upload
} from "lucide-react";


function CourseDetails() {
  return (
    <Card>
    <CardHeader>
      <CardTitle className="text-2xl">Course Details</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Course Title</Label>
        <Input
          id="title"
          placeholder="Enter an engaging title for your course"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Write a compelling description that will make students want to enroll"
          className="min-h-[120px]"
        />
      </div>
      <div className="space-y-2">
        <Label>Course Thumbnail</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition-colors">
          <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
          <div className="mt-4">
            <Button variant="secondary">
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Recommended size: 1280x720px
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}

export default CourseDetails