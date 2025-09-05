import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { groups } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function QrCheckinPage({ params }: { params: { groupId: string } }) {
  const group = groups.find(g => g.id === params.groupId);

  if (!group) {
    notFound();
  }
  
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl pt-4">Check-in Successful!</CardTitle>
          <CardDescription>
            You have been successfully checked in for the
            <span className="font-semibold text-foreground"> {group.name}</span> session.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your attendance has been recorded.</p>
          <Button asChild className="mt-6">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
