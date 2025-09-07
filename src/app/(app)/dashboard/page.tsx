
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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const max = data.max;

    return (
      <div className="p-2 rounded-lg border bg-background shadow-sm">
        <p className="font-bold">{label}</p>
        {payload.map((pld: any, index: number) => {
          if (pld.name === 'Present' || pld.name === 'Absent') {
            const percentage = max > 0 ? ((pld.value / max) * 100).toFixed(0) : 0;
            return (
              <p key={index} style={{ color: pld.stroke }}>
                {`${pld.name}: ${pld.value} (${percentage}%)`}
              </p>
            );
          }
          if (pld.name === 'Max') {
            return (
              <p key={index} style={{ color: pld.stroke }}>
                {`${pld.name}: ${pld.value}`}
              </p>
            );
          }
          return null;
        })}
      </div>
    );
  }

  return null;
};

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

      <div className="grid gap-6">
        <Card>
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
                  content={<CustomTooltip />}
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
      </div>
    </div>
  );
}
