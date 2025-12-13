type DataUnderstandingBarChartRow = {
  group: string;
  yes: number;
  no: number;
};

type DataUnderstandingChartData = {
    chartData: DataUnderstandingBarChartRow[]
    highlights?: {
        title: string,
        text: string,
        color: string
    }
}

export function getEdaData(bank: string, split: string): DataUnderstandingChartData {
    return {
        chartData: [
            { group: "Primary", yes: 28, no: 72 },
            { group: "Secondary", yes: 41, no: 59 },
            { group: "Tertiary", yes: 52, no: 48 },
            { group: "Unknown", yes: 18, no: 82 },
        ],
        highlights: {
            title: "Highlight 1",
            text: "Text 1",
            color: "red"
        },
    };
}