export interface RegressionModel {
    yValue?: number;
    xValue?: number;
    m: number;
    b: number;
    economicInterpretation: string;
    equation: string;
    rsquared: number;
    standardError: number;
    sumOfx: number;
    sumOfy: number;
    sumOfxy: number;
}