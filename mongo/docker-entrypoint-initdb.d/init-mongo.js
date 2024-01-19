generator = new Mongo().getDB("generator");

live = new Mongo().getDB("lemon");
live.cex_market.createIndex({ exchange: 1, instrument_name: 2 }, { unique: true });
live.candle.createIndex({ exchange: 1, market_symbol: 2, timeframe:3, timestamp: 4}, { unique: true });
