import {cn} from "@/lib/utils";
import prisma from "@/lib/db";

const Page = async () => {
    const users = await prisma.user.findMany();

  const smth = true;

  return (
    <div className={cn("text-red-500", {'mt-2': smth})}>
        {JSON.stringify(users)}
    </div>
  )

};

export default Page;
