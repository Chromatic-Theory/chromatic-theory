import { GetStaticProps } from "next";

import client from "../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  LocationFragment,
} from "./../graphql-operations";

type Custom404Props = {
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<Custom404Props> = async () => {
  const { data: locationData } = await client.query<AllLocationsQuery>({
    query: AllLocationsDocument,
  });

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: {
      locations,
    },
  };
};

export default function Custom404() {
  return (
    <div className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen">
      <h1 className="flex flex-col place-items-center text-5xl">
        404 - Page Not Found
      </h1>
    </div>
  );
}
