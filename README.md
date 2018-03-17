# rasp

Toolchain to acquire data from TweetDeck and process it.

This is a full rewrite and replacement for [deckcheck](https://github.com/DeckHack/deckcheck), written
in a more modular approach to easier analyze the acquired data further.

## Setup

### Requirements

* Node.js (at least 7.6.0)

### Prerequisites

* `npm install` to install dependencies  
  _This time it will really take a while, we need to install a version of Chromium for this to work!_

### Configuration

* `discord` contains a block with values related to reporting to a Discord webhook
  * `enabled` to enable to disable the reports to Discord
  * `webhook_url`, the URL of the webhook deckcheck will post to
  * `username`, username of the Bot user it will post as
  * `avatar_url`, avatar of the Bot user it will post as
* `twitter` contains a block with values related to posting a tweet over Twitter
  * `enabled` to enable or disable posts to Twitter
  * the rest of the values are keys you can get from a Twitter application!
* `asset_path`, directory for downloaded assets
* `output_path`, directory for the generated reports
* `output_url`, URL the generated reports will be available (publicly)
* `data_path`, directory path where the data gets written to/read from

### Running

* `npm start`

## Features

* Acquires valuable information from TweetDecks `window.TD` object
* Compares with already existing data
* Creates a HTML report for changed data
* Posts a message into a Discord channel if something changed _(optional)_
* Posts a tweet to Twitter if something changed _(optional)_
* Writes changes to disk

## Writing your own module

It's super easy, for real. Just create a `xx_task.js` file in `lib/modules/` where `xx` is a number that is not taken yet and write a function that resolves a Promise, like so:

```js
// data is what we get from other Promises
module.exports = function (data) {
  return new Promise (function(resolve, reject) {
    // ... do something in here

    // always end with resolve(data), don't reject
    // because we don't handle rejects at all
    resolve(data);
  })
}
```

## Contributing

* [Fork](https://github.com/DeckHack/rasp/fork) and clone the repository
* Make a new branch
* Apply your changes
* Open a [Pull Request](https://github.com/DeckHack/rasp/compare)

## License

rasp is licensed under the MIT License