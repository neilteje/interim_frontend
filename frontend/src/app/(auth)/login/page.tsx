"use client"; // Add this at the top to make it a Client Component

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for navigation in the app directory
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Router } from "next/router"; // Import Router for programmatic navigation

export default function LoginForm() {
  const [loading, setLoading] = useState(false); // Add loading state
  const router = useRouter();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Grab the entered email and password
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    // Simulate a successful login regardless of the email and password
    setTimeout(() => {
      setLoading(false);
      console.log("Dummy login successful for:", email, password); // Log the email and password
      router.push("/mail"); // Redirect to /mail page after successful login
    }, 1000);
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter any email and password to log in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full">
              <Icons.google className="w-4 h-4 mr-2" />
              Login with Google
            </Button>
            <Button variant="outline" className="w-full">
              <Icons.github className="w-4 h-4 mr-2" />
              Login with GitHub
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
