'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';

interface VideoProps {
    videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
    const [playVideo, setPlayVideo] = useState(false);

    if (!videoId) return null;

    return (
        <Container>
            <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700">
                {!playVideo && (
                    <button
                        onClick={() => setPlayVideo(!playVideo)}
                        className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
                        type="button"
                    />
                )}
                {playVideo && (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="w-full h-full aspect-video"
                    />
                )}
            </div>
        </Container>
    );
}
