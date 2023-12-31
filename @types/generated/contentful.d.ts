// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IPlanetFields {
  /** name */
  name:
    | "mercury"
    | "earth"
    | "mars"
    | "venus"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune";

  /** overview */
  overview: string;

  /** internal structure */
  internalStructure: string;

  /** surface geology */
  surfaceGeology: string;

  /** Source : Wikipedia */
  source: string;

  /** overview image */
  overviewImage: Asset;

  /** structure image */
  structureImage: Asset;

  /** surface image */
  surfaceImage: Asset;

  /** rotation time */
  rotationTime: string;

  /** revolution time */
  revolutionTime: string;

  /** radius */
  radius: string;

  /** average temp. */
  averageTemp: string;
}

/** Data about planets */

export interface IPlanet extends Entry<IPlanetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "planet";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "planet";

export type IEntry = IPlanet;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
