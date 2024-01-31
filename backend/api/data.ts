import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createReadStream } from 'fs'
import csv from 'csv-parser'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // Read CSV file and convert to JSON
        const rawData = await readCSVFile('data/dataset.csv');

        // Max Value Downsample the data
        const downsampledData = maxDownsample(rawData, 100); // Adjust threshold as needed

        res.json(downsampledData);
    } catch (error) {
        console.error('Error fetching or downsampling data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Max Value Downsampling Function
const maxDownsample = (data: any, threshold: number) => {
    const result = [];
    const segmentSize = Math.ceil(data.length / threshold);

    for (let i = 0; i < data.length; i += segmentSize) {
        const segment = data.slice(i, i + segmentSize);
        const maxProfit = Math.max(...segment.map((entry: { [x: string]: any; }) => entry['Profit Percentage']));

        result.push({ ts: segment[0].Timestamp, pp: maxProfit.toPrecision(4) });
    }

    return result;
};

const readCSVFile = async (filePath: string) => {
    return new Promise((resolve, reject) => {
        const data: any = [];

        createReadStream(filePath)
            .pipe(csv())
            .on('data', (row: any) => {
                data.push(row);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (error: any) => {
                reject(error);
            });
    });
};