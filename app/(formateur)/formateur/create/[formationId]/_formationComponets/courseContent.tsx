"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

function CourseContent() {
  const [chapters, setChapters] = useState([{ title: "", lessons: [] }]);

  const addChapter = () => {
    setChapters([...chapters, { title: "", lessons: [] }]);
  };

  const addLesson = (chapterIndex: number) => {
    const newChapters = [...chapters];
    // @ts-ignore
    newChapters[chapterIndex].lessons.push({ title: "" });
    setChapters(newChapters);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Course Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className="space-y-4">
            <div className="bg-muted p-4 rounded-lg space-y-4">
              <div className="flex items-center gap-4">
                <DragHandleDots2Icon className="w-5 h-5 text-muted-foreground cursor-move" />
                <div className="flex-1">
                  <Input
                    placeholder={`Chapter ${
                      chapterIndex + 1
                    }: Enter chapter title`}
                    value={chapter.title}
                    onChange={(e) => {
                      const newChapters = [...chapters];
                      newChapters[chapterIndex].title = e.target.value;
                      setChapters(newChapters);
                    }}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => addLesson(chapterIndex)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              {chapter.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="ml-6 flex items-center gap-4">
                  <DragHandleDots2Icon className="w-5 h-5 text-muted-foreground cursor-move" />
                  <div className="flex-1">
                    <Input
                      placeholder={`Lesson ${
                        lessonIndex + 1
                      }: Enter lesson title`}
                      // @ts-ignore
                      value={lesson.title}
                      onChange={(e) => {
                        const newChapters = [...chapters];
                        // @ts-ignore
                        newChapters[chapterIndex].lessons[lessonIndex].title =
                          e.target.value;
                        setChapters(newChapters);
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full" onClick={addChapter}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Chapter
        </Button>
      </CardContent>
    </Card>
  );
}

export default CourseContent;
