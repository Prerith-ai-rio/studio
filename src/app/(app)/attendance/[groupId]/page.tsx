"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { groups, users as allUsers } from "@/lib/placeholder-data";
import type { AttendanceStatus, User } from "@/lib/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

type MemberAttendance = {
  userId: string;
  status: AttendanceStatus;
};

export default function GroupAttendancePage({ params }: { params: { groupId: string } }) {
  const { toast } = useToast();
  const group = groups.find(g => g.id === params.groupId);

  if (!group) {
    notFound();
  }

  const groupMembers: User[] = group.memberIds.map(id => allUsers.find(u => u.id === id)).filter(Boolean) as User[];
  
  const [attendance, setAttendance] = useState<MemberAttendance[]>(
    groupMembers.map(member => ({ userId: member.id, status: 'present' }))
  );

  const handleStatusChange = (userId: string, status: AttendanceStatus) => {
    setAttendance(prev => 
      prev.map(item => item.userId === userId ? { ...item, status } : item)
    );
  };
  
  const handleSubmit = () => {
    console.log("Submitting attendance:", attendance);
    toast({
        title: "Attendance Submitted",
        description: `Attendance for ${group.name} has been successfully recorded.`,
        variant: 'default',
        className: 'bg-primary text-primary-foreground'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mark Attendance: {group.name}</CardTitle>
        <CardDescription>Select the status for each member below. Today is {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead className="text-center w-[400px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {groupMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={member.avatarUrl}
                          alt={member.name}
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <RadioGroup
                        defaultValue="present"
                        onValueChange={(value) => handleStatusChange(member.id, value as AttendanceStatus)}
                        className="flex justify-center gap-4"
                        value={attendance.find(a => a.userId === member.id)?.status || 'present'}
                      >
                        <Label htmlFor={`${member.id}-present`} className="flex items-center gap-2 cursor-pointer rounded-full border px-4 py-2 has-[:checked]:bg-green-100 has-[:checked]:text-green-900 has-[:checked]:border-green-200 transition-colors">
                          <RadioGroupItem value="present" id={`${member.id}-present`} className="sr-only" />
                          <CheckCircle2 className="w-4 h-4" /> Present
                        </Label>
                        <Label htmlFor={`${member.id}-late`} className="flex items-center gap-2 cursor-pointer rounded-full border px-4 py-2 has-[:checked]:bg-yellow-100 has-[:checked]:text-yellow-900 has-[:checked]:border-yellow-200 transition-colors">
                           <RadioGroupItem value="late" id={`${member.id}-late`} className="sr-only"/>
                          <Clock className="w-4 h-4" /> Late
                        </Label>
                        <Label htmlFor={`${member.id}-absent`} className="flex items-center gap-2 cursor-pointer rounded-full border px-4 py-2 has-[:checked]:bg-red-100 has-[:checked]:text-red-900 has-[:checked]:border-red-200 transition-colors">
                           <RadioGroupItem value="absent" id={`${member.id}-absent`} className="sr-only"/>
                          <XCircle className="w-4 h-4" /> Absent
                        </Label>
                      </RadioGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-end mt-6">
            <Button type="button" onClick={handleSubmit}>
              Submit Attendance
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
