import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PredictionForm } from "./_components/prediction-form";

export default function PredictionPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">AI-Powered Absence Prediction</CardTitle>
                    <CardDescription>
                        Leverage AI to predict potential absences based on historical data. 
                        Provide historical attendance data in CSV format and select a date range to generate predictions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <PredictionForm />
                </CardContent>
            </Card>
        </div>
    )
}
