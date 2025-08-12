
export interface PostInput {
  topic: string;
  audience: string;
  tone: string;
  keyInfo: string;
  imagePrompt: string;
}

export interface PostData {
  postContent: string;
  hashtags: string[];
}
