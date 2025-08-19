```txt
app/
 ├── _layout.tsx           ← Root Stack (Auth + App)
 ├── login.tsx             ← Login Screen
 ├── register.tsx          ← Register Screen
 ├── (app)/_layout.tsx     ← Main App Tabs (Chats / Contacts / Settings)
 │    ├── index.tsx        ← Chats Tab → Chat List
 │    ├── chat/[id].tsx    ← Chat Room (dynamic route for each conversation)
 │    ├── contacts.tsx     ← Contacts Tab
 │    └── settings.tsx     ← Settings Tab

```
