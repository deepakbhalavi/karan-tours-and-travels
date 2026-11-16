import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import credits from '../data/imageCredits.json';

export default function ImageCredits() {
  return (
    <>
      <Seo title="Image Credits" description="Photo credits and licences for images used on the Karan Tours & Travels website." />
      <PageHeader eyebrow="Credits" title="Image credits" crumbs={[{ label: 'Image credits' }]} description="Some photographs are sourced from Wikimedia Commons under free licences. Other images are AI-generated illustrations." />
      <section className="section pt-12">
        <div className="container max-w-4xl">
          <ul className="divide-y divide-line rounded-3xl border border-line">
            {Object.entries(credits).map(([key, c]) => (
              <li key={key} className="flex flex-col gap-1 p-5 text-sm sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold">{key.split('/')[1].replace(/-/g, ' ')}</span>
                <span className="text-muted">
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">{c.title.replace('File:', '')}</a> · {c.author} · {c.license}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted">Replace these with your own fleet and trip photographs before launch for the most authentic experience.</p>
        </div>
      </section>
    </>
  );
}

