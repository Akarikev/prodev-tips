import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Programming Tips</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Tips
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Coding Skills
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover a wealth of programming tips and tricks to enhance
                    your development workflow and become a more efficient coder.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/onboarding"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vercel.svg"
                width="100"
                height="100"
                alt="Hero"
                className="mx-auto   object-cover sm:w-full lg:order-last "
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Programming Tips for Every Skill Level
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you&apos;re a beginner or an experienced developer,
                  our programming tips cover a wide range of topics to help you
                  write cleaner, more efficient code and streamline your
                  development workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <BetweenVerticalStartIcon className="h-6 w-6" />
                  <h3 className="text-lg font-bold">Beginner Tips</h3>
                </div>
                <p className="text-muted-foreground">
                  Get started with the fundamentals of programming and learn
                  best practices for writing clean, maintainable code.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <BinaryIcon className="h-6 w-6" />
                  <h3 className="text-lg font-bold">Intermediate Tips</h3>
                </div>
                <p className="text-muted-foreground">
                  Dive deeper into programming concepts and explore techniques
                  to optimize your code and improve performance.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <PlusIcon className="h-6 w-6" />
                  <h3 className="text-lg font-bold">Advanced Tips</h3>
                </div>
                <p className="text-muted-foreground">
                  Learn advanced programming patterns, best practices, and tools
                  to take your skills to the next level.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied users and see how our programming tips
                  have helped them improve their coding skills and workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="flex flex-col gap-4">
                <CardHeader>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="font-bold">John Doe</div>
                    <div className="text-muted-foreground">
                      Software Engineer
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    &ldquo;The programming tips on this site have been a
                    game-changer for me. I&apos;ve learned so many new
                    techniques and best practices that have helped me write
                    cleaner, more efficient code. Highly recommended!&ldquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col gap-4">
                <CardHeader>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="font-bold">Jane Appleseed</div>
                    <div className="text-muted-foreground">
                      Front-end Developer
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    &ldquo;As a front-end developer, Ive found the tips on this
                    site to be incredibly helpful in improving my workflow and
                    writing more maintainable code. The content is
                    easy-to-understand and practical.&ldquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col gap-4">
                <CardHeader>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="font-bold">Sarah Miller</div>
                    <div className="text-muted-foreground">
                      Full-stack Developer
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    &ldquo;As a full-stack developer, I&apos;ve found the tips
                    on this site to be invaluable. They cover a wide range of
                    topics and have helped me improve my skills in both the
                    front-end and back-end. Highly recommended for developers of
                    all skill levels.&ldquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col gap-4">
                <CardHeader>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="font-bold">Tom Wilson</div>
                    <div className="text-muted-foreground">
                      Backend Engineer
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    &ldquo;As a backend engineer, I&apos;ve found the
                    programming tips on this site to be incredibly helpful in
                    optimizing my code and improving performance. The content is
                    well-researched and the tips are easy to implement.&ldquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

function BetweenVerticalStartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="13" x="3" y="8" rx="1" />
      <path d="m15 2-3 3-3-3" />
      <rect width="7" height="13" x="14" y="8" rx="1" />
    </svg>
  );
}

function BinaryIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="14" width="4" height="6" rx="2" />
      <rect x="6" y="4" width="4" height="6" rx="2" />
      <path d="M6 20h4" />
      <path d="M14 10h4" />
      <path d="M6 14h2v6" />
      <path d="M14 4h2v6" />
    </svg>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
