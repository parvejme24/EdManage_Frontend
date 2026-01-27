"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
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
import { FaEye, FaEyeSlash } from "react-icons/fa";

type ForgotPasswordFormValues = {
  email: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: "",
      otp: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, watch, setError } = form;
  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  // --- Fake API Calls (replace with your backend)
  const sendOtp = async (email: string) =>
    new Promise((resolve) => setTimeout(resolve, 1000));
  const verifyOtp = async (otp: string) =>
    new Promise<boolean>((resolve) =>
      setTimeout(() => resolve(otp === "123456"), 1000)
    );
  const resetPassword = async (password: string) =>
    new Promise((resolve) => setTimeout(resolve, 1000));

  // --- Step Handlers
  const onSubmitEmail = async (data: ForgotPasswordFormValues) => {
    setLoading(true);
    try {
      await sendOtp(data.email);
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitOtp = async (data: ForgotPasswordFormValues) => {
    setLoading(true);
    try {
      const valid = await verifyOtp(data.otp);
      if (valid) setStep(3);
      else setError("otp", { type: "manual", message: "Invalid OTP" });
    } finally {
      setLoading(false);
    }
  };

  const onSubmitPassword = async (data: ForgotPasswordFormValues) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", { type: "manual", message: "Passwords do not match" });
      return;
    }
    setLoading(true);
    try {
      await resetPassword(data.newPassword);
      alert("Password reset successfully! Please login.");
      // redirect to login page if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${BG1.src})` }}
    >
      <div className="w-full max-w-lg">
        <Form {...form}>
          {/* Step 1 – Email */}
          {step === 1 && (
            <form
              onSubmit={handleSubmit(onSubmitEmail)}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6 border"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-600">
                Forgot Password
              </h2>

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
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-900"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Next"}
              </Button>

              <div className="text-center text-sm">
                Remembered your password?{" "}
                <Link href="/auth/login" className="text-emerald-600 hover:underline">
                  Login
                </Link>
              </div>
            </form>
          )}

          {/* Step 2 – OTP */}
          {step === 2 && (
            <form
              onSubmit={handleSubmit(onSubmitOtp)}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6 border"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-600">
                Verify OTP
              </h2>

              <FormField
                control={form.control}
                name="otp"
                rules={{ required: "OTP is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter OTP*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter OTP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-900"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
            </form>
          )}

          {/* Step 3 – Reset Password */}
          {step === 3 && (
            <form
              onSubmit={handleSubmit(onSubmitPassword)}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6 border"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-600">
                Reset Password
              </h2>

              <FormField
                control={form.control}
                name="newPassword"
                rules={{
                  required: "New password is required",
                  minLength: { value: 6, message: "Password must be 6+ characters" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          {...field}
                        />
                        <button
                          type="button"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                rules={{ required: "Confirm password is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password*</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Retype new password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-900"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}
