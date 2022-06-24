import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const imageDirectory = path.join(process.cwd(), "public/images/featured");

export async function getPostsDataByFolder(folderPath: string) {
  // Get file names under /posts
  const subPostsDirectory = path.join(postsDirectory, folderPath);
  const fileNames = fs.readdirSync(subPostsDirectory);
  const allPostsData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(subPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((file) => path.extname(file) == ".md")
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      };
    });
}

export function getAllPhotoFiles() {
  const fileNames = fs.readdirSync(imageDirectory);

  return fileNames
    .filter((file) => path.extname(file) == ".jpg")
    .map((fileName) => {
      return {
        id: fileName,
      };
    });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}