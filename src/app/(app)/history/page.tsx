"use client"

import * as React from "react"
import { CalendarIcon, CheckCircle, Clock, XCircle } from "lucide-react"
import { addDays, format } from "date-fns"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { attendanceRecords, users, groups } from "@/lib/placeholder-data";
import Image from "next/image"

function StatusBadge({ status }: { status: 'present' | 'absent' | 'late' }) {
  const variant = {
    present: 'default',
    absent: 'destructive',
    late: 'secondary',
  }[status] as "default" | "destructive" | "secondary";

  const icon = {
    present: <CheckCircle className="mr-1 h-3 w-3" />,
    absent: <XCircle className="mr-1 h-3 w-3" />,
    late: <Clock className="mr-1 h-3 w-3" />,
  }[status];

  const badgeClass = {
    present: 'bg-green-100 text-green-800 border-green-200',
    absent: 'bg-red-100 text-red-800 border-red-200',
    late: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  }[status];
  
  return (
    <Badge variant="outline" className={cn("capitalize", badgeClass)}>
      {icon}
      {status}
    </Badge>
  );
}


export default function HistoryPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), -7),
    to: new Date(),
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Attendance History</CardTitle>
        <CardDescription>View and filter attendance records.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <Button>Filter</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Group</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceRecords.map((record) => {
              const user = users.find(u => u.id === record.userId);
              const group = groups.find(g => g.id === record.groupId);

              if(!user || !group) return null;

              return (
                <TableRow key={record.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                        <Image
                            className="h-8 w-8 rounded-full"
                            src={user.avatarUrl}
                            alt={user.name}
                            width={32}
                            height={32}
                        />
                        <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{group.name}</TableCell>
                  <TableCell>{format(new Date(record.date), "PPP")}</TableCell>
                  <TableCell className="text-right">
                    <StatusBadge status={record.status} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
