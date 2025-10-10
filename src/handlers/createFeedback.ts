import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";
import { dynamo } from "../utils/dynamoClient";
import type { Feedback } from "../models/feedback";
import type { CreateFeedbackRequest } from "../models/request";

export const handler = async (event: any) => {
  try {
    const data: CreateFeedbackRequest = JSON.parse(event.body);
    const { name, message, rating } = data;

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Message is required" }),
      };
    }

    const feedback: Feedback = {
      id: randomUUID(),
      name: name || "Anonymous",
      message,
      createdAt: new Date().toISOString(),
    };

    await dynamo.send(
      new PutCommand({
        TableName: process.env.FEEDBACK_TABLE,
        Item: feedback,
      })
    );

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Feedback created successfully", feedback }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
