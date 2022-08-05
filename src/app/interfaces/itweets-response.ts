import { ITweet } from './itweet';

export interface ITweetsResponse {
  data: Array<ITweet>;
  meta: {
    newestId: string;
    nextToken: string;
    oldestId: string;
    resultCount: number;
  };
}
