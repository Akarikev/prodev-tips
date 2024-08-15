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
    <div className="h-[50rem] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center min-h-screen">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      <h1 className="">Welcome to PRODEV Tips</h1>

      <p className="mt-4 text-center italic underline underline-offset-4 decoration-wavy">
        Get programming tips and tricks here!
      </p>

      <div className="mt-10">
        <h1 className="font-extrabold">
          Let`&apos;s start by getting to know you.
        </h1>

        <form
          action="formaction"
          className="mt-4 flex flex-col gap-4"
          onSubmit={onSubmitFormData}
        >
          <label className="text-sm font-bold">Name: </label>
          <Input placeholder="levi" name="name" />
          <label className="text-sm font-bold">Role: </label>
          <Input placeholder="fullstack dev" name="role" />

          <label className="text-sm font-bold">
            Favorite Programming Lang.{" "}
          </label>
          <Input placeholder="python" name="language" />

          <Button
            type="submit"
            className={buttonVariants({
              size: "lg",
              className: "w-full",
            })}
            disabled={pending} // Disables the button when pending
          >
            {pending ? (
              <LoaderPinwheel className="w-6 h-6 animate-spin" />
            ) : (
              "Get Started"
            )}
          </Button>
        </form>
      </div>

      <div className="mt-auto">
        <div className="divide-x-2">
          <h1 className="font-extrabold">by elorm with ❤️</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
