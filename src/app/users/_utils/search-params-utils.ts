import { SortDirection, UserSortProperty } from "@/__generated__/api/users/model";
import { ReadonlyURLSearchParams } from "next/navigation";

export const getPageNumberForFrontendPagination = (searchParams: ReadonlyURLSearchParams, searchParameter: string) => {
    const pageNumber = searchParams.get(searchParameter)
    if (!pageNumber) return 1;
    const parsedPageNumber = parseInt(pageNumber);
    return isNaN(parsedPageNumber) ? 1 : parsedPageNumber;
};

const getPageNumberForBackendPagination = (searchParams: ReadonlyURLSearchParams, searchParameter: string) => {
    const pageNumber = searchParams.get(searchParameter)
    if (!pageNumber) return undefined;
    const parsedPageNumber = parseInt(pageNumber);
    if (isNaN(parsedPageNumber)) {
        throw new Error(`URL Search Param "${searchParameter}" must be undefined or a number`)
    }
    return parsedPageNumber - 1;
};

const getPageSize = () => {
    const pageSize = process.env.NEXT_PUBLIC_API_USERS_PAGE_SIZE;
    return pageSize ? parseInt(pageSize) : undefined;
};

const getSortProperty = (searchParams: ReadonlyURLSearchParams, searchParameter: string) => {
    const sortProperty = searchParams.get(searchParameter)
    if (!sortProperty) {
        return undefined;
    }

    const userSortProperties = Object.values(UserSortProperty)
    if (!userSortProperties.includes(sortProperty as UserSortProperty)) {
        throw new Error(`URL Search Param "${searchParameter}" must be undefined or one of the following values: ${userSortProperties.toString()}`)
    }
    return sortProperty as UserSortProperty;
};

const getSortDirection = (searchParams: ReadonlyURLSearchParams, searchParameter: string) => {
    const sortDirection = searchParams.get(searchParameter)
    if (!sortDirection) {
        return undefined;
    }

    const sortDirections = Object.values(SortDirection)
    if (!sortDirections.includes(sortDirection as SortDirection)) {
        throw new Error(`URL Search Param "${searchParameter}" must be undefined or one of the following values: ${sortDirections.toString()}`)
    }
    return sortDirection as SortDirection;
};

const getQ = (q: string | null) => {
    return q ?? undefined;
};

export const buildGetUsersParams = (searchParams: ReadonlyURLSearchParams) => ({
    pageNumber: getPageNumberForBackendPagination(searchParams, "pageNumber"),
    pageSize: getPageSize(),
    sortProperty: getSortProperty(searchParams, "sortProperty"),
    sortDirection: getSortDirection(searchParams, "sortDirection"),
    q: getQ(searchParams.get("q")),
});