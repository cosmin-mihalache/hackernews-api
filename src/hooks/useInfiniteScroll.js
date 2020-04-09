/*eslint-disable*/
import { useState, useEffect } from 'react';
import { MAX_STORIES, STORY_INCREMENT } from '../constants/index';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => {
    const scrollToBottom = Math.floor(
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop)
    );
    if (scrollToBottom > 5 || loading) return false;

    setLoading(true);
  }, 300);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT); // 20 + 20 = 40 + 20 scroll
    }
    setLoading(false);
  }, [loading]); //count

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};
