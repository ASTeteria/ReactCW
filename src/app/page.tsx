import MoviesPage from './containers/MoviesPage';

export default async function Page({
                                     searchParams,
                                   }: {
  searchParams: { [key: string]: string | undefined };
}) {
  return <MoviesPage searchParams={searchParams} />;
}

