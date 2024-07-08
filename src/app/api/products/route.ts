import { fetchProductsPagination } from "@/lib/utils/products";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");
  console.log("page", limit, page);
  if (!limit || !page) {
    return NextResponse.json(
      { error: "The params are wrong" },
      { status: 400 }
    );
  }

  const { products, totalPages, currentPage } = await fetchProductsPagination(
    parseInt(page),
    parseInt(limit)
  );
  console.log(
    "products, totalPages, currentPage",
    products,
    totalPages,
    currentPage
  );
  return NextResponse.json(
    { products, totalPages, currentPage },
    { status: 200 }
  );
};
