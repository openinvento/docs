import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import {ArrowRight, BookOpen, Boxes, Braces, Container, FileCog, QrCode, Server} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';

import styles from './index.module.css';

type DocRoute = {title: string; description: string; to: string; icon: LucideIcon};

function iconForDoc(title: string, id: string): LucideIcon {
  const value = `${title} ${id}`.toLowerCase();
  if (value.includes('docker') || value.includes('install')) return Container;
  if (value.includes('api')) return Braces;
  if (value.includes('barcode') || value.includes('label')) return QrCode;
  if (value.includes('security') || value.includes('user')) return Server;
  if (value.includes('configur')) return FileCog;
  if (value.includes('concept')) return Boxes;
  return BookOpen;
}

function titleForDoc(id: string): string {
  const lastSegment = id.split('/').pop() ?? id;
  return lastSegment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

const primaryRoutes: DocRoute[] = [
  {title: 'Introduction', description: 'Learn the core ideas and terminology.', to: 'docs/intro', icon: BookOpen},
  {title: 'Installation', description: 'Run OpenInvento with Docker Compose.', to: 'docs/setup-installation/docker', icon: Container},
  {title: 'Concepts', description: 'Understand inventories, locations, and articles.', to: 'docs/openinvento/concepts', icon: Boxes},
];

function RouteCard({route, compact = false}: {route: DocRoute; compact?: boolean}) {
  const Icon = route.icon;
  return (
    <Link className={compact ? styles.compactCard : styles.routeCard} to={route.to}>
      <span className={styles.routeIcon}><Icon size={compact ? 18 : 20} strokeWidth={1.8} /></span>
      <span className={styles.routeText}><strong>{route.title}</strong><span>{route.description}</span></span>
      <ArrowRight className={styles.routeArrow} size={18} />
    </Link>
  );
}

export default function Home(): ReactNode {
  const allDocsData = useAllDocsData();
  const docsPluginData = Object.values(allDocsData)[0];
  const currentVersion = docsPluginData?.versions.find((version) => version.name === 'current') ?? docsPluginData?.versions.find((version) => version.isLast);
  const allRoutes: DocRoute[] = (currentVersion?.docs ?? []).map((doc) => ({
    title: titleForDoc(doc.id),
    description: 'Read the OpenInvento documentation for this topic.',
    to: doc.path,
    icon: iconForDoc(doc.id, doc.id),
  }));
  const featuredRoutes = allRoutes.filter((route) => !route.title.toLowerCase().includes('alternative'));
  const installationRoute = featuredRoutes.find((route) => {
    const value = `${route.title} ${route.to}`.toLowerCase();
    return value.includes('install') || value.includes('docker');
  });
  const popularRoutes = [
    installationRoute,
    ...featuredRoutes.filter((route) => route !== installationRoute),
  ].filter((route): route is DocRoute => Boolean(route)).slice(0, 4);
  return (
    <Layout title="Documentation" description="Official documentation for OpenInvento, a self-hosted inventory management system.">
      <main className={styles.page}>
        <div className="container">
          <section className={styles.hero}>
            <div className={styles.heroCopy}>
              <span className={styles.overline}>OpenInvento documentation</span>
              <div className={styles.headlineRow}>
                <h1>OpenInvento documentation</h1>
                <Link className={styles.docsButton} to="docs/intro">
                  Open the documentation <ArrowRight size={21} />
                </Link>
              </div>
              <p>Everything you need to install, configure, and use your self-hosted inventory.</p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="get-started">
            <div className={styles.sectionHeader}><div><span className={styles.sectionLabel}>01</span><h2 id="get-started">Get started</h2></div><Link to="docs/intro">View all docs <ArrowRight size={15} /></Link></div>
            <div className={styles.routeGrid}>{primaryRoutes.map((route) => <RouteCard key={route.title} route={route} />)}</div>
          </section>

          <section className={styles.section} aria-labelledby="popular-guides">
            <div className={styles.sectionHeader}><div><span className={styles.sectionLabel}>02</span><h2 id="popular-guides">Popular guides</h2></div></div>
            <div className={styles.compactGrid}>{popularRoutes.map((route) => <RouteCard key={route.title} route={route} compact />)}</div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
