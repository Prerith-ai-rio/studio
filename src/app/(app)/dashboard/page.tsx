
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
} from "lucide-react";
import Link from "next/link";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from "recharts";

const attendanceData = [
  { name: "Mon", present: 28, absent: 2, max: 30 },
  { name: "Tue", present: 30, absent: 0, max: 30 },
  { name: "Wed", present: 29, absent: 1, max: 30 },
  { name: "Thu", present: 27, absent: 3, max: 30 },
  { name: "Fri", present: 25, absent: 5, max: 30 },
  { name: "Sat", present: 30, absent: 0, max: 30 },
  { name: "Sun", present: 30, absent: 0, max: 30 },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-full">
          <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2 pt-6">
            <CardTitle className="text-sm font-medium">
              Today's Attendance
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">92%</div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-full">
          <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2 pt-6">
            <CardTitle className="text-sm font-medium">
              Present Today
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-6">
            <div className="text-center">
               <div className="text-2xl font-bold text-green-500">28 of 30</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader className="flex-row items-center justify-between">
            <div>
                <CardTitle>Attendance Overview</CardTitle>
                <CardDescription>
                Track attendance trends over time.
                </CardDescription>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="sm">Week</Button>
                <Button variant="ghost" size="sm">Month</Button>
                <Button variant="ghost" size="sm">All</Button>
            </div>
          </CardHeader>
          <CardContent className="h-[300px] pl-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
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
                <Line
                  type="linear"
                  dataKey="max"
                  stroke="hsl(var(--border))"
                  strokeDasharray="5 5"
                  name="Max"
                  dot={false}
                  strokeWidth={1}
                />
                <Line
                  type="monotone"
                  dataKey="present"
                  stroke="hsl(142.1 76.2% 41.2%)"
                  name="Present"
                  dot={false}
                  strokeWidth={2}
                />
                 <Line
                  type="monotone"
                  dataKey="absent"
                  stroke="hsl(0 84.2% 60.2%)"
                  name="Absent"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
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
