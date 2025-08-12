
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { PostPreview } from './components/PostPreview';
import { generatePostContent, generatePostImage } from './services/geminiService';
import { PostData, PostInput } from './types';
import { INITIAL_POST_DATA } from './constants';

export default function App() {
  const [postInput, setPostInput] = useState<PostInput>({
    topic: '',
    audience: 'Engineers',
    tone: 'Professional',
    keyInfo: '',
    imagePrompt: '',
  });

  const [generatedPost, setGeneratedPost] = useState<PostData>(INITIAL_POST_DATA);
  const [generatedImage, setGeneratedImage] = useState<string>('https://picsum.photos/seed/linkedin/1200/628');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (action: 'text' | 'image' | 'all') => {
    setIsLoading(true);
    setError(null);
    try {
      if (action === 'text' || action === 'all') {
        setGeneratedPost({ postContent: 'Generating...', hashtags: [] });
        const postData = await generatePostContent(postInput);
        setGeneratedPost(postData);
      }
      if (action === 'image' || action === 'all') {
        if (!postInput.imagePrompt) {
          setError("Please provide a prompt for the image.");
          setIsLoading(false);
          return;
        }
        setGeneratedImage(''); // Clear previous image
        const imageUrl = await generatePostImage(postInput.imagePrompt);
        setGeneratedImage(imageUrl);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      setGeneratedPost(INITIAL_POST_DATA); // Reset on error
    } finally {
      setIsLoading(false);
    }
  }, [postInput]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <InputForm
            postInput={postInput}
            setPostInput={setPostInput}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
          <PostPreview
            postData={generatedPost}
            imageDataUrl={generatedImage}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
}