import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import React, { Fragment } from "react";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";

function AddTip() {
  return (
    <Fragment>
      <div className="flex justify-center flex-col items-center">
        <Drawer>
          <DrawerTrigger>
            <Button className="inline-flex gap-2 items-center">
              <PlusCircleIcon className="w-4 h-4" />
              Add Tip
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Add Tip</DrawerTitle>
              <DrawerDescription>
                Add a new tip, you think might help someone,
                <span className="text-red-500">
                  This currently under development
                </span>
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex flex-col justify-center items-center">
              <Card className="w-[350px] ">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Title</Label>
                        <Input id="name" placeholder="Title of your tip" />
                        <Label htmlFor="name">Description</Label>
                        <Textarea
                          id="name"
                          placeholder="Short description of your tip"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Language</Label>
                        <Select>
                          <SelectTrigger id="Language">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="javascript">
                              JavaScript
                            </SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="Ruby">Ruby</SelectItem>
                            <SelectItem value="C#">C#</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Add Tip</Button>
                </CardFooter>
              </Card>
            </div>

            {/* <DrawerFooter>
            <Button className="w-full">Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>
    </Fragment>
  );
}

export default AddTip;
