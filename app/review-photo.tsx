'use client';

import { Expand, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ReviewPhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Dialog>
      <DialogTrigger
        className="review-photo-button"
        aria-label={'Открыть фото: ' + alt}
      >
        <img
          src={src}
          alt={alt}
          width={960}
          height={1280}
          loading="lazy"
          decoding="async"
        />
        <Expand size={14} aria-hidden="true" />
      </DialogTrigger>
      <DialogContent className="review-photo-dialog" showCloseButton={false}>
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogClose
          className="review-photo-close"
          aria-label="Закрыть фотографию"
        >
          <X size={22} />
        </DialogClose>
        <img src={src} alt={alt} width={960} height={1280} />
      </DialogContent>
    </Dialog>
  );
}
