import {ITweet} from "./itweet";

export interface ITweetsResponse {
  data: Array<ITweet>;
  meta: {
    newest_id: string;
    next_token: string;
    oldest_id: string;
    result_count: number
  }
}
