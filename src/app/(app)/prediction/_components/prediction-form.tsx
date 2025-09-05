"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Loader2, WandSparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { predictPotentialAbsences, PredictPotentialAbsencesOutput } from "@/ai/flows/predict-potential-absences";
import { useToast } from "@/hooks/use-toast";
import { getHistoricalDataCSV } from "@/lib/placeholder-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const predictionFormSchema = z.object({
  historicalData: z.string().min(10, {
    message: "Historical data must be at least 10 characters.",
  }),
  dateRange: z.object({
    from: z.date({ required_error: "A start date is required." }),
    to: z.date({ required_error: "An end date is required." }),
  }),
});

type PredictionFormValues = z.infer<typeof predictionFormSchema>;

export function PredictionForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictPotentialAbsencesOutput | null>(null);

  const form = useForm<PredictionFormValues>({
    resolver: zodResolver(predictionFormSchema),
    defaultValues: {
      historicalData: getHistoricalDataCSV(),
      dateRange: {
        from: new Date(),
        to: addDays(new Date(), 7),
      },
    },
  });

  async function onSubmit(data: PredictionFormValues) {
    setLoading(true);
    setResult(null);
    try {
        const dateRangeString = `${format(data.dateRange.from, "yyyy-MM-dd")} to ${format(data.dateRange.to, "yyyy-MM-dd")}`;
        const response = await predictPotentialAbsences({
            historicalData: data.historicalData,
            dateRange: dateRangeString
        });
        setResult(response);
    } catch (error) {
      console.error("Prediction failed:", error);
      toast({
        title: "Prediction Failed",
        description: "An error occurred while generating predictions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  const parsedAbsences = result ? JSON.parse(result.predictedAbsences) : {};
  const parsedConfidence = result ? JSON.parse(result.confidenceReport) : {};

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="historicalData"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Historical Data (CSV)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="userId,date,status..."
                    className="min-h-[150px] font-mono text-xs"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Provide past attendance records. A sample is pre-filled.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Prediction Date Range</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        {field.value.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "LLL dd, y")} -{" "}
                              {format(field.value.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <WandSparkles className="mr-2 h-4 w-4" />
            )}
            Predict Absences
          </Button>
        </form>
      </Form>

      {result && (
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Prediction Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User ID</TableHead>
                                <TableHead>Predicted Absence Dates</TableHead>
                                <TableHead>Confidence</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Object.keys(parsedAbsences).map(userId => (
                                <TableRow key={userId}>
                                    <TableCell className="font-medium">{userId}</TableCell>
                                    <TableCell>
                                        {parsedAbsences[userId].length > 0 
                                            ? parsedAbsences[userId].join(', ')
                                            : 'None'}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Progress value={parsedConfidence[userId] * 100} className="w-32" />
                                            <span>{Math.round(parsedConfidence[userId] * 100)}%</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      )}
    </>
  );
}
