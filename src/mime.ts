import path from 'path';

export function getMimeType(filePath: string) {
  switch (path.extname(filePath).substring(1)) {
    case 'gz':
      return 'application/gzip';
    case 'jar':
    case 'war':
    case 'ear':
      return 'application/java-archive';
    case 'ser':
      return 'application/java-serialized-object';
    case 'class':
      return 'application/java-vm';
    case 'js':
    case 'mjs':
      return 'application/javascript';
    case 'json':
    case 'map':
      return 'application/json';
    case 'json5':
      return 'application/json5';
    case 'jsonml':
      return 'application/jsonml+json';
    case 'jsonld':
      return 'application/ld+json';
    case 'webmanifest':
      return 'application/manifest+json';
    case 'cjs':
      return 'application/node';
    case 'bin':
    case 'pkg':
    case 'exe':
    case 'deb':
    case 'dmg':
    case 'iso':
    case 'img':
      return 'application/octet-stream';
    case 'pdf':
      return 'application/pdf';
    case 'mp4s':
    case 'm4p':
      return 'application/mp4';
    case 'doc':
    case 'dot':
      return 'application/msword';
    case 'ogx':
      return 'application/ogg';
    case 'rsd':
      return 'application/rsd+xml';
    case 'rss':
      return 'application/rss+xml';
    case 'rtf':
      return 'application/rtf';
    case 'xhtml':
    case 'xht':
      return 'application/xhtml+xml';
    case 'xlf':
      return 'application/xliff+xml';
    case 'xml':
    case 'xsl':
    case 'xsd':
    case 'rng':
      return 'application/xml';
    case 'zip':
      return 'application/zip';
    case 'm4a':
    case 'mp4a':
      return 'audio/mp4';
    case 'mpga':
    case 'mp2':
    case 'mp2a':
    case 'mp3':
    case 'm2a':
    case 'm3a':
      return 'audio/mpeg';
    case 'oga':
    case 'ogg':
    case 'spx':
    case 'opus':
      return 'audio/ogg';
    case 'sil':
      return 'audio/silk';
    case 'wav':
      return 'audio/wav';
    case 'weba':
      return 'audio/webm';
    case 'ttc':
      return 'font/collection';
    case 'otf':
      return 'font/otf';
    case 'ttf':
      return 'font/ttf';
    case 'woff':
      return 'font/woff';
    case 'woff2':
      return 'font/woff2';
    case 'gif':
      return 'image/gif';
    case 'heic':
      return 'image/heic';
    case 'heics':
      return 'image/heic-sequence';
    case 'heif':
      return 'image/heif';
    case 'heifs':
      return 'image/heif-sequence';
    case 'jp2':
    case 'jpg2':
      return 'image/jp2';
    case 'jpeg':
    case 'jpg':
    case 'jpe':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'svg':
    case 'svgz':
      return 'image/svg+xml';
    case 'tif':
    case 'tiff':
      return 'image/tiff';
    case 'webp':
      return 'image/webp';
    case 'appcache':
    case 'manifest':
      return 'text/cache-manifest';
    case 'ics':
    case 'ifb':
      return 'text/calendar';
    case 'css':
      return 'text/css';
    case 'csv':
      return 'text/csv';
    case 'html':
    case 'htm':
    case 'shtml':
      return 'text/html';
    case 'markdown':
    case 'md':
      return 'text/markdown';
    case 'mml':
      return 'text/mathml';
    case 'txt':
    case 'text':
    case 'conf':
    case 'def':
    case 'list':
    case 'log':
    case 'in':
    case 'ini':
      return 'text/plain';
    case 'rtx':
      return 'text/richtext';
    case 'tsv':
      return 'text/tab-separated-values';
    case 'vcard':
      return 'text/vcard';
    case 'yaml':
    case 'yml':
      return 'text/yaml';
    case 'mp4':
    case 'mp4v':
    case 'mpg4':
      return 'video/mp4';
    case 'mpeg':
    case 'mpg':
    case 'mpe':
    case 'm1v':
    case 'm2v':
      return 'video/mpeg';
    case 'ogv':
      return 'video/ogg';
    case 'qt':
    case 'mov':
      return 'video/quicktime';
    case 'webm':
      return 'video/webm';
  }
}
