import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { Server, Boxes, QrCode } from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<{ className?: string; role?: string }>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self-Hosted & Independent',
    Svg: Server,
    description: (
      <>
        Keep complete ownership of your inventory data. Deploy easily with Docker
        and run on your home server, VPS, or local network.
      </>
    ),
  },
  {
    title: 'Intuitive & Flexible Structure',
    Svg: Boxes,
    description: (
      <>
        Organize articles across Areas, Shelves, and nested Boxes. Customize categories
        and dynamic fields for anything from electronics to groceries, tools, or clothing.
      </>
    ),
  },
  {
    title: 'Interactive & Scanner-Ready',
    Svg: QrCode,
    description: (
      <>
        Effortlessly organize spaces using intuitive drag-and-drop. Generate printable
        QR/barcode label sheets (PDF) and perform rapid lookups using physical scanners or mobile devices.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}