"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [adminEmail, setAdminEmail] = useState("prerithm87@gmail.com");
  const [adminPassword, setAdminPassword] = useState("Prolmt@1");
  const [teacherEmail, setTeacherEmail] = useState("teacher@example.com");
  const [teacherPassword, setTeacherPassword] = useState("password");
  const [studentPhone, setStudentPhone] = useState("1234567890");

  const handleLogin = (role: 'admin' | 'teacher' | 'student') => {
    // Hardcoded credentials for demonstration
    const ADMIN_EMAIL = "prerithm87@gmail.com";
    const ADMIN_PASSWORD = "Prolmt@1";
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
        description: `Welcome! Redirecting you to the dashboard.`,
        variant: "default",
        className: "bg-primary text-primary-foreground"
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
     toast({
        title: "Sign Up",
        description: "Sign up functionality is not yet implemented.",
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <Tabs defaultValue="admin" className="w-full max-w-md">
            <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 80" className="h-12 w-auto">
                    {/* Blue lines */}
                    <rect x="0" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))"/>
                    <rect x="25" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))"/>
                    <rect x="50" y="10" width="12" height="30" rx="6" fill="hsl(var(--primary))"/>
                    <rect x="75" y="10" width="12" height="45" rx="6" fill="hsl(var(--primary))"/>
                    {/* Green dots */}
                    <circle cx="104" cy="25" r="8" fill="hsl(var(--accent))"/>
                    <circle cx="104" cy="45" r="8" fill="hsl(var(--accent))"/>
                    <circle cx="126" cy="25" r="8" fill="hsl(var(--accent))"/>
                    {/* Red dot */}
                    <circle cx="104" cy="65" r="8" fill="hsl(var(--destructive))"/>
                  </svg>
                  <span className="text-3xl font-bold text-foreground">AttendEase</span>
                </div>
            </div>
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="teacher">Teacher</TabsTrigger>
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            <TabsContent value="teacher">
                <Card>
                <CardHeader>
                    <CardTitle>Teacher Login</CardTitle>
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
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full" onClick={() => handleLogin('teacher')}>
                        Sign In
                    </Button>
                     <p className="text-xs text-center text-muted-foreground">
                        Don't have an account?{' '}
                        <Button variant="link" size="sm" className="p-0 h-auto" onClick={handleSignUp}>
                            Sign up
                        </Button>
                    </p>
                </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="student">
                <Card>
                <CardHeader>
                    <CardTitle>Student Login</CardTitle>
                    <CardDescription>
                    Enter your phone number to sign in.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="student-phone">Phone Number</Label>
                        <Input id="student-phone" type="tel" placeholder="123-456-7890" value={studentPhone} onChange={(e) => setStudentPhone(e.target.value)} />
                    </div>
                </CardContent>
                 <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full" onClick={() => handleLogin('student')}>
                        Sign In
                    </Button>
                     <p className="text-xs text-center text-muted-foreground">
                        Don't have an account?{' '}
                        <Button variant="link" size="sm" className="p-0 h-auto" onClick={handleSignUp}>
                           Contact Admin
                        </Button>
                    </p>
                </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="admin">
                <Card>
                <CardHeader>
                    <CardTitle>Admin Login</CardTitle>
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
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" onClick={() => handleLogin('admin')}>
                        Sign In
                    </Button>
                </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}
