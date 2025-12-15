import { z } from "zod";
import { type Request, type Response, type NextFunction } from "express";

const articleSchema = z.object({
  title: z.string().min(4, "Title must be at least 4 characters").max(50, "Title must not exceed 50 characters"),
  body: z.string().min(20, "Body must be at least 20 characters"),
  category: z.string().min(3, "Category must be at least 3 characters").max(30, "Category must not exceed 30 characters"),
});

export function validateArticle(req: Request, res: Response, next: NextFunction) {
  const result = articleSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.issues.map((issue) => issue.message),
    });
  }

  next();
}
