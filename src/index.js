import TinySegmenter from 'tiny-segmenter';
import RakutenMA from 'rakutenma';

global.createRakutenMA = () => {
  const url = 'https://cdn.jsdelivr.net/gh/rakuten-nlp/rakutenma/model_ja.min.json';
  const response = UrlFetchApp.fetch(url);
  const text = response.getContentText('UTF-8');
  const model = JSON.parse(text);
  const rakutenma = new RakutenMA(model);
  rakutenma.featset = RakutenMA.default_featset_ja;
  rakutenma.hash_func = RakutenMA.create_hash_func(15);
  return rakutenma;
}

global.createTinySegmenter = () => {
  return new TinySegmenter();
}
