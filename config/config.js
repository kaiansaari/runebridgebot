
const config = {
EXPRESS_PORT:   process.env.EXPRESS_PORT,
TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
RUNEBRIDGE_API: process.env.RUNEBRIDGE_API,
    strings: {
            "welcome": "*RUNE FAUCET BOT* ⚡️⚡️⚡️\n\n Paste your binance chain testnet address in chat to receive 1000 RUNE up to three times.\n\n*Happy testing!* 🧪⚗️\n\n",
            "start": [
                ["⚡️ Bot Info"],
            ],
            "faucet": "⏳ Preparing the precious runes...",
            "thornode": "🤔 Okay give me your tbnb address..." 
    }
}

exports.config = config;