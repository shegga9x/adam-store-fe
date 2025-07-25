"use client";

import { signInAction } from "@/actions/authActions";
import Loader from "@/components/modules/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { notoSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(4),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const signIn = useAuthStore((state) => state.signIn);

  const router = useRouter();

  const { toast } = useToast();

  async function formSubmitHandler(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const formData = new FormData();

    formData.append("username", values.username);
    formData.append("password", values.password);

    const res = await signInAction(formData);

    setIsLoading(false);

    if (res.success) {
      toast({
        description: res.message,
      });
      if (res.data) {
        signIn(res.data);
        return router.push("/");
      }
    }

    toast({
      variant: "destructive",
      description: res.message,
    });
  }

  return (
    <Form {...form}>
      <form
        // action={formSubmitHandler}
        onSubmit={form.handleSubmit(formSubmitHandler)}
        className="w-80 space-y-7 rounded-xl border border-secondary px-7 py-7 shadow-md dark:border-secondary-dark dark:bg-primary-dark dark:shadow-none">
        <h1
          className={cn("text-center text-2xl font-bold", notoSans.className)}>
          Sign In
        </h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-normal text-gray-700 dark:text-gray-300">
                Username :{" "}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  {...field}
                  className="h-11 border-secondary bg-white shadow-none dark:border-secondary-dark dark:bg-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-normal text-gray-700 dark:text-gray-300">
                Password :{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                  className="h-11 border-secondary bg-white shadow-none dark:border-secondary-dark dark:bg-transparent"
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            type="submit"
            disabled={isLoading}
            className="h-10 w-full border border-secondary bg-primary-dark font-medium text-white shadow-none disabled:opacity-70 dark:border-secondary-dark">
            {isLoading ? <Loader /> : "Submit"}
          </Button>
          <p className="mt-3 text-center text-sm font-normal text-gray-700 dark:text-gray-300">
            Don`t have an account?
            <Link
              className="font-medium text-black underline dark:text-white"
              href="./sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}

export default SignInForm;
