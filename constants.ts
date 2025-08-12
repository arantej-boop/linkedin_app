
import { PostData } from './types';

export const TOPIC_OPTIONS = [
  "New Product Launch",
  "Company Culture Highlight",
  "Industry Trend Analysis",
  "Hiring Announcement",
  "Project Success Story",
  "Technical Deep Dive",
  "Behind the Scenes",
];

export const AUDIENCE_OPTIONS = [
  "Engineers",
  "C-level Executives",
  "Potential Clients",
  "Job Seekers",
  "Industry Peers",
  "Supply Chain Managers",
];

export const TONE_OPTIONS = [
  "Professional",
  "Casual",
  "Technical",
  "Inspirational",
  "Authoritative",
  "Friendly",
];

export const INITIAL_POST_DATA: PostData = {
  postContent: "Your generated LinkedIn post will appear here. Customize the inputs on the left and click 'Generate Post' to get started. You can also generate a unique image to go with your content.",
  hashtags: ["#IndustrialSME", "#Manufacturing", "#B2BMarketing"],
};
