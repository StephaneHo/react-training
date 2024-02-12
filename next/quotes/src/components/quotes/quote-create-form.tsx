"use client";

import { Popover, Textarea } from "@nextui-org/react";
import { Button, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import FormButton from "../common/form-button";
import { useFormState } from "react-dom";
import { createQuote } from "@/actions";

type QuoteCreateFormProps = {
  tag: string;
};

export default function QuoteCreateForm({ tag }: QuoteCreateFormProps) {
  const [formState, action] = useFormState(createQuote.bind(null, tag), {
    errors: {},
  });

  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Add a quote</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <Textarea
                name="content"
                label="content"
                labelPlacement="outside"
                placeholder="write the quote"
                isInvalid={!!formState.errors.content}
                errorMessage={formState.errors.content?.join(", ")}
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
