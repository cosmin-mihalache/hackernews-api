/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';

function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
  //  console.log('storyId', storyId);
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a target="_blank" href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="">By:</StoryMetaElement> {story.by}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="">Posted:</StoryMetaElement>
          {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
}
export default Story;
