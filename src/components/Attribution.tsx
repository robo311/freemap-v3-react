import { useAppSelector } from 'fm3/hooks/reduxSelectHook';
import { useMessages } from 'fm3/l10nInjector';
import { AttributionDef, baseLayers, overlayLayers } from 'fm3/mapDefinitions';
import { Fragment, ReactElement } from 'react';

type Props = { unknown: string };

export function Attribution({ unknown }: Props): ReactElement {
  const mapType = useAppSelector((state) => state.map.mapType);

  const overlays = useAppSelector((state) => state.map.overlays);

  const m = useMessages();

  const categorized = categorize(
    [
      ...baseLayers.filter(({ type }) => mapType === type),
      ...overlayLayers.filter(({ type }) =>
        (overlays as string[]).includes(type),
      ),
    ].reduce((a, b) => [...a, ...b.attribution], [] as AttributionDef[]),
  );

  return categorized.length === 0 ? (
    <div>{unknown}</div>
  ) : (
    <ul className="m-0 ml-n4 mr-n4">
      {categorized.map(({ type, attributions }) => (
        <li key={type}>
          {m?.mapLayers.type[type]}{' '}
          {attributions.map((a, j) => [
            j > 0 ? ', ' : '',
            a.url ? (
              <a
                key={a.type}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.name || (a.nameKey && m?.mapLayers.attr[a.nameKey])}
              </a>
            ) : (
              <Fragment key={a.type}>
                {a.name || (a.nameKey && m?.mapLayers.attr[a.nameKey])}
              </Fragment>
            ),
          ])}
        </li>
      ))}
      {/* {imhd && (
        <li>
          {'; '}
          {m?.routePlanner.imhdAttribution}
          {' ©\xa0'}
          <a href="https://imhd.sk" target="_blank" rel="noopener noreferrer">
            imhd.sk
          </a>
        </li>
      )} */}
    </ul>
  );
}

function categorize(
  attributions: AttributionDef[],
): { type: AttributionDef['type']; attributions: AttributionDef[] }[] {
  const res: Partial<Record<AttributionDef['type'], AttributionDef[]>> = {};

  for (const attribution of attributions) {
    let x = res[attribution.type];

    if (!x) {
      x = [];

      res[attribution.type] = x;
    }

    if (!x.includes(attribution)) {
      x.push(attribution);
    }
  }

  const keys = Object.keys(res) as AttributionDef['type'][];

  return keys.map((type) => ({
    type,
    attributions: res[type] as AttributionDef[],
  }));
}
