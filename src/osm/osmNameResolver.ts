import { Node, OsmMapping } from './types';

export function resolveGenericName(
  m: Node,
  tags: Record<string, string>,
): string | undefined {
  const parts = [];

  for (const [k, v] of Object.entries(tags)) {
    const valMapping = m[k];

    if (!valMapping) {
      continue;
    }

    if (typeof valMapping === 'string') {
      parts.push(valMapping.replace('{}', v));
      continue;
    }

    if (valMapping[v]) {
      const subkeyMapping = valMapping[v];

      if (typeof subkeyMapping === 'string') {
        parts.push(subkeyMapping.replace('{}', v));
        continue;
      }

      const res = resolveGenericName(subkeyMapping, tags);

      if (res) {
        parts.push(res.replace('{}', v));
        continue;
      }

      if (typeof subkeyMapping['*'] === 'string') {
        parts.push(subkeyMapping['*'].replace('{}', v));
        continue;
      }
    }

    if (typeof valMapping['*'] === 'string') {
      parts.push(valMapping['*'].replace('{}', v));
      continue;
    }
  }

  return parts.length === 0 ? undefined : parts.join('; ');
}

export async function getOsmMapping(lang: string): Promise<OsmMapping> {
  return import(
    `./osmTagToNameMapping-${['sk', 'cs'].includes(lang) ? lang : 'en'}.ts`
  );
}

export async function getGenericNameFromOsmElement(
  tags: Record<string, string>,
  type: 'relation' | 'way' | 'node',
  lang: string,
): Promise<string> {
  const { osmTagToNameMapping, colorNames } = await getOsmMapping(lang);

  return getGenericNameFromOsmElementSync(
    tags,
    type,
    osmTagToNameMapping,
    colorNames,
  );
}

export function getGenericNameFromOsmElementSync(
  tags: Record<string, string>,
  type: 'relation' | 'way' | 'node',
  osmTagToNameMapping: Node,
  colorNames: Record<string, string>,
): string {
  let gn: string | undefined = resolveGenericName(osmTagToNameMapping, tags);

  if (type === 'relation' && tags['type'] === 'route') {
    const color =
      colorNames[
        (tags['osmc:symbol'] ?? '').replace(/:.*/, '') || (tags['colour'] ?? '')
      ] ?? '';

    gn = color + ' ' + gn;
  }

  return (
    gn ?? (process.env['NODE_ENV'] === 'production' ? '' : JSON.stringify(tags))
  );
}

export function getNameFromOsmElement(
  tags: Record<string, string>,
  lang: string,
): string {
  const langName = tags['name:' + lang];

  const name = tags['name'];

  const effName =
    name && langName && langName !== name ? langName + ` (${name})` : name;

  // TODO alt_name, loc_name, ...

  return effName ?? tags['ref'] ?? tags['operator'];
}

// TODO add others
export const categoryKeys = new Set([
  'admin_level',
  'amenity',
  'barrier',
  'boundary',
  'building',
  'bus',
  'cusine',
  'highway',
  'historic',
  'information',
  'landuse',
  'leaf_type',
  'leisure',
  'man_made',
  'natural',
  'network',
  'office',
  'public_transport',
  'railway',
  'route',
  'service',
  'shelter',
  'shop',
  'sport',
  'tactile_paving',
  'tourism',
  'type',
  'vending',
  'wall',
  'water',
  'waterway',
]);
