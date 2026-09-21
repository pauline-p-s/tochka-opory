'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const ContactDialogContext = createContext<(() => void) | null>(null);

export function useContactDialog() {
  const openContact = useContext(ContactDialogContext);
  if (!openContact) throw new Error('ContactDialog is required');
  return openContact;
}

export function ContactButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const openContact = useContactDialog();
  return (
    <button type="button" className={className} onClick={openContact}>
      {children}
    </button>
  );
}

export default function ContactDialog({ children }: { children: ReactNode }) {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <ContactDialogContext.Provider
      value={() => {
        setSent(false);
        setOpen(true);
      }}
    >
      {children}
      <Dialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (open) setSent(false);
        }}
      >
        <DialogContent className="contact-dialog" showCloseButton={false}>
          <DialogClose
            className="contact-dialog-close"
            aria-label="Закрыть форму"
          >
            <X size={22} />
          </DialogClose>
          <DialogTitle className="contact-dialog-title">
            {sent ? 'Спасибо!' : 'Записаться на консультацию'}
          </DialogTitle>
          <DialogDescription className="contact-dialog-description">
            {sent
              ? 'Мы скоро с вами свяжемся'
              : 'Оставьте контакты — поможем определить, с чего начать'}
          </DialogDescription>
          {sent ? (
            <div className="contact-dialog-success" role="status">
              <Check size={32} aria-hidden="true" />
              <DialogClose className="button green">Закрыть</DialogClose>
            </div>
          ) : (
            <form
              className="contact-dialog-form"
              onSubmit={(event) => {
                event.preventDefault();
                if (event.currentTarget.checkValidity()) {
                  event.currentTarget.reset();
                  setSent(true);
                }
              }}
            >
              <label htmlFor="full-name">Имя</label>
              <Input
                id="full-name"
                name="full-name"
                autoComplete="name"
                placeholder="Ваше имя"
                maxLength={120}
              />
              <label htmlFor="phone">Номер телефона</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+7 (___) ___-__-__"
                required
                minLength={7}
                maxLength={25}
                pattern={'[+0-9\\s\\(\\)\\-]{7,25}'}
              />
              <label htmlFor="email">
                Электронная почта{' '}
                <span className="field-optional">(необязательно)</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="mail@example.ru"
              />
              <button className="button burgundy" type="submit">
                Свяжитесь со мной <ArrowUpRight size={19} />
              </button>
              <p className="form-note">
                Демонстрационная форма. Данные не отправляются и не сохраняются.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}
