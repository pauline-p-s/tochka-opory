const messengers = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/message/NW3ERFGAVOGQC1',
    path: 'M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.4-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.2-.1-.4-.1-.6.2l-.9 1.1c-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.4 1.8.8 2.5.9 3.4.8.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.5Z',
  },
  {
    name: 'MAX',
    href: 'https://max.ru/u/f9LHodD0cOLAtn-7AbmjdD_65fmuBimLTbfeNgj3bAn9e6QPPxF8KhET7Pg',
    path: 'M12 1a11 11 0 0 0-9.6 16.4L1 23l5.6-1.4A11 11 0 1 0 12 1Zm0 5a6 6 0 1 1-4.5 10L7 18l-1-5.5V12a6 6 0 0 1 6-6Z',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/tochkaopory_center',
    path: 'M21.8 2.4 1.9 10.1c-1.4.5-1.4 1.3-.3 1.6l5.1 1.6 2 6.2c.3.7.1 1 .9 1 .6 0 .9-.3 1.2-.6l2.5-2.4 5.2 3.8c1 .5 1.7.2 1.9-.9l3.3-15.6c.3-1.4-.5-2-1.9-1.4ZM8 12.9l11.6-7.3c.6-.4 1.1-.2.7.2l-9.6 8.7-.4 4.3L8 12.9Z',
  },
];

export default function MessengerLinks() {
  return (
    <div className="messenger-links">
      {messengers.map(({ name, href, path }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={path} /></svg>
          {name}
        </a>
      ))}
    </div>
  );
}
