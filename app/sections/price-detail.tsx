// Preserve existing links while showing every price list on the homepage.
export default function PriceDetail({ slug }: { slug: string }) {
  const href = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/#price-' + slug;
  return (
    <main className="section">
      <meta httpEquiv="refresh" content={'0;url=' + href} />
      <a className="text-link" href={href}>
        Открыть прайс на главной →
      </a>
    </main>
  );
}
