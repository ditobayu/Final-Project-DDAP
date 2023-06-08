import { connectToDB } from "@utils/database";
import Discussion from "@models/Discussion";

export const GET = async (request) => {
  try {
    await connectToDB();

    const discussions = await Discussion.find();
    return new Response(JSON.stringify(discussions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
