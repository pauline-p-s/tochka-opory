'use client';

import { useRef, useState } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import Brand from './brand';
import { ContactButton, useContactDialog } from './contact-dialog';

const sections = [
  { href: '#about', title: 'О центре' },
  { href: '#for-whom', title: 'Чем мы можем помочь' },
  { href: '#approach', title: 'Почему Точка опоры' },
  { href: '#route', title: '4 шага к жизни без боли' },
  { href: '#team', title: 'Специалисты' },
  { href: '#space', title: 'Пространство' },
  { href: '#prices', title: 'Стоимость' },
  { href: '#reviews', title: 'Отзывы' },
  { href: '#faq', title: 'Вопросы и ответы' },
  { href: '#contacts', title: 'Как нас найти' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nextAction = useRef<'contact' | string | null>(null);
  const openContact = useContactDialog();

  function closeTo(destination: string) {
    nextAction.current = destination;
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Brand />
        <a className="header-address" href="#contacts">
          <span>Москва, Новопесчаная улица, 20/10к2</span>
          <span>Ежедневно, 9:00–21:00</span>
        </a>
        <ContactButton className="button header-contact">
          <span className="header-contact-long">Связаться с нами</span>
          <span className="header-contact-short">Связаться</span>
          <span aria-hidden="true">↗</span>
        </ContactButton>
        <Dialog.Root
          open={open}
          onOpenChange={setOpen}
          onOpenChangeComplete={(isOpen) => {
            if (isOpen) return;
            const destination = nextAction.current;
            nextAction.current = null;
            if (destination === 'contact') {
              openContact();
            } else if (destination) {
              const target = document.querySelector<HTMLElement>(destination);
              if (target) {
                target.tabIndex = -1;
                target.focus({ preventScroll: true });
                target.scrollIntoView({ behavior: 'instant', block: 'start' });
                window.history.pushState(null, '', destination);
              }
            }
          }}
        >
          <Dialog.Trigger className="menu-toggle" aria-label="Открыть меню">
            <svg
              width="36"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4h30M3 12h30M3 20h30M18 28h15"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="menu-backdrop" />
            <Dialog.Popup className="site-menu" aria-describedby={undefined}>
              <div className="site-menu-inner">
                <div className="site-menu-top">
                  <div
                    onClick={(event) => {
                      event.preventDefault();
                      closeTo('#top');
                    }}
                  >
                    <Brand />
                  </div>
                  <Dialog.Title className="sr-only">Меню сайта</Dialog.Title>
                  <Dialog.Close
                    className="menu-toggle"
                    aria-label="Закрыть меню"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 5 22 22M27 5 5 27"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Dialog.Close>
                </div>
                <div className="site-menu-body">
                  <nav className="site-menu-links" aria-label="Разделы сайта">
                    {sections.map((section) => (
                      <a
                        key={section.href}
                        href={section.href}
                        onClick={(event) => {
                          event.preventDefault();
                          closeTo(section.href);
                        }}
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                  <div className="site-menu-contact">
                    <p className="site-menu-label">Будем рады вас видеть</p>
                    <a
                      href="#contacts"
                      onClick={(event) => {
                        event.preventDefault();
                        closeTo('#contacts');
                      }}
                    >
                      Москва,
                      <br /> Новопесчаная улица,
                      <br /> дом 20/10к2
                    </a>
                    <p>Ежедневно, 9:00–21:00</p>
                    <button
                      className="button menu-contact-button"
                      onClick={() => closeTo('contact')}
                    >
                      Записаться на консультацию{' '}
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
