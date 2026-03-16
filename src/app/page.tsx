import {cn} from "@/lib/utils";
import { getQueryClient, trpc } from "@/trpc/server";
import {Client} from "@/app/client";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {Suspense} from "react";

const Page = async () => {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  const smth = true;

  return (
    <div className={cn("text-red-500", {'mt-2': smth})}>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<p>Loading...</p>}>
                <Client/>
            </Suspense>
        </HydrationBoundary>

    </div>
  )

};

export default Page;

// "use client"
//
// import {useTRPC} from "@/trpc/client";
// import {useQuery} from "@tanstack/react-query";
//
// const Page =  () => {
//     const trpc = useTRPC();
//     const {data: users} = useQuery(trpc.getUsers.queryOptions());
//
//     return (
//         <div>
//             {JSON.stringify(users)}
//         </div>
//     )
//
// };
//
// export default Page;

