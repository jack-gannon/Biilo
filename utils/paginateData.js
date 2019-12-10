function paginateData(data, resultsPerPage, selectedPageNumber) {
  let perPage = parseFloat(resultsPerPage);
  let pageNumber = parseFloat(selectedPageNumber);
  let pageCount = Math.floor(data.length / perPage) + 1;
  let lastPageCount = data.length % perPage;
  let currentPageIndex = pageNumber * perPage - perPage;
  let nextPageIndex = pageNumber * perPage;
  let paginatedData = {
    dateUpdated: "",
    currentPage: parseFloat(selectedPageNumber),
    pageCount: pageCount,
    results: []
  };
  if (pageNumber === pageCount) {
    paginatedData.results = data.slice(
      data.length - lastPageCount,
      data.length
    );
  } else {
    paginatedData.results = data.slice(currentPageIndex, nextPageIndex);
  }
  paginatedData.dateUpdated = new Date();
  return paginatedData;
}

module.exports = paginateData;
