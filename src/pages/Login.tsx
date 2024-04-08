import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useAuthContext from "@/hooks/useAuthContext";
import { AllUsers } from "@/types";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [loading, isLoading] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const { login } = useAuthContext();
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      userInfo: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    isLoading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 1500); // Wait for 1.5 seconds
    });

    const storedUsers: AllUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    const user = storedUsers.find(
      (user) =>
        user.email === data.userInfo || user.phoneNumber === data.userInfo
    );

    if (!user || user.password !== data.password) {
      toast.error("Invalid credentials!");
      isLoading(false);
      return;
    }

    login(user);
    toast.success("Logged in successfully!");
  };
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gray-50">
      <Card className="sm:mx-auto sm:w-full sm:max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl tracking-tight font-bold text-gray-900 text-center">
            Login to your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <Input
              type="type"
              placeholder="Email address or phone number"
              autoComplete="off"
              disabled={loading}
              {...register("userInfo")}
            />
            <div className="relative">
              <Input
                type={showPass1 ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
                disabled={loading}
                {...register("password")}
              />
              <Button
                size={"icon"}
                variant={"ghost"}
                type="button"
                onClick={() => setShowPass1((prev) => !prev)}
                className="absolute top-0 right-0 flex h-full items-center px-2"
              >
                {showPass1 ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex items-center py-2">
              <Button
                className="w-full max-w-sm mx-auto"
                type="submit"
                isLoading={loading}
              >
                {loading ? "Please wait..." : "Continue"}
              </Button>
            </div>
          </form>
          <p className="text-muted-foreground text-sm text-center">
            New user?
            <Link
              className={buttonVariants({
                variant: "link",
                className: "px-1",
              })}
              to={"/sign-up"}
            >
              Create account
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
