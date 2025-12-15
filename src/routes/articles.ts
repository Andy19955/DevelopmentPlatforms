import { Router } from "express";
import { pool } from "../database.js";
import { type Article } from "../interfaces.js";
import { validateArticle } from "../middleware/article-validation.js";
import { authenticateToken } from "../middleware/auth-validation.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT
        title,
        body,
        category,
        created_at
      FROM articles
    `);

    const articles = rows as Article[];
    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

router.post("/", authenticateToken, validateArticle, async (req, res) => {
  try {
    const { title, body, category } = req.body;

    if (!title || !body || !category) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const submitted_by = req.user!.id;

    const [result]: any = await pool.execute(
      `INSERT INTO articles (title, body, category, submitted_by)
       VALUES (?, ?, ?, ?)`,
      [title, body, category, submitted_by]
    );

    res.status(201).json({
      message: "Article created",
      article: {
        id: result.insertId,
        title,
        body,
        category,
        user_id: submitted_by,
      },
    });
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({ error: "Failed to create article" });
  }
});

export default router;
