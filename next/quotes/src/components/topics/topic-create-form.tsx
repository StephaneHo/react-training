"use client";
import { createTopic } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(createTopic, { errors: {} });
  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Add a topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <Input
                name="name"
                label="name"
                labelPlacement="outside"
                placeholder="a name for a topic"
                isInvalid={!!formState.errors.name}
                errorMessage={formState.errors.name?.join(", ")}
              />

              {formState.errors._form ? (
                <div className="rounded p-2 bg-red-200 border border-red-400">
                  {formState.errors._form.join(", ")}
                </div>
              ) : null}
              <FormButton>Save</FormButton>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
