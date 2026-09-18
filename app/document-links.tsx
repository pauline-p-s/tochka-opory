import { documents } from './site-content';

export default function DocumentLinks({ ids }: { ids?: string[] }) {
  const visibleDocuments = ids
    ? ids.flatMap((id) => documents.filter((doc) => doc.id === id))
    : documents;

  return (
    <ul className="document-list">
      {visibleDocuments.map((doc) => (
        <li key={doc.id}>
          <a href={doc.href} target="_blank" rel="noopener noreferrer">
            {doc.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
