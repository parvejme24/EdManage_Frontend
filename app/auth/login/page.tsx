"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import BG1 from "@/public/assets/images/bg/bg1.png";
import LOGO from "@/public/assets/images/logo.png";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login Data:", data);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${BG1.src})` }}
    >
      <div className="w-full max-w-lg">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6 border"
          >
            {/* Logo */}
            <div className="flex justify-center">
              <Image src={LOGO} alt="Logo" width={100} height={100} priority />
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-600 -mt-5">
              Login to Your Account
            </h2>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password*</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        {...field}
                      />
                      <button
                        type="button"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </FormControl>

                  {/* Forgot Password */}
                  <div className="mt-1 text-right">
                    <Link
                      href="/auth/forget-password"
                      className="text-sm text-emerald-600 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-[250px] bg-emerald-700 hover:bg-emerald-900"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </div>

            {/* Links */}
            <div className="flex justify-center gap-1 text-sm">
              New to this website?
              <Link
                href="/auth/register"
                className="text-emerald-600 hover:underline"
              >
                Create account
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
