"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  AlertCircle,
  BrainCircuit,
} from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const attendanceData = [
  { name: "Mon", present: 28, absent: 2 },
  { name: "Tue", present: 30, absent: 0 },
  { name: "Wed", present: 29, absent: 1 },
  { name: "Thu", present: 27, absent: 3 },
  { name: "Fri", present: 25, absent: 5 },
  { name: "Sat", present: 30, absent: 0 },
  { name: "Sun", present: 30, absent: 0 },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Attendance
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">28 of 30 members present</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Weekly Attendance</CardTitle>
            <CardDescription>
              Overview of attendance for the current week.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pl-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  cursor={{ fill: "hsl(var(--muted))" }}
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar
                  dataKey="present"
                  fill="hsl(var(--primary))"
                  name="Present"
                  radius={[4, 4, 0, 0]}
                />
                 <Bar
                  dataKey="absent"
                  fill="hsl(var(--destructive) / 0.5)"
                  name="Absent"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Navigate to key features.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Link href="/attendance">
              <div className="flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer group">
                <div>
                  <h3 className="font-semibold">Mark Attendance</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                    Take attendance for a group.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
            <Link href="/users">
               <div className="flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer group">
                <div>
                  <h3 className="font-semibold">Manage Users</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                    Add, edit, or remove users.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
             <Link href="/reports">
               <div className="flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer group">
                <div>
                  <h3 className="font-semibold">Generate Reports</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                    Export attendance data.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
