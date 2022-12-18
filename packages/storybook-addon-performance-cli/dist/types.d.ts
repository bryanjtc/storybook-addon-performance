import type { ResultMap } from 'storybook-addon-performance';
export type Results = {
    [key in keyof ResultMap]: number[];
};
export type ResultsByGroupId = {
    [groupId: string]: Results;
};
export interface Calculation {
    key: string;
    numberOfSamples: number;
    samples: number[];
    minValue: number;
    maxValue: number;
    meanValue: number;
    medianValue: number;
}
export interface CalculationWithDiff {
    key: string;
    diffPercentage: number;
    current: Omit<Calculation, 'key'>;
    baseline: Omit<Calculation, 'key'>;
}
export type CalculationsByGroupId = {
    [groupId: string]: (Calculation | CalculationWithDiff)[];
};
export type ResultType = 'baseline' | 'current';
export type CalculationsByResultType = {
    current: CalculationsByGroupId;
    baseline: CalculationsByGroupId;
};
export declare enum ProcessDescription {
    Calculate = "Mean, median, max calculation",
    Compare = "Current state vs. baseline comparison",
    ADF = "Performance results in ADF"
}
