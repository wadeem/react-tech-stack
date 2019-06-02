export default (libraryId) => {
    return {
        type: "select_library",
        payload: libraryId
    }
};