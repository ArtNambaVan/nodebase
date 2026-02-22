import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const Page = () => {
  const smth = true;

  return (
    <div className={cn("text-red-500", {'mt-2': smth})}>
      <Button variant='outline'>First button</Button>
      <Button variant='destructive'>Second button</Button>
    </div>
  )

};

export default Page;
