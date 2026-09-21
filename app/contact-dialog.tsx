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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  return (
    <ContactDialogContext.Provider
      value={() => {
        setSent(false);
        setError('');
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
              onSubmit={async (event) => {
                event.preventDefault();
                if (sending || !event.currentTarget.checkValidity()) return;
                const form = event.currentTarget;
                const fields = new FormData(form);
                setSending(true);
                setError('');
                try {
                  const response = await fetch('https://formsubmit.co/ajax/receptiontochkaopori@yandex.ru', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({
                      name: fields.get('full-name'),
                      phone: fields.get('phone'),
                      email: fields.get('email'),
                      _honey: fields.get('_honey'),
                      _subject: 'Заявка на консультацию — Точка опоры',
                      _template: 'table',
                    }),
                    signal: AbortSignal.timeout(20000),
                  });
                  const result = await response.json();
                  if (!response.ok || !result || typeof result !== 'object' || !('success' in result) || (result.success !== true && result.success !== 'true')) throw new Error('Submission failed');
                  form.reset();
                  setSent(true);
                } catch {
                  setError('Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам: +7 499 728-03-83.');
                } finally {
                  setSending(false);
                }
              }}
            >
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
              {error && <p role="alert">{error}</p>}
              <button className="button burgundy" type="submit" disabled={sending} aria-busy={sending}>
                {sending ? 'Отправляем…' : 'Свяжитесь со мной'} <ArrowUpRight size={19} />
              </button>
              <p className="form-note">
                Оставьте номер телефона — мы свяжемся с вами.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}
