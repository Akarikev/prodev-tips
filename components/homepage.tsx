"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import { LoaderPinwheel } from "lucide-react";
import { useRouter } from "next/navigation";

type User = {
  username: string;
  userRole: string;
  userLanguage: string;
};

function HomePage() {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const onSubmitFormData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPending(true);

    try {
      const form = event.target as HTMLFormElement;
      const data = new FormData(form);

      const userdataName = data.get("name") as string;
      const userdataRole = data.get("role") as string;
      const userdataLang = data.get("language") as string;

      const user: User = {
        username: userdataName,
        userRole: userdataRole,
        userLanguage: userdataLang,
      };

      if (!user.username || !user.userRole || !user.userLanguage) {
        alert("Enter correct details");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);

      router.push("/dashboard");
    } catch (error) {
      alert("An error occurred!");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="dark:text-white">
    
      <h1 className="font-extrabold dark:text-white text-2xl md:text-4xl tracking-tighter mt-16 uppercase">
        Welcome to PRODEV Tips
      </h1>

      <p className="mt-4 text-center italic underline underline-offset-4 decoration-wavy">
        Get programming tips and tricks here!
      </p>

      <div className="mt-10">
        <h1 className="font-extrabold">
          Let&apos;s start by getting to know you.
        </h1>

        <form
          action="formaction"
          className="mt-4 flex flex-col gap-4"
          onSubmit={onSubmitFormData}
        >
          <label className="text-sm font-bold">Name: </label>
          <Input placeholder="levi" name="name" className="w-full" />
          <label className="text-sm font-bold">Role: </label>
          <Input placeholder="fullstack dev" name="role" className="w-full" />

          <label className="text-sm font-bold">
            Favorite Programming Lang.{" "}
          </label>
          <Input placeholder="python" name="language" className="w-full" />

          <Button
            type="submit"
            className={buttonVariants({
              size: "lg",
              className: "w-full mb-10",
            })}
            disabled={pending} // Disables the button when pending
          >
            {pending ? (
              <LoaderPinwheel className="w-6 h-6 animate-spin" />
            ) : (
              "Let's Go!"
            )}
          </Button>
        </form>
      </div>

      {/* <div className="mt-auto">
        <div className="divide-x-2">
          <h1 className="font-extrabold">by elorm with ❤️</h1>
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
