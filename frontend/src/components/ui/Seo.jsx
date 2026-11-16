import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../../config/site';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Per-page SEO: title, description, canonical, Open Graph & Twitter tags.
 * Kept dependency-free so it can later be swapped for SSR/pre-rendering.
 */
export default function Seo({ title, description, image = SITE.defaultOgImage, type = 'website' }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | Premium Taxi Service in Nagpur`;
    const url = `${SITE.url}${pathname === '/' ? '' : pathname}`;
    const img = image.startsWith('http') ? image : `${SITE.url}${image}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', img);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', img);
  }, [title, description, image, type, pathname]);

  return null;
}

