// src/services/instagramService.ts

const accessToken =
  "IGQWRNZAlpLZAWJTOUFaUXY5VXdsd0dCWDJGeGhVM3VBUWExeGk0b1dYR1hCcXFvdUw3N1FsNlVvajl1VEtlVGNjbGgtd2k5S21fWVVUbExvd0EwMFFNQlJ5WmxrTnVfOEtXWmk3UXpIWFRnbG1ZAdlhmbVNuN1ZAJY1UZD";
const userId = "26409885368657340";
const instagramAPIUrl = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`;

export const fetchInstagramPosts = async () => {
  try {
    const response = await fetch(instagramAPIUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts");
    }
    const data = await response.json();
    return data.data; // Return the array of posts
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return [];
  }
};
