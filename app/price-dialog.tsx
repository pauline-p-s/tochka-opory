'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useContactDialog } from './contact-dialog';
import type { PriceCategory, PriceItem } from './price-content';

function TariffList({ items }: { items: PriceItem[] }) {
  return (
    <dl className="tariff-list">
      {items.map((item) => (
        <div key={item.title}>
          <dt>
            {item.title}
            {item.description && (
              <span className="tariff-description">{item.description}</span>
            )}
          </dt>
          <dd>{item.price}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PriceButton({
  category,
  children,
  className,
}: {
  category: PriceCategory;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const contactRequested = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const openContact = useContactDialog();
  const hash = '#price-' + category.slug;

  useEffect(() => {
    const openFromLink = () => {
      if (window.location.hash === hash) setOpen(true);
    };
    openFromLink();
    window.addEventListener('hashchange', openFromLink);
    return () => window.removeEventListener('hashchange', openFromLink);
  }, [hash]);

  function changeOpen(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen && window.location.hash === hash) {
      window.history.replaceState(null, '', '#prices');
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={changeOpen}
      onOpenChangeComplete={(isOpen) => {
        if (!isOpen && contactRequested.current) {
          contactRequested.current = false;
          // Let the contact form return focus to the original price button too.
          triggerRef.current?.focus({ preventScroll: true });
          openContact();
        }
      }}
    >
      <DialogTrigger ref={triggerRef} className={className}>
        {children}
      </DialogTrigger>
      <DialogContent
        className="price-dialog"
        showCloseButton={false}
        finalFocus={triggerRef}
      >
        <div className="price-dialog-heading">
          <p className="eyebrow">Стоимость</p>
          <DialogClose
            className="price-dialog-close"
            aria-label="Закрыть прайс"
          >
            <X size={22} />
          </DialogClose>
        </div>
        <div className="price-dialog-body">
          <DialogTitle className="price-dialog-title">
            {category.title}
          </DialogTitle>
          <DialogDescription className="price-dialog-lead">
            {category.description}
          </DialogDescription>
          {category.items.length || category.groups?.length ? (
            <>
              {category.slug !== 'test-course' && (
                <p className="price-updated">Расценки на сентябрь 2026</p>
              )}
              {category.items.length > 0 && (
                <TariffList items={category.items} />
              )}
              {category.groups?.map((group) => (
                <section className="tariff-group" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.description && (
                    <p className="tariff-group-description">
                      {group.description}
                    </p>
                  )}
                  <TariffList items={group.items} />
                </section>
              ))}
              {category.note && <p className="tariff-note">{category.note}</p>}
            </>
          ) : (
            <div className="tariff-pending">
              <h3>Прайс готовится к публикации</h3>
              <p>
                Оставьте номер телефона — менеджер уточнит условия и стоимость.
              </p>
            </div>
          )}
          <button
            type="button"
            className="button burgundy"
            onClick={() => {
              contactRequested.current = true;
              changeOpen(false);
            }}
          >
            {category.slug === 'test-course'
              ? 'Записаться на тестовый курс'
              : 'Связаться с менеджером'}{' '}
            ↗
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
