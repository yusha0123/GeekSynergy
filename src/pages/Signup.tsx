import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/types";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const [loading, isLoading] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [profession, setProfession] = useState<string>("");
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();

  const professions = [
    "Doctor",
    "Teacher",
    "Engineer",
    "Lawyer",
    "Architect",
    "Chef",
    "Nurse",
    "Police Officer",
    "Accountant",
    "Graphic Designer",
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.confirmPassword !== data.password) {
      toast.error("Passwords do not match!");
      return;
    }

    // Remove confirmPassword field from newUser object
    const { confirmPassword, ...userData } = data;

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = storedUsers.some(
      (user: User) =>
        user.email === data.email || user.phoneNumber === data.phoneNumber
    );

    if (userExists) {
      toast.error("User already exists!");
      return;
    }

    const newUser = {
      ...userData,
      profession,
    };

    isLoading(true);
    setTimeout(() => {
      localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
      isLoading(false);
      toast.success("User registered successfully!");
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gray-50">
      <Card className="sm:mx-auto sm:w-full sm:max-w-md md:max-w-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl tracking-tight font-bold text-gray-900 text-center">
            Create your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="type"
                  placeholder="Your name"
                  autoComplete="off"
                  disabled={loading}
                  required
                  {...register("name")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="type"
                  placeholder="Your email address"
                  autoComplete="off"
                  disabled={loading}
                  required
                  {...register("email")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="type"
                  placeholder="Your Phone Number"
                  autoComplete="off"
                  disabled={loading}
                  required
                  {...register("phoneNumber")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="profession">Profession</Label>
                <Select
                  required
                  value={profession}
                  onValueChange={(value) => setProfession(value)}
                >
                  <SelectTrigger className="w-full md:max-w-xs xl:max-w-md">
                    <SelectValue placeholder="Choose your profession" />
                  </SelectTrigger>
                  <SelectContent>
                    {professions.map((item) => (
                      <SelectItem value={item} key={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    type={showPass1 ? "text" : "password"}
                    placeholder="Choose a password"
                    autoComplete="off"
                    disabled={loading}
                    required
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
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    required
                    type={showPass2 ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="off"
                    disabled={loading}
                    {...register("confirmPassword")}
                  />
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    type="button"
                    onClick={() => setShowPass2((prev) => !prev)}
                    className="absolute top-0 right-0 flex h-full items-center px-2"
                  >
                    {showPass2 ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center pt-4">
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
            Already have an account?
            <Link
              className={buttonVariants({
                variant: "link",
                className: "px-1",
              })}
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
