"use server";

import { connectToDatabase } from "../mongoose";

export async function getQuestions(params: any) {
  try {
    connectToDatabase();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
