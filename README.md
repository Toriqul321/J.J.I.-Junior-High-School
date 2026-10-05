# স্কুল পুনর্মিলনী রেজিস্ট্রেশন ওয়েবসাইট

এটি GitHub Pages-এ সরাসরি চালানোর জন্য তৈরি একটি সম্পূর্ণ static website।

## কীভাবে GitHub-এ চালাবেন

1. এই ZIP ফাইলটি Extract করুন।
2. একটি নতুন GitHub repository তৈরি করুন।
3. `index.html`, `styles.css`, `script.js` এবং `assets` folder repository-তে upload করুন।
4. GitHub → Settings → Pages → Deploy from branch → `main` / root নির্বাচন করুন।
5. কিছুক্ষণ পর আপনার GitHub Pages URL-এ ওয়েবসাইটটি চালু হবে।

## গুরুত্বপূর্ণ: রেজিস্ট্রেশন ডাটা

শুধু GitHub Pages ব্যবহার করলে server/database থাকে না। এই package-এ demo হিসেবে visitor-এর নিজের browser-এর `localStorage`-এ registration রাখা হয়।

সবাইয়ের registration একটি Google Sheet-এ সংগ্রহ করতে চাইলে:
- Google Apps Script দিয়ে একটি Web App endpoint তৈরি করুন।
- `script.js`-এর প্রথম দিকে `REGISTRATION_ENDPOINT = ""` এর জায়গায় Web App URL বসান।
- তারপর GitHub-এ `script.js` update করুন।

## বিদ্যালয়ের নাম পরিবর্তন

`index.html`-এ "যে যে আই নিম্ন মাধ্যমিক বিদ্যালয়" লেখা অংশগুলো আপনার বিদ্যালয়ের সঠিক নাম অনুযায়ী পরিবর্তন করা যাবে।
