import type { MetaFunction } from 'remix';
import Banner from '~/components/Banner';
import { formatMeta } from '~/helpers';

export let meta: MetaFunction = () => {
  return formatMeta({
    title: 'Remix Guide',
    description: 'A platform for sharing everything about Remix',
    'og:url': 'https://remix.guide',
  });
};

export default function Index() {
  return <Banner />;
}
