import { createBook } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";

export default function BookCreateForm() {
  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Ajoutez un livre</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={createBook}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Ajoutez un livre</h3>
              <Input
                name="title"
                label="title"
                labelPlacement="outside"
                placeholder="Ajoutez votre livre prefere"
              />
              <Textarea
                label="introduction"
                labelPlacement="outside"
                placeholder="Une courte introduction de votre livre prefere"
              />
            </div>
          </form>
          <Button type="submit">Ajoutez</Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
