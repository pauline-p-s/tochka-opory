'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
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
  const [open, setOpen] = useState(false);

  return (
    <ContactDialogContext.Provider
      value={() => {
        setOpen(true);
      }}
    >
      {children}
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="contact-dialog" showCloseButton={false}>
          <DialogClose
            className="contact-dialog-close"
            aria-label="Закрыть форму"
          >
            <X size={22} />
          </DialogClose>
          <DialogTitle className="contact-dialog-title">
            Записаться на консультацию
          </DialogTitle>
          <DialogDescription className="contact-dialog-description">
            Оставьте контакты — поможем определить, с чего начать
          </DialogDescription>
          <form
            className="contact-dialog-form"
            action="https://formsubmit.co/receptiontochkaopori@yandex.ru"
            method="POST"
          >
              <input type="hidden" name="_subject" value="Заявка на консультацию — Точка опоры" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_url" value="https://pauline-p-s.github.io/tochka-opory/" />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
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
                После отправки откроется страница подтверждения.
              </p>
          </form>
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}
