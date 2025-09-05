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
import { Users, QrCode } from "lucide-react";
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <Card key={group.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline">{group.name}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {group.memberIds.length} members
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex -space-x-2 overflow-hidden">
              {group.memberIds.map((memberId) => {
                 const user = users.find(u => u.id === memberId);
                 if (!user) return null;
                 return (
                    <Image
                        key={user.id}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
                        src={user.avatarUrl}
                        alt={user.name}
                        width={32}
                        height={32}
                    />
                 )
              })}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <QrCode className="mr-2 h-4 w-4" />
                  QR Code
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-headline">{group.name} QR Code</DialogTitle>
                   <DialogDescription>
                    Users can scan this code to check-in for this group.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center p-4">
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
              <Button asChild>
                <a>Mark Attendance</a>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
