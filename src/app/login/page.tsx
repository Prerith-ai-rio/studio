
"use client";

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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [studentPhone, setStudentPhone] = useState("");

  const handleLogin = (role: 'admin' | 'teacher' | 'student') => {
    // Hardcoded credentials for demonstration
    const ADMIN_EMAIL = "admin@attendease.com";
    const ADMIN_PASSWORD = "password123";
    const TEACHER_EMAIL = "teacher@example.com";
    const TEACHER_PASSWORD = "password";
    const STUDENT_PHONE = "1234567890";

    let isAuthenticated = false;

    if (role === 'admin') {
      if (adminEmail === ADMIN_EMAIL && adminPassword === ADMIN_PASSWORD) {
        isAuthenticated = true;
      }
    } else if (role === 'teacher') {
      if (teacherEmail === TEACHER_EMAIL && teacherPassword === TEACHER_PASSWORD) {
        isAuthenticated = true;
      }
    } else if (role === 'student') {
        if (studentPhone === STUDENT_PHONE) {
            isAuthenticated = true;
        }
    }

    if (isAuthenticated) {
      toast({
        title: "Login Successful",
        description: `Welcome! You are logged in as ${role}.`,
        className: 'bg-primary text-primary-foreground'
      });
      router.push("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSignUp = () => {
    // For now, this can just route to dashboard or show a toast
    // In a real app, this would go to a sign up page or open a modal
     toast({
        title: "Sign Up",
        description: "Sign up functionality is not yet implemented.",
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-10 w-10 text-primary"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 15.17l7.59-7.59L20 9l-9 9z" />
          </svg>
          <h1 className="font-headline text-4xl font-semibold tracking-tight">
            AttendEase
          </h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Welcome! Please log in or sign up to continue.
        </p>
        <Tabs defaultValue="teacher" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="teacher">Teacher</TabsTrigger>
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="teacher">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Teacher Login</CardTitle>
                <CardDescription>
                  Enter your credentials to access the teacher dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teacher-email">Email</Label>
                  <Input id="teacher-email" type="email" placeholder="mail@example.com" value={teacherEmail} onChange={(e) => setTeacherEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacher-password">Password</Label>
                  <Input id="teacher-password" type="password" value={teacherPassword} onChange={(e) => setTeacherPassword(e.target.value)} />
                </div>
                <Button type="submit" className="w-full" onClick={() => handleLogin('teacher')}>
                  Log In
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="student">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Student Login</CardTitle>
                <CardDescription>
                  Enter your phone number to log in.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-phone">Phone Number</Label>
                  <Input id="student-phone" type="tel" placeholder="123-456-7890" value={studentPhone} onChange={(e) => setStudentPhone(e.target.value)} />
                </div>
                <Button type="submit" className="w-full" onClick={() => handleLogin('student')}>
                  Log In
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Admin Login</CardTitle>
                <CardDescription>
                  Enter your admin credentials to continue.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@example.com" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
                </div>
                <Button type="submit" className="w-full" onClick={() => handleLogin('admin')}>
                  Log In
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
           <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Sign Up</CardTitle>
                <CardDescription>
                  Create a new account to get started.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="mail@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" />
                </div>
                <Button type="submit" className="w-full" onClick={handleSignUp}>
                  Create Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
