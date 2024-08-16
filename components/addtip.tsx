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

function AddTip() {
  return (
    <Fragment>
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
              Add a new tip, you think might help someone
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button className="w-full">Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}

export default AddTip;
