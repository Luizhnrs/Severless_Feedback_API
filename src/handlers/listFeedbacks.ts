import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { dynamo } from "../utils/dynamoClient";
import type { Feedback } from "../models/feedback";

export const handler = async (event: any) => {
  try {
    const result = await dynamo.send(
      new ScanCommand({
        TableName: process.env.FEEDBACK_TABLE,
      })
    );

    const feedbacks: Feedback[] = (result.Items || []) as Feedback[];

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Feedbacks retrieved successfully",
        count: feedbacks.length,
        feedbacks,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
