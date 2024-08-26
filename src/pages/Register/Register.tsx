import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import IconGoogle from "@/icons/Google";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen lg:flex-row">
        {/* Image */}
        <div className="hidden w-full bg-muted lg:block">
          <img
            src="/login/rainbow-vortex.svg"
            alt="Image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Registration - Always visible */}
        <div className="flex items-center justify-center w-full lg:w-1/2 p-6 lg:p-8">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">
                Welcome! Create Your Account
              </CardTitle>
              <CardDescription>
                Fill out the details to register
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Name</Label>
                  <Input id="nombre" placeholder="Enter your name" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="apellido">Last Name</Label>
                  <Input id="apellido" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a secure password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-gray-500" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4">
                <Button variant="outline" className="flex-1">
                  <IconGoogle />
                  Sign up with Google
                </Button>
                <Button className="flex-1">Register</Button>
              </div>
              <p className="text-center text-sm text-gray-500">
                By registering, you agree to our{" "}
                <a
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  terms and conditions
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Register;
