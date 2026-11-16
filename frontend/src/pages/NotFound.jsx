import { Link } from 'react-router-dom';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." />
      <PageHeader eyebrow="404" title="Looks like you took a wrong turn" description="The page you’re looking for doesn’t exist or has been moved.">
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary px-7 py-3.5">Back to home</Link>
          <Link to="/routes" className="btn-ghost-light px-7 py-3.5">Browse routes</Link>
        </div>
      </PageHeader>
    </>
  );
}

