import { breadcrumbsMapping } from '~/constants/routes';

export const getBreadcrumbsFromPathname = (pathname: string) => {
    const parsedPath = pathname.split('/').slice(1);
    parsedPath.unshift('/');
    const breadcrumbs = parsedPath.map((bc) => breadcrumbsMapping[bc]).filter(Boolean);

    return { breadcrumbs, parsedPath };
};
