import {ITweetMetrics} from "./itweet-metrics";
import {ITweetHashtags} from "./itweet-hashtags";
import {ITweetUrls} from "./itweet-urls";

export interface ITweet {
  id: string,
  text: string,
  created_at: Date,
  attachments: {
    media_keys: Array<string>
  },
  public_metrics: ITweetMetrics,
  entities: {
    hashtags: Array<ITweetHashtags>
    urls: Array<ITweetUrls>
  }
}
