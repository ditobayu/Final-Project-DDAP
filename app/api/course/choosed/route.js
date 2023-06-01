import Course from "@models/Course";

export const GET = async (request) => {
  try {
    const course = await Course.findById(request.headers.get("id"));
    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
