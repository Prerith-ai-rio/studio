"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ReportsPage() {
  const { toast } = useToast();

  const handleExport = (reportType: string) => {
    toast({
      title: "Export Started",
      description: `Your ${reportType} report is being generated and will download shortly.`,
      className: 'bg-primary text-primary-foreground'
    });
    // In a real app, you would trigger the file generation and download here.
    console.log(`Exporting ${reportType} report...`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Report Generation</CardTitle>
          <CardDescription>
            Generate and export attendance and user reports in various formats.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold">Full Attendance Report</h3>
            <p className="text-sm text-muted-foreground">
              Export a detailed log of all attendance records.
            </p>
            <Button onClick={() => handleExport('Attendance (CSV)')}>
              <Download className="mr-2 h-4 w-4" />
              Export as CSV
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed p-8 text-center">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold">User List Report</h3>
            <p className="text-sm text-muted-foreground">
              Export a list of all users and their details.
            </p>
            <Button onClick={() => handleExport('User List (CSV)')}>
              <Download className="mr-2 h-4 w-4" />
              Export as CSV
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
