import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IconGoogle from "@/icons/Google";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex w-full lg:flex min-h-dvh">
        <div className="flex items-center justify-center px-3 py-12 w-full lg:w-[1000px] grow">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="inline-block ml-auto text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                <IconGoogle /> Login with Google
              </Button>
            </div>
            <div className="mt-4 text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link to="#" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-full bg-muted lg:block">
          <img
            src="/login/sun-tornado.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
