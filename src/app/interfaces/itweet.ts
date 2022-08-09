import {ITweetMetrics} from './itweet-metrics';
import {ITweetHashtags} from './itweet-hashtags';
import {ITweetUrls} from './itweet-urls';

export interface ITweet {
  id: string;
  text: string;
  createdAt: Date;
  attachments: {
    mediaKeys: Array<string>;
  };
  publicMetrics: ITweetMetrics;
  entities: {
    hashtags: Array<ITweetHashtags>;
    urls: Array<ITweetUrls>;
  };
}
