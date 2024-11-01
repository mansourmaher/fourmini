"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  Upload,
  Video,
  X,
  Eye,
  Lock,
  Users,
  Plus,
  Pencil,
} from "lucide-react";
import { Editor } from "@/app/ui-components/editor";

export default function Component() {
  const [resources, setResources] = useState([
    {
      name: "Course outline.pdf",
      url: "https://utfs.io/f/78e5ab72-9a60-4551-a736-e243bce746cd-6qaxug.pdf",
    },
    {
      name: "Assignment brief.pdf",
      url: "https://utfs.io/f/f8801496-e7a7-4366-9aea-281ea6f79a8e-soweo8.pdf",
    },
    {
      name: "Reference guide.pdf",
      url: "https://utfs.io/f/0b3c8540-245f-4248-ad93-ba1cde7fc211-6qaxug.pdf",
    },
  ]);

  return (
    <div className="container mx-auto py-6 space-y-8 mt-12">
      <div className="flex justify-between items-center"></div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chapter Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Chapter Title</Label>
                <Input id="title" defaultValue="Introduction" />
              </div>

              <div className="space-y-2">
                <Label>Chapter Description</Label>
                <Editor
                  onChange={(value) => console.log(value)}
                  value="This chapter will introduce you to the basics of web development. We will cover the fundamentals of HTML, CSS, and JavaScript.  "
                />
              </div>

              <div className="space-y-2">
                <Label>Video Content</Label>
                <Card className="border-dashed">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <Video className="w-12 h-12 text-muted-foreground" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-medium">Upload Video</h3>
                        <p className="text-sm text-muted-foreground">
                          Drag and drop your video file here
                        </p>
                      </div>
                      <Button variant="secondary">
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Access Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Visibility</Label>
                    <p className="text-sm text-muted-foreground">
                      Control who can access this chapter
                    </p>
                  </div>
                  <Select defaultValue="public">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Public
                        </div>
                      </SelectItem>
                      <SelectItem value="private">
                        <div className="flex items-center">
                          <Lock className="w-4 h-4 mr-2" />
                          Private
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Prerequisites</Label>
                    <p className="text-sm text-muted-foreground">
                      Chapters students must complete first
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full">
                    Delete Chapter
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the chapter and remove all of its data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between ">
                <p>Chapter Quiz</p>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Quiz
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">Chapter Quiz</h3>
                  <p className="text-sm text-muted-foreground">
                    You chapter quiz is not ready yet
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">Chapter Status</h3>
                  <p className="text-sm text-muted-foreground">
                    Last updated 2 hours ago
                  </p>
                </div>
                <Badge variant="outline" className="text-primary">
                  Draft
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3 ">
          <Card>
            <CardHeader>
              <CardTitle>Assignments & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="assignments">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                <TabsContent value="assignments" className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Cahier-de-charges (1).pdf</p>
                        <p className="text-sm text-muted-foreground">
                          Added on Oct 31, 2023
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Assignment
                  </Button>
                </TabsContent>
                <TabsContent value="resources" className="space-y-4">
                  <ScrollArea className="h-[200px] rounded-lg border p-4">
                    {resources.map((resource, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <span className="font-medium">{resource.name}</span>
                        </div>
                        <Button variant="ghost" size="icon">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </ScrollArea>
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Resource
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
