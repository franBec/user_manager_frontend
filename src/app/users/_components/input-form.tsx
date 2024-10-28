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
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Search } from "lucide-react";
import { GetUsersParams } from "@/api/users/model";

export function InputForm({
  defaultValues,
}: Readonly<{ defaultValues: GetUsersParams }>) {
  const form = useForm<GetUsersParams>({
    defaultValues,
  });
  const router = useRouter();
  const { toast } = useToast();

  function onSubmit({ q }: GetUsersParams) {
    if (!q || q.trim().length === 0) {
      router.push("/users");
      return;
    }

    if (q.length < 2) {
      toast({
        description: "Write at least two characters for searching...",
      });
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
        <Button type="submit" className="flex items-center space-x-1">
          <Search />
          <span>{"Search"}</span>
        </Button>
      </form>
    </Form>
  );
}
