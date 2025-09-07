
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
      <div className="p-2 rounded-lg border bg-background/80 backdrop-blur-sm shadow-sm">
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="bg-card border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-400">92%</div>
          </CardContent>
        </Card>
        <Card className="bg-card border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Present Today
            </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-4xl font-bold">28 <span className="text-2xl text-muted-foreground">of 30</span></div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="md:flex-row md:items-center md:justify-between">
            <div>
                <CardTitle>Attendance Overview</CardTitle>
                <CardDescription>
                Track attendance trends over time.
                </CardDescription>
            </div>
            <div className="flex gap-2 rounded-lg bg-muted p-1 mt-4 md:mt-0">
                <Button variant="secondary" size="sm" className="shadow-sm">Week</Button>
                <Button variant="ghost" size="sm">Month</Button>
                <Button variant="ghost" size="sm">All</Button>
            </div>
          </CardHeader>
          <CardContent className="h-[300px] pl-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  cursor={{ fill: "hsl(var(--muted))", opacity: 0.1 }}
                  content={<CustomTooltip />}
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
