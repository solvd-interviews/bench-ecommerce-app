import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/lib/utils/cloudinary";

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    const image = formData.get("image");

    if (image && image instanceof File) {
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64String = buffer.toString("base64");

      const url = await uploadImage("data:image/jpeg;base64," + base64String);

      return NextResponse.json({ url: url }, { status: 201 });
    } else {
      console.error("No valid image uploaded"); // Log if no valid image uploaded
      return NextResponse.json(
        { message: "No valid image uploaded" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error handling upload:"); // Log detailed error message
    return NextResponse.json(
      { message: "Internal server error", error: JSON.stringify(error) },
      { status: 500 }
    );
  }
};
