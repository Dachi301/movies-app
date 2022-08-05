import React from 'react'

// styles
import './Footer.css'

var ReactDOM = require('react-dom')

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>Copyright &copy; 2022 Movies App</h2>
        <p className="author">
          Created by{' '}
          <a
            target="_blank"
            href="https://github.com/Dachi301"
            rel="noreferrer"
          >
            @Dachi
          </a>
        </p>
      </div>
      <div>
        <svg fill="none" viewBox="0 0 296 60" height="28">
          <path
            fill="#ffffff"
            d="M89.22 18.7c0-.77-.15-1.5-.45-2.16a8.88 8.88 0 00-1.25-2.07 3.85 3.85 0 01-.86-2.42c0-.26.01-.52.04-.8.05-.28.12-.57.2-.86l2.18.48-.14.65c-.04.2-.05.42-.05.65 0 .27.04.54.12.81.08.28.22.54.43.8.6.78 1.08 1.56 1.42 2.35a6.26 6.26 0 01.07 4.87 5.4 5.4 0 01-5.06 3.24c-.76 0-1.47-.13-2.14-.38a5.17 5.17 0 01-1.78-1.13c-.5-.51-.9-1.15-1.2-1.9a7.56 7.56 0 01-.43-2.66V6.4h2.11v11.85c0 1.41.3 2.48.89 3.2.6.7 1.44 1.05 2.54 1.05 1.06 0 1.88-.35 2.48-1.05.59-.72.88-1.64.88-2.76zm19.23-.8c0 1.2-.16 2.21-.48 3.03-.31.8-.74 1.45-1.27 1.94-.53.48-1.12.83-1.77 1.06a6.55 6.55 0 01-4.28-.1 4.76 4.76 0 01-1.75-1.22 5.82 5.82 0 01-1.13-2.04 9.57 9.57 0 01-.38-2.86c0-.29.03-.61.1-.98.06-.37.14-.74.24-1.1.1-.39.23-.75.36-1.09.14-.33.28-.61.43-.84l1.82.84a5.85 5.85 0 00-.84 3.15c0 1.73.3 2.97.87 3.72.57.73 1.43 1.1 2.56 1.1.52 0 .98-.06 1.4-.19a2.4 2.4 0 001.05-.72c.3-.35.52-.82.68-1.42.16-.59.23-1.34.23-2.25 0-1-.13-1.81-.4-2.45a6.2 6.2 0 00-1.03-1.7c-.42-.48-.87-.93-1.35-1.35a10.3 10.3 0 01-1.34-1.41 7 7 0 01-1.03-1.88 8.04 8.04 0 01-.41-2.76h2.04c0 .93.13 1.72.4 2.38.3.64.64 1.22 1.06 1.75.43.51.89 1 1.37 1.47.5.46.95.96 1.37 1.5a6.71 6.71 0 011.49 4.42zm11.56-11.52c.81 0 1.56.14 2.23.41.67.27 1.25.73 1.73 1.37.5.62.88 1.45 1.15 2.47.27 1.03.4 2.29.4 3.8 0 .7-.01 1.45-.04 2.25s-.12 1.63-.27 2.5c-.14.84-.36 1.7-.64 2.59-.3.88-.68 1.73-1.18 2.57l-1.92-.77a14.6 14.6 0 001.6-4.54 18 18 0 00.25-2.25c.03-.77.05-1.56.05-2.36 0-2.17-.28-3.76-.82-4.77a2.7 2.7 0 00-2.54-1.54c-1.12 0-1.98.5-2.57 1.51-.58 1.01-.87 2.6-.87 4.78 0 .82.02 1.6.05 2.38a15.91 15.91 0 00.77 4.46c.26.74.6 1.5 1.03 2.28l-1.9.82c-.47-.84-.86-1.7-1.15-2.57-.27-.88-.48-1.75-.62-2.6-.13-.86-.2-1.69-.24-2.49-.03-.82-.05-1.57-.05-2.26 0-1.5.13-2.76.39-3.79a6.95 6.95 0 011.12-2.47 4.2 4.2 0 011.76-1.37c.68-.27 1.44-.4 2.28-.4zm18.87 16.13c.73 0 1.42-.14 2.06-.43a4.6 4.6 0 001.66-1.34c.48-.6.84-1.33 1.1-2.21.27-.88.4-1.9.4-3.05 0-2.18-.38-3.84-1.17-5a4.43 4.43 0 00-3.1-2.06h-.07c-.04.53-.07 1.19-.07 1.97 0 .87.03 1.81.07 2.83.07 1.01.16 2 .27 2.96h-2.28a51.65 51.65 0 00.22-7.76h-.08c-1.26.21-2.3.9-3.1 2.1-.78 1.16-1.17 2.82-1.17 4.96 0 1.15.14 2.17.4 3.05a6.8 6.8 0 001.11 2.2 4.6 4.6 0 001.66 1.35c.64.29 1.34.43 2.09.43zm0 1.73a7.6 7.6 0 01-2.74-.5 6.64 6.64 0 01-2.35-1.61 8 8 0 01-1.66-2.71c-.4-1.1-.6-2.42-.6-3.94 0-1.4.17-2.63.5-3.67.36-1.04.82-1.9 1.4-2.6a6.1 6.1 0 012.04-1.6 6.73 6.73 0 012.42-.65h.08l-.27-.77h2.33l-.27.77h.08c.84.06 1.65.28 2.42.65s1.45.9 2.04 1.6c.6.7 1.06 1.56 1.4 2.6.34 1.04.52 2.26.52 3.67 0 1.52-.2 2.83-.62 3.94a8 8 0 01-1.66 2.7 6.37 6.37 0 01-2.35 1.62c-.88.33-1.78.5-2.71.5zm18.88-17.86c.81 0 1.56.14 2.23.41.67.27 1.25.73 1.73 1.37.5.62.88 1.45 1.15 2.47.27 1.03.4 2.29.4 3.8 0 .7 0 1.45-.04 2.25a18.05 18.05 0 01-.91 5.09c-.3.88-.68 1.73-1.18 2.57l-1.92-.77a14.6 14.6 0 001.6-4.54 18 18 0 00.25-2.25c.03-.77.05-1.56.05-2.36 0-2.17-.28-3.76-.82-4.77a2.7 2.7 0 00-2.54-1.54c-1.12 0-1.98.5-2.57 1.51-.58 1.01-.87 2.6-.87 4.78 0 .82.02 1.6.05 2.38a15.91 15.91 0 00.77 4.46c.26.74.6 1.5 1.03 2.28l-1.9.82c-.47-.84-.86-1.7-1.15-2.57-.27-.88-.47-1.75-.62-2.6-.13-.86-.2-1.69-.24-2.49-.03-.82-.05-1.57-.05-2.26 0-1.5.13-2.76.39-3.79a6.95 6.95 0 011.13-2.47 4.2 4.2 0 011.75-1.37c.69-.27 1.45-.4 2.28-.4zm30.75 12.27a6.5 6.5 0 01-.43 2.47 4.94 4.94 0 01-2.9 2.78 6.2 6.2 0 01-2.07.34 5.42 5.42 0 01-3.9-1.66 6.3 6.3 0 01-1.76-4.48c0-.93.16-1.76.48-2.5a5.7 5.7 0 013.05-3.02 5.7 5.7 0 013.7-.17c.5.16 1.03.5 1.55 1h.17l-.05-2.87c0-.5-.04-.9-.12-1.23a1.69 1.69 0 00-.3-.74c-.15-.18-.34-.3-.56-.36-.2-.07-.45-.1-.72-.1-.47 0-.83.15-1.1.46-.28.29-.41.66-.41 1.13v.26c0 .1 0 .22.02.36l.17.77h-2.16a5.87 5.87 0 00.24-1.4c0-.49-.14-.88-.4-1.17-.26-.3-.63-.46-1.09-.46-.27 0-.57.07-.91.2a1.9 1.9 0 00-.84.62l-.72-2.2c.38-.14.78-.2 1.18-.22a13 13 0 011-.05c.77 0 1.34.13 1.7.38.4.24.68.56.87.96h.12a3.03 3.03 0 012.52-1.37c.47 0 .91.08 1.34.24.45.16.84.41 1.18.75.35.33.63.77.84 1.3.2.52.31 1.15.31 1.89v8.09zm-5.4 3.86c1.06 0 1.86-.33 2.4-.98.56-.66.84-1.63.84-2.93V15a4.27 4.27 0 00-.81-.62 3.1 3.1 0 00-.77-.32 3.3 3.3 0 00-.8-.14 15.2 15.2 0 00-.88-.02 3.2 3.2 0 00-2.57 1.12 4.59 4.59 0 00-.96 3.08 4.78 4.78 0 00.96 3.17c.32.38.7.68 1.13.9.45.23.94.34 1.46.34zm17.05 1.73c-.85 0-1.62-.13-2.33-.38a5.45 5.45 0 01-1.77-1.06 5.05 5.05 0 01-1.5-4.49 5.18 5.18 0 01.62-1.92c.2-.32.45-.59.76-.81l1.5 1.15a4.25 4.25 0 00-.74 1.37l-.1.57v.39a3.48 3.48 0 001 2.47 3.58 3.58 0 002.58.98c1.12 0 1.94-.32 2.45-.96.53-.65.8-1.73.8-3.21v-6.9c0-1.2-.24-2.05-.7-2.56-.45-.51-1.23-.77-2.33-.77-.88 0-1.6.21-2.16.63-.54.4-.82.93-.82 1.6 0 .23.03.46.08.7.04.24.16.48.36.72l-1.66.74a2.77 2.77 0 01-.89-2.13c0-.63.12-1.19.36-1.68.24-.5.59-.91 1.03-1.25.45-.34.99-.6 1.61-.77a7 7 0 012.07-.29c.76 0 1.47.1 2.1.32.65.2 1.2.52 1.64.96.46.41.82.94 1.08 1.58.26.62.38 1.36.38 2.2v6.9c0 1.08-.13 2-.4 2.76a4.5 4.5 0 01-1.1 1.82c-.49.46-1.06.8-1.74 1a7.2 7.2 0 01-2.18.32zm16.97-17.86c.82 0 1.56.14 2.24.41.67.27 1.25.73 1.72 1.37.5.62.88 1.45 1.16 2.47.27 1.03.4 2.29.4 3.8 0 .7-.01 1.45-.04 2.25a18.05 18.05 0 01-.91 5.09c-.3.88-.69 1.73-1.18 2.57l-1.92-.77a14.6 14.6 0 001.6-4.54 18 18 0 00.25-2.25c.03-.77.05-1.56.05-2.36 0-2.17-.28-3.76-.82-4.77a2.7 2.7 0 00-2.55-1.54c-1.12 0-1.97.5-2.56 1.51-.58 1.01-.87 2.6-.87 4.78 0 .82.02 1.6.05 2.38a15.91 15.91 0 00.77 4.46c.25.74.6 1.5 1.03 2.28l-1.9.82c-.47-.84-.86-1.7-1.15-2.57-.27-.88-.48-1.75-.62-2.6-.13-.86-.2-1.69-.24-2.49-.03-.82-.05-1.57-.05-2.26 0-1.5.13-2.76.38-3.79a6.95 6.95 0 011.13-2.47 4.2 4.2 0 011.75-1.37c.7-.27 1.45-.4 2.28-.4zm17.44 16.13a5 5 0 001.48-.21c.48-.15.9-.36 1.25-.65.35-.3.63-.7.84-1.18a5.52 5.52 0 00-.58-4.75 3.38 3.38 0 00-.86-.91 1.64 1.64 0 00-.93-.34h-2.33v-1.65h2.45a1.77 1.77 0 001.2-.46 2.36 2.36 0 00.48-2.42c-.1-.26-.27-.5-.5-.75a3.88 3.88 0 00-.97-.67c-.4-.2-.9-.4-1.49-.55l.94-1.73c.6.24 1.14.5 1.66.8.52.26.98.58 1.36.93.39.33.68.71.9 1.13.22.4.33.84.33 1.32 0 .38-.03.73-.1 1.05a2.57 2.57 0 01-1 1.56c-.3.21-.66.41-1.11.6v.15c2 .84 3 2.48 3 4.9a5.3 5.3 0 01-1.73 4 5.8 5.8 0 01-1.92 1.15c-.73.27-1.53.41-2.4.41-.8 0-1.55-.15-2.25-.46a5.93 5.93 0 01-1.88-1.34 6.4 6.4 0 01-1.3-2.09 7.79 7.79 0 01-.45-2.73v-2.38-1.78c.02-.7.06-1.45.12-2.25.07-.8.17-1.62.31-2.45.16-.83.38-1.62.65-2.35l1.95.67a16.48 16.48 0 00-.82 4.2c-.05.64-.08 1.26-.1 1.85v4.58c0 .79.1 1.47.32 2.07.2.59.48 1.1.84 1.5a3.48 3.48 0 002.64 1.22zm23.1-4.6c0 1.2-.17 2.2-.49 3.02-.32.8-.74 1.45-1.27 1.94-.53.48-1.12.83-1.77 1.06a6.55 6.55 0 01-4.28-.1 4.76 4.76 0 01-1.75-1.22 5.82 5.82 0 01-1.13-2.04 9.57 9.57 0 01-.38-2.86c0-.29.03-.61.1-.98.06-.37.14-.74.24-1.1.1-.39.23-.75.36-1.09.14-.33.28-.61.43-.84l1.82.84a5.85 5.85 0 00-.84 3.15c0 1.73.29 2.97.87 3.72.57.73 1.43 1.1 2.56 1.1.52 0 .98-.06 1.4-.19a2.4 2.4 0 001.05-.72c.29-.35.51-.82.67-1.42.16-.59.24-1.34.24-2.25 0-1-.13-1.81-.4-2.45a6.2 6.2 0 00-1.04-1.7c-.41-.48-.86-.93-1.34-1.35a10.3 10.3 0 01-1.34-1.41 7 7 0 01-1.04-1.88 8.04 8.04 0 01-.4-2.76h2.04c0 .93.13 1.72.4 2.38.3.64.64 1.22 1.06 1.75.43.51.89 1 1.37 1.47.5.46.95.96 1.37 1.5a6.71 6.71 0 011.49 4.42zm11.45-9.8c-.88 0-1.57.18-2.06.53-.5.35-.75.86-.75 1.54a5.26 5.26 0 00.2.98l-2.05.46-.28-1.44c0-.55.1-1.05.33-1.52.24-.46.57-.86.99-1.2.43-.33.95-.6 1.56-.79a7.33 7.33 0 014.15 0c.65.2 1.21.47 1.68.84.48.35.85.79 1.1 1.3a3.8 3.8 0 01-.22 3.82 4.03 4.03 0 01-1.99 1.48v.12c.6.23 1.08.53 1.47.91.38.39.68.8.88 1.23.23.43.38.85.46 1.27.1.42.15.77.15 1.06 0 1.92-.5 3.32-1.52 4.22a5.82 5.82 0 01-4 1.32 6.5 6.5 0 01-2.29-.38 5.1 5.1 0 01-1.75-1.1 5.09 5.09 0 01-1.13-1.76c-.25-.7-.38-1.5-.38-2.38 0-.4.09-.86.26-1.39.2-.54.56-1.08 1.1-1.6l1.47 1.1c-.32.37-.52.74-.6 1.13a4.7 4.7 0 00-.12.88c0 1.25.3 2.2.92 2.84a3.4 3.4 0 002.51.93c.52 0 .98-.06 1.4-.19a2.4 2.4 0 001.05-.65c.3-.3.51-.7.67-1.2a6 6 0 00.25-1.82c0-.58-.12-1.1-.34-1.56a4.01 4.01 0 00-1.92-1.95c-.37-.19-.7-.28-1-.28h-1.6v-1.68h1.76c.2 0 .44-.02.74-.05a2.36 2.36 0 001.68-1.15c.23-.36.34-.84.34-1.47 0-.62-.26-1.17-.77-1.65-.51-.5-1.3-.75-2.35-.75zm20.53 10.59c0-.77-.16-1.5-.46-2.16a8.88 8.88 0 00-1.25-2.07 3.85 3.85 0 01-.86-2.42c0-.26.01-.52.05-.8s.1-.57.19-.86l2.18.48-.14.65c-.03.2-.05.42-.05.65 0 .27.04.54.12.81.08.28.22.54.43.8.61.78 1.08 1.56 1.42 2.35a6.26 6.26 0 01.07 4.87 5.4 5.4 0 01-5.06 3.24c-.76 0-1.47-.13-2.14-.38a5.17 5.17 0 01-1.78-1.13c-.5-.51-.9-1.15-1.2-1.9a7.56 7.56 0 01-.43-2.66V6.4h2.11v11.85c0 1.41.3 2.48.9 3.2.58.7 1.43 1.05 2.54 1.05 1.05 0 1.88-.35 2.47-1.05.59-.72.89-1.64.89-2.76zM87.55 54h-2.19V39.55L81 41.15V39.2l6.21-2.33h.34V54zm15.97-12.6c0 .84-.22 1.6-.68 2.26a4.54 4.54 0 01-1.81 1.56c.89.39 1.59.94 2.1 1.68.53.73.8 1.56.8 2.5 0 1.47-.5 2.65-1.5 3.52-1 .88-2.31 1.31-3.94 1.31a5.75 5.75 0 01-3.94-1.3 4.5 4.5 0 01-1.48-3.54c0-.92.25-1.75.75-2.5.5-.73 1.2-1.3 2.1-1.68a4.47 4.47 0 01-1.8-1.56 4.02 4.02 0 01-.65-2.26c0-1.44.46-2.58 1.38-3.42a5.19 5.19 0 013.64-1.27c1.5 0 2.72.42 3.64 1.27a4.4 4.4 0 011.4 3.42zm-1.77 7.95c0-.96-.3-1.73-.91-2.33-.6-.6-1.4-.9-2.37-.9-.98 0-1.76.29-2.35.88a3.2 3.2 0 00-.88 2.35c0 .97.28 1.73.85 2.28.58.56 1.38.83 2.4.83a3.3 3.3 0 002.4-.83c.57-.56.86-1.32.86-2.28zM98.5 38.48a2.8 2.8 0 00-2.07.8 2.9 2.9 0 00-.78 2.15c0 .86.25 1.57.77 2.1.52.54 1.22.8 2.08.8.87 0 1.56-.26 2.08-.8a2.9 2.9 0 00.78-2.1 2.9 2.9 0 00-.8-2.13 2.76 2.76 0 00-2.06-.82zm13.88 6.37h4.75v2.05h-4.76v5.39h-2.17v-5.4h-4.76v-2.04h4.75v-4.98h2.18v4.98zm22.83-8.59a4.9 4.9 0 011.85 1.83c.32.62.48 1.27.48 1.94a3.25 3.25 0 01-.53 1.73 4.84 4.84 0 01-1.97 1.66v.12a4.57 4.57 0 012.06 1.85c.28.43.48.9.63 1.43.16.52.24 1.06.24 1.64 0 1.96-.5 3.42-1.49 4.36a5.57 5.57 0 01-4 1.42c-.85 0-1.62-.13-2.31-.38a5.62 5.62 0 01-1.75-1.1 5.2 5.2 0 01-1.52-3.87 4.9 4.9 0 01.72-2.52c.2-.3.43-.56.7-.77l1.54 1.13c-.42.46-.66.89-.72 1.27-.07.37-.1.66-.1.89 0 1.1.3 1.98.89 2.64.6.65 1.44.98 2.54.98s1.94-.32 2.5-.96c.57-.64.86-1.66.86-3.07 0-.5-.1-1-.28-1.49a5.47 5.47 0 00-1.73-2.35c-.35-.26-.7-.38-1.03-.38h-2.07v-1.7h2.09a2.9 2.9 0 001.73-.62 2.24 2.24 0 00.84-1.72c0-.38-.1-.76-.27-1.12a3.01 3.01 0 00-1.15-1.16l1.25-1.68zm21.46.12a4.1 4.1 0 013.46 1.85c.44.64.8 1.47 1.05 2.47a17.98 17.98 0 01.14 6.67c-.15.92-.38 1.77-.66 2.57-.28.8-.6 1.56-.99 2.26-.37.7-.77 1.38-1.2 2.04l-1.92-.77c.47-.73.88-1.43 1.25-2.09a12.65 12.65 0 001.49-4.42c.13-.86.19-1.86.19-3.02 0-.97-.07-1.83-.22-2.56a6.07 6.07 0 00-.62-1.83 2.85 2.85 0 00-.94-1.08 2 2 0 00-1.15-.36c-.45 0-.85.06-1.2.17-.34.11-.62.37-.86.77-.24.38-.43.94-.55 1.68-.13.73-.2 1.73-.2 2.97v.75a34.2 34.2 0 00.22 3.17h-2.33a57.3 57.3 0 00.24-4.13v-.96c0-1.03-.09-1.83-.26-2.43-.18-.59-.4-1.03-.67-1.32-.28-.3-.57-.48-.9-.55a3.85 3.85 0 00-.93-.12c-.41 0-.8.09-1.17.27-.36.17-.67.48-.94.93a6.33 6.33 0 00-.63 1.8 22.53 22.53 0 00-.05 5.71 13.84 13.84 0 001.42 4.54c.36.69.77 1.38 1.25 2.09l-1.92.79c-.43-.67-.84-1.34-1.22-2-.37-.66-.7-1.38-.99-2.13a15.65 15.65 0 01-.86-5.71 15 15 0 01.38-3.65c.26-1.02.61-1.85 1.06-2.5.45-.65.97-1.12 1.58-1.41.63-.3 1.3-.46 2.02-.46.35 0 .7.03 1.03.08a3.16 3.16 0 011.85.8c.27.23.52.55.74.95h.24a3 3 0 011.7-1.54c.34-.13.69-.2 1.04-.24.35-.03.7-.05 1.03-.05zm12.96 6.87h.16c.2-.2.44-.36.72-.5a4.6 4.6 0 011.83-.51 5.34 5.34 0 012.93.34 5.57 5.57 0 012.9 3.07c.3.72.46 1.53.46 2.45 0 .9-.16 1.75-.46 2.52-.3.75-.71 1.4-1.22 1.94a5.25 5.25 0 01-3.84 1.68c-.8 0-1.54-.12-2.21-.36a5.1 5.1 0 01-2.93-2.88 6.89 6.89 0 01-.4-2.45V41.4c0-1.7.4-2.95 1.2-3.77a4.46 4.46 0 013.33-1.25h5.73v2.12l-4.72-.39a1.56 1.56 0 00-.36-.02h-.3c-.54 0-1 .08-1.36.24-.35.14-.63.37-.84.7-.2.3-.36.69-.46 1.17-.08.48-.12 1.05-.12 1.7l-.04 1.35zm3.48 9.26a2.94 2.94 0 002.47-1.27c.29-.4.5-.86.65-1.4.16-.54.24-1.12.24-1.74 0-1.25-.28-2.26-.84-3.03a2.8 2.8 0 00-2.43-1.17 7.04 7.04 0 00-2.59.52c-.32.15-.63.35-.94.6v3.68c0 .56.08 1.07.24 1.53a3.31 3.31 0 003.2 2.28zm18.87 0c.73 0 1.42-.14 2.06-.43a4.6 4.6 0 001.66-1.34c.48-.6.84-1.33 1.1-2.21.27-.88.4-1.9.4-3.05 0-2.18-.38-3.84-1.17-5a4.43 4.43 0 00-3.1-2.06h-.06c-.05.53-.08 1.19-.08 1.97 0 .87.03 1.81.07 2.83.07 1.01.16 2 .27 2.96h-2.28a51.65 51.65 0 00.22-7.76h-.08c-1.26.21-2.3.9-3.1 2.1-.78 1.16-1.17 2.82-1.17 4.96 0 1.15.14 2.17.4 3.05a6.8 6.8 0 001.11 2.2 4.6 4.6 0 001.66 1.35c.64.29 1.34.43 2.09.43zm0 1.73a7.6 7.6 0 01-2.74-.5 6.64 6.64 0 01-2.35-1.61 8 8 0 01-1.66-2.71c-.4-1.1-.6-2.42-.6-3.94 0-1.4.17-2.63.5-3.67.36-1.04.82-1.9 1.4-2.6a6.1 6.1 0 012.04-1.6 6.73 6.73 0 012.42-.65h.08l-.27-.77h2.33l-.27.77h.08c.84.06 1.65.28 2.42.65s1.45.9 2.04 1.6c.6.7 1.06 1.56 1.4 2.6.34 1.04.52 2.26.52 3.67 0 1.52-.2 2.83-.62 3.94a8 8 0 01-1.66 2.7 6.37 6.37 0 01-2.35 1.62c-.88.33-1.78.5-2.71.5zm18.97 0c-.84 0-1.62-.13-2.32-.38a5.45 5.45 0 01-1.78-1.06 5.05 5.05 0 01-1.49-4.49 5.18 5.18 0 01.62-1.92c.2-.32.45-.59.75-.81l1.51 1.15a4.25 4.25 0 00-.74 1.37c-.05.2-.08.4-.1.57v.39a3.48 3.48 0 00.99 2.47 3.58 3.58 0 002.59.98c1.12 0 1.93-.32 2.45-.96.52-.65.79-1.73.79-3.21v-6.9c0-1.2-.23-2.05-.7-2.56-.45-.51-1.22-.77-2.33-.77-.88 0-1.6.21-2.16.63-.54.4-.81.93-.81 1.6 0 .23.02.46.07.7.05.24.17.48.36.72l-1.66.74a2.77 2.77 0 01-.88-2.13c0-.63.12-1.19.36-1.68.24-.5.58-.91 1.03-1.25.45-.34.98-.6 1.6-.77a7 7 0 012.07-.29c.77 0 1.47.1 2.11.32.64.2 1.19.52 1.63.96.47.41.83.94 1.08 1.58.26.62.39 1.36.39 2.2v6.9c0 1.08-.14 2-.41 2.76a4.5 4.5 0 01-1.1 1.82c-.48.46-1.06.8-1.73 1a7.2 7.2 0 01-2.19.32zm13.5-11h.17c.19-.18.43-.35.72-.5a4.6 4.6 0 011.82-.5 5.34 5.34 0 012.93.34c.66.27 1.23.67 1.73 1.2a6.24 6.24 0 011.63 4.32c0 .9-.15 1.75-.46 2.52-.3.75-.7 1.4-1.22 1.94a5.25 5.25 0 01-3.84 1.68c-.8 0-1.54-.12-2.2-.36a5.1 5.1 0 01-2.94-2.88 6.89 6.89 0 01-.4-2.45V41.4c0-1.7.4-2.95 1.2-3.77a4.46 4.46 0 013.33-1.25h5.74v2.12l-4.73-.39a1.56 1.56 0 00-.36-.02h-.29c-.54 0-1 .08-1.37.24-.35.14-.63.37-.84.7-.2.3-.36.69-.45 1.17-.08.48-.12 1.05-.12 1.7l-.05 1.35zm3.48 9.27a2.94 2.94 0 002.47-1.27c.29-.4.5-.86.65-1.4.16-.54.24-1.12.24-1.74 0-1.25-.28-2.26-.84-3.03A2.8 2.8 0 00228 43.9a7.04 7.04 0 00-2.59.52c-.32.15-.63.35-.93.6v3.68c0 .56.08 1.07.24 1.53.16.47.38.87.67 1.2a3.31 3.31 0 002.52 1.08zm18.87 0c.74 0 1.42-.14 2.06-.43a4.6 4.6 0 001.66-1.34c.48-.6.85-1.33 1.1-2.21.28-.88.41-1.9.41-3.05 0-2.18-.39-3.84-1.17-5a4.43 4.43 0 00-3.1-2.06h-.07c-.05.53-.07 1.19-.07 1.97 0 .87.02 1.81.07 2.83.06 1.01.15 2 .26 2.96h-2.28a51.65 51.65 0 00.22-7.76h-.07c-1.27.21-2.3.9-3.1 2.1-.78 1.16-1.18 2.82-1.18 4.96 0 1.15.14 2.17.41 3.05a6.8 6.8 0 001.1 2.2 4.6 4.6 0 001.66 1.35c.64.29 1.34.43 2.09.43zm0 1.73a7.6 7.6 0 01-2.74-.5 6.64 6.64 0 01-2.35-1.61 8 8 0 01-1.65-2.71c-.4-1.1-.6-2.42-.6-3.94 0-1.4.16-2.63.5-3.67.35-1.04.82-1.9 1.4-2.6a6.1 6.1 0 012.03-1.6 6.73 6.73 0 012.43-.65h.07l-.27-.77h2.33l-.26.77h.07c.85.06 1.66.28 2.42.65.77.37 1.45.9 2.04 1.6.6.7 1.06 1.56 1.4 2.6.35 1.04.52 2.26.52 3.67 0 1.52-.2 2.83-.62 3.94a8 8 0 01-1.66 2.7 6.37 6.37 0 01-2.35 1.62c-.88.33-1.78.5-2.71.5zm22.24-5.54c0-.77-.15-1.5-.46-2.16a8.88 8.88 0 00-1.24-2.07 3.85 3.85 0 01-.87-2.42c0-.26.02-.52.05-.8.05-.28.11-.57.2-.86l2.18.48-.15.65c-.03.2-.05.42-.05.65 0 .27.04.54.12.81.08.28.23.54.44.8.6.78 1.08 1.56 1.41 2.35a6.26 6.26 0 01.07 4.87 5.4 5.4 0 01-5.06 3.24c-.75 0-1.46-.13-2.14-.38a5.17 5.17 0 01-1.77-1.13c-.5-.51-.9-1.15-1.2-1.9a7.56 7.56 0 01-.43-2.66V36.4h2.1v11.85c0 1.41.3 2.48.9 3.2.59.7 1.44 1.05 2.54 1.05 1.06 0 1.88-.35 2.47-1.05.6-.72.89-1.64.89-2.76z"
          ></path>
          <path
            fill="#ffffff"
            d="M18.98 40.22v-16.3h-3.77v-4.17h8.97v20.47h-5.2zM43.7 25.04c0 1.78-.96 3.35-2.56 4.23a5.6 5.6 0 013.64 5.17c0 3.67-3.26 6-8.37 6-5.11 0-8.38-2.3-8.38-5.92 0-2.33 1.52-4.32 3.88-5.25a5.14 5.14 0 01-2.83-4.38c0-3.27 2.86-5.34 7.3-5.34 4.5 0 7.32 2.13 7.32 5.49zM32.93 34c0 1.72 1.23 2.68 3.48 2.68 2.24 0 3.5-.93 3.5-2.68 0-1.7-1.26-2.66-3.5-2.66-2.25 0-3.48.96-3.48 2.66zm.53-8.67c0 1.46 1.05 2.27 2.95 2.27 1.9 0 2.94-.81 2.94-2.27 0-1.52-1.05-2.37-2.94-2.37-1.9 0-2.95.85-2.95 2.37z"
          ></path>
          <path
            fill="#ffffff"
            d="M53.43 22.06A24.76 24.76 0 0130 54.73 24.76 24.76 0 015.27 30 24.76 24.76 0 0137.94 6.57v-5.5A30.03 30.03 0 000 30c0 16.53 13.46 30 30 30a30.03 30.03 0 0028.94-37.95h-5.5z"
          ></path>
          <path
            fill="#ffffff"
            d="M51.94 8.05V2.29H47.8v5.76h-5.72v4.13h5.72v5.75h4.14v-5.75h5.75V8.05h-5.75z"
          ></path>
        </svg>
      </div>
    </footer>
  )
}
