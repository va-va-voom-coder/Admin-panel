import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve dist folder (Vite build output)
app.use(express.static(path.join(__dirname, "dist")));

// For React Router
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Render will pass PORT
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
