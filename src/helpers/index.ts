import { breadcrumbsMapping } from '~/constants/routes';

export const getBreadcrumbsFromPathname = (pathname: string) => {
    const parsedPath = pathname.split('/').slice(1);
    parsedPath.unshift('/');
    return parsedPath.map((bc) => breadcrumbsMapping[bc]).filter(Boolean);
};
