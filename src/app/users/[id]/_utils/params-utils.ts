export const getId = (params: { id: string; }) => {
    const parsedId = parseInt(params.id)
    if (isNaN(parsedId)) {
        throw new Error(`id in users/id must be a number`)
    }
    return parsedId
}