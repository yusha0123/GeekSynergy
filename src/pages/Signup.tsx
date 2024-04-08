import { TextFieldError } from "@/components/Text-Field-Error";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [loading, isLoading] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [profession, setProfession] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      profession: "",
      confirmPassword: "",
    },
  });

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gray-50">
      <Card className="sm:mx-auto sm:w-full sm:max-w-md md:max-w-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl tracking-tight font-bold text-gray-900 text-center">
            Create your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="type"
                  placeholder="Your name"
                  autoComplete="off"
                  disabled={loading}
                  {...register("name", {
                    required: "Name is Required",
                    minLength: {
                      value: 4,
                      message: "Enter a valid name!",
                    },
                  })}
                />
                <TextFieldError error={errors.name?.message} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="type"
                  placeholder="Your email address"
                  autoComplete="off"
                  disabled={loading}
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                <TextFieldError error={errors.email?.message} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="type"
                  placeholder="Your Phone Number"
                  autoComplete="off"
                  disabled={loading}
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                    minLength: {
                      value: 10,
                      message: "Enter a valid phone number!",
                    },
                  })}
                />
                <TextFieldError error={errors.phoneNumber?.message} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="profession">Profession</Label>
                <Select
                  value={profession}
                  onValueChange={(value) => setProfession(value)}
                  {...register("profession", {
                    required: "Profession is Required",
                  })}
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
                <TextFieldError error={errors.profession?.message} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    type={showPass1 ? "text" : "password"}
                    placeholder="********"
                    autoComplete="off"
                    disabled={loading}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
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
                <TextFieldError error={errors.password?.message} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    type={showPass2 ? "text" : "password"}
                    placeholder="********"
                    autoComplete="off"
                    disabled={loading}
                    {...register("confirmPassword", {
                      required: "Password confirmation is required",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords must match",
                    })}
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
                <TextFieldError error={errors.confirmPassword?.message} />
              </div>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
