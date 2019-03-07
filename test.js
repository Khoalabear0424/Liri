{ status: 200,
    statusText: 'OK',
    headers:
     { 'content-type': 'application/json',
       'content-length': '17159',
       connection: 'close',
       date: 'Thu, 07 Mar 2019 03:37:01 GMT',
       'x-amzn-requestid': '4509ded2-408a-11e9-8482-bbd19a7f2f5b',
       'access-control-allow-origin': '*',
       'x-amz-apigw-id': 'WJu6rG5uoAMFwGQ=',
       'x-amzn-trace-id': 'Root=1-5c8091dd-0535d4dc393b1d66254684a8;Sampled=0',
       'x-cache': 'Miss from cloudfront',
       via:
        '1.1 3466f1977d0fde72d3b068733212f226.cloudfront.net (CloudFront)',
       'x-amz-cf-id': 'FJpkXnORxIw1ELs3lCeOpvGdvKWcUbNeXm6Fk_5DBiyvAvZOLlstDg==' },
    config:
     { adapter: [Function: httpAdapter],
       transformRequest: { '0': [Function: transformRequest] },
       transformResponse: { '0': [Function: transformResponse] },
       timeout: 0,
       xsrfCookieName: 'XSRF-TOKEN',
       xsrfHeaderName: 'X-XSRF-TOKEN',
       maxContentLength: -1,
       validateStatus: [Function: validateStatus],
       headers:
        { Accept: 'application/json, text/plain, */*',
          'User-Agent': 'axios/0.18.0' },
       method: 'get',
       url:
        'https://rest.bandsintown.com/artists/Drake/events?app_id=codingbootcamp',
       data: undefined },
    request:
     ClientRequest {
       _events:
        { socket: [Function],
          abort: [Function],
          aborted: [Function],
          error: [Function],
          timeout: [Function],
          prefinish: [Function: requestOnPrefinish] },
       _eventsCount: 6,
       _maxListeners: undefined,
       output: [],
       outputEncodings: [],
       outputCallbacks: [],
       outputSize: 0,
       writable: true,
       _last: true,
       chunkedEncoding: false,
       shouldKeepAlive: false,
       useChunkedEncodingByDefault: false,
       sendDate: false,
       _removedConnection: false,
       _removedContLen: false,
       _removedTE: false,
       _contentLength: 0,
       _hasBody: true,
       _trailer: '',
       finished: true,
       _headerSent: true,
       socket:
        TLSSocket {
          _tlsOptions: [Object],
          _secureEstablished: true,
          _securePending: false,
          _newSessionPending: false,
          _controlReleased: true,
          _SNICallback: null,
          servername: 'rest.bandsintown.com',
          alpnProtocol: false,
          authorized: true,
          authorizationError: null,
          encrypted: true,
          _events: [Object],
          _eventsCount: 8,
          connecting: false,
          _hadError: false,
          _handle: [TLSWrap],
          _parent: null,
          _host: 'rest.bandsintown.com',
          _readableState: [ReadableState],
          readable: true,
          _maxListeners: undefined,
          _writableState: [WritableState],
          writable: false,
          allowHalfOpen: false,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: undefined,
          _server: null,
          ssl: [TLSWrap],
          _requestCert: true,
          _rejectUnauthorized: true,
          parser: null,
          _httpMessage: [Circular],
          [Symbol(res)]: [TLSWrap],
          [Symbol(asyncId)]: 8,
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]: null,
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0,
          [Symbol(connect-options)]: [Object] },
       connection:
        TLSSocket {
          _tlsOptions: [Object],
          _secureEstablished: true,
          _securePending: false,
          _newSessionPending: false,
          _controlReleased: true,
          _SNICallback: null,
          servername: 'rest.bandsintown.com',
          alpnProtocol: false,
          authorized: true,
          authorizationError: null,
          encrypted: true,
          _events: [Object],
          _eventsCount: 8,
          connecting: false,
          _hadError: false,
          _handle: [TLSWrap],
          _parent: null,
          _host: 'rest.bandsintown.com',
          _readableState: [ReadableState],
          readable: true,
          _maxListeners: undefined,
          _writableState: [WritableState],
          writable: false,
          allowHalfOpen: false,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: undefined,
          _server: null,
          ssl: [TLSWrap],
          _requestCert: true,
          _rejectUnauthorized: true,
          parser: null,
          _httpMessage: [Circular],
          [Symbol(res)]: [TLSWrap],
          [Symbol(asyncId)]: 8,
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]: null,
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0,
          [Symbol(connect-options)]: [Object] },
       _header:
        'GET /artists/Drake/events?app_id=codingbootcamp HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nUser-Agent: axios/0.18.0\r\nHost: rest.bandsintown.com\r\nConnection: close\r\n\r\n',
       _onPendingData: [Function: noopPendingOutput],
       agent:
        Agent {
          _events: [Object],
          _eventsCount: 1,
          _maxListeners: undefined,
          defaultPort: 443,
          protocol: 'https:',
          options: [Object],
          requests: {},
          sockets: [Object],
          freeSockets: {},
          keepAliveMsecs: 1000,
          keepAlive: false,
          maxSockets: Infinity,
          maxFreeSockets: 256,
          maxCachedSessions: 100,
          _sessionCache: [Object] },
       socketPath: undefined,
       timeout: undefined,
       method: 'GET',
       path: '/artists/Drake/events?app_id=codingbootcamp',
       _ended: true,
       res:
        IncomingMessage {
          _readableState: [ReadableState],
          readable: false,
          _events: [Object],
          _eventsCount: 3,
          _maxListeners: undefined,
          socket: [TLSSocket],
          connection: [TLSSocket],
          httpVersionMajor: 1,
          httpVersionMinor: 1,
          httpVersion: '1.1',
          complete: true,
          headers: [Object],
          rawHeaders: [Array],
          trailers: {},
          rawTrailers: [],
          aborted: false,
          upgrade: false,
          url: '',
          method: null,
          statusCode: 200,
          statusMessage: 'OK',
          client: [TLSSocket],
          _consuming: true,
          _dumped: false,
          req: [Circular],
          responseUrl:
           'https://rest.bandsintown.com/artists/Drake/events?app_id=codingbootcamp',
          redirects: [] },
       aborted: undefined,
       timeoutCb: null,
       upgradeOrConnect: false,
       parser: null,
       maxHeadersCount: null,
       _redirectable:
        Writable {
          _writableState: [WritableState],
          writable: true,
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _options: [Object],
          _ended: true,
          _ending: true,
          _redirectCount: 0,
          _redirects: [],
          _requestBodyLength: 0,
          _requestBodyBuffers: [],
          _onNativeResponse: [Function],
          _currentRequest: [Circular],
          _currentUrl:
           'https://rest.bandsintown.com/artists/Drake/events?app_id=codingbootcamp' },
       [Symbol(isCorked)]: false,
       [Symbol(outHeadersKey)]: { accept: [Array], 'user-agent': [Array],host: [Array] } },
    data:
     [ { offers: [Array],
         venue: [Object],
         datetime: '2019-03-10T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Platinum selling, chart dominating powerhouse Drake has announced the ‘assassination Vacation Tour’ with support from fellow Canadian rapper, singer, songwriter Tory Lanez. \nFresh off the back of his sell out US tour, Drake will be taking his stellar production onto the UK andEurope. The 22-date outing produced by Live Nation kicks off 10th March, 2019 in Manchester with stops to include Paris, Dublin, Birmingham, London, Antwerp, and Amsterdam. The tour announcement follows the record-breaking release of Drake\'s fifth studio album Scorpion which went onto to make history racking up over a billion streams in it’s first week.',
         lineup: [Array],
         id: '1013442640',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442640?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-11T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Platinum selling, chart dominating powerhouse Drake has announced the ‘assassination Vacation Tour’ with support from fellow Canadian rapper, singer, songwriter Tory Lanez. \nFresh off the back of his sell out US tour, Drake will be taking his stellar production onto the UK andEurope. The 22-date outing produced by Live Nation kicks off 10th March, 2019 in Manchester with stops to include Paris, Dublin, Birmingham, London, Antwerp, and Amsterdam. The tour announcement follows the record-breaking release of Drake\'s fifth studio album Scorpion which went onto to make history racking up over a billion streams in it’s first week.',
         lineup: [Array],
         id: '1013442398',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442398?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-13T19:00:00',
         on_sale_datetime: '2019-01-24T09:00:00',
         description: 'DRAKE',
         lineup: [Array],
         id: '1012916612',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1012916612?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-19T18:30:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description: '',
         lineup: [Array],
         id: '1013442697',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442697?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-21T18:30:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description: '',
         lineup: [Array],
         id: '1013442713',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442713?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-22T18:30:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description: '',
         lineup: [Array],
         id: '1013442057',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442057?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-26T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 14 years, under 16 years need a guardian Seated: Under 14 years need a guardian',
         lineup: [Array],
         id: '1013442297',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442297?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-27T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 14 years, under 16 years need a guardian Seated: Under 14 years need a guardian',
         lineup: [Array],
         id: '1013441808',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013441808?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-03-28T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 14 years, under 16 years need a guardian Seated: Under 14 years need a guardian',
         lineup: [Array],
         id: '1013441740',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013441740?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-01T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 16’s permitted. Seated: +16yrs on the floor, Under 15\'s must be accompanied by an adult aged 18+ years.',
         lineup: [Array],
         id: '1013442791',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442791?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-02T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 16’s permitted. Seated: +16yrs on the floor, Under 15\'s must be accompanied by an adult aged 18+ years.',
         lineup: [Array],
         id: '1013442655',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442655?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-04T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 16’s permitted. Seated: +16yrs on the floor, Under 15\'s must be accompanied by an adult aged 18+ years.',
         lineup: [Array],
         id: '1013442670',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442670?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-05T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 16’s permitted. Seated: +16yrs on the floor, Under 15\'s must be accompanied by an adult aged 18+ years.',
         lineup: [Array],
         id: '1013441965',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013441965?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-08T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 16’s permitted. Seated: +16yrs on the floor, Under 15\'s must be accompanied by an adult aged 18+ years.',
         lineup: [Array],
         id: '1013442411',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442411?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-09T00:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 16’s permitted. Seated: +16yrs on the floor, Under 15\'s must be accompanied by an adult aged 18+ years.',
         lineup: [Array],
         id: '1013442665',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442665?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-11T19:00:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description:
          'Standing: No under 16’s permitted. Seated: +16yrs on the floor, Under 15\'s must be accompanied by an adult aged 18+ years.',
         lineup: [Array],
         id: '1013499846',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013499846?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-19T18:30:00',
         on_sale_datetime: '',
         description: '',
         lineup: [Array],
         id: '1013673237',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013673237?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-23T18:30:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description: '',
         lineup: [Array],
         id: '1013442233',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442233?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-25T18:30:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description: '',
         lineup: [Array],
         id: '1013442217',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442217?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-04-26T18:30:00',
         on_sale_datetime: '2019-01-25T09:00:00',
         description: '',
         lineup: [Array],
         id: '1013442499',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013442499?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-05-04T22:00:00',
         on_sale_datetime: '2018-08-29T10:00:01',
         description: '',
         lineup: [Array],
         id: '1013992202',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013992202?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-05-18T22:00:00',
         on_sale_datetime: '2018-08-29T10:00:01',
         description: '',
         lineup: [Array],
         id: '1013958798',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013958798?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' },
       { offers: [Array],
         venue: [Object],
         datetime: '2019-09-27T19:00:00',
         on_sale_datetime: '',
         description: 'A true festival giant',
         lineup: [Array],
         id: '1013679440',
         artist_id: '1488',
         url:
          'https://www.bandsintown.com/e/1013679440?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' } ] }