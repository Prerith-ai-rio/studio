import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { groups, users } from "@/lib/placeholder-data";
import { Users, QrCode, ArrowRight } from "lucide-react";
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import Image from "next/image";

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Select a Group</CardTitle>
          <CardDescription>Choose a group to take or view attendance for.</CardDescription>
        </CardHeader>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.id} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1">
                <Users className="h-4 w-4" />
                {group.memberIds.length} members
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex -space-x-2 overflow-hidden">
                {group.memberIds.map((memberId, index) => {
                  if (index > 4) return null;
                   const user = users.find(u => u.id === memberId);
                   if (!user) return null;
                   return (
                      <Image
                          key={user.id}
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                          src={user.avatarUrl}
                          alt={user.name}
                          width={40}
                          height={40}
                      />
                   )
                })}
                {group.memberIds.length > 5 && (
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-muted text-muted-foreground ring-2 ring-background text-xs">
                    +{group.memberIds.length - 5}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <QrCode className="mr-2 h-4 w-4" />
                    Scan QR
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{group.name} QR Code</DialogTitle>
                     <DialogDescription>
                      Users can scan this code to check-in for this group.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-center p-4 bg-white rounded-lg my-4">
                    <Image 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002'}/attendance/qr/${group.id}`}
                      alt={`QR Code for ${group.name}`}
                      width={250}
                      height={250}
                      data-ai-hint="qr code"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Link href={`/attendance/${group.id}`} passHref>
                <Button>
                  Mark Attendance
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
