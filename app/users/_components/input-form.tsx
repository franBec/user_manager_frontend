"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GetUsersParams } from "@/api/users/model";
import { useRouter } from "next/navigation";

export function InputForm({
  defaultValues,
}: Readonly<{ defaultValues: GetUsersParams }>) {
  const form = useForm<GetUsersParams>({
    defaultValues,
  });
  const router = useRouter();

  function onSubmit({ q }: GetUsersParams) {
    if (!q || q.length < 2) {
      return;
    }

    const newSearchParams = new URLSearchParams();
    newSearchParams.set("q", q);
    router.push(`/users?${newSearchParams.toString()}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <FormField
          control={form.control}
          name="q"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="name, username, or email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{"Search"}</Button>
      </form>
    </Form>
  );
}
