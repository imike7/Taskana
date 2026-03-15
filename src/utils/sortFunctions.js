const sortByTitleAsc = (a, b) => a.title.localeCompare(b.title);
const sortByTitleDesc = (a, b) => b.title.localeCompare(a.title);

const sortByPriorityAsc= (a, b) => a.priority - b.priority;
const sortByPriorityDesc = (a, b) => b.priority - a.priority;

const sortByCreatedAtAsc = (a, b) =>
  new Date(a.createdAt) - new Date(b.createdAt);
const sortByCreatedAtDesc = (a, b) =>
  new Date(b.createdAt) - new Date(a.createdAt);

const sortedByUpdatedAtAsc = (a, b) =>
  new Date(a.updatedAt) - new Date(b.updatedAt);
const sortedByUpdatedAtDesc = (a, b) =>
  new Date(b.updatedAt) - new Date(a.updatedAt);

export const sortFunctions = {
  'title:asc': sortByTitleAsc,
  'title:desc': sortByTitleDesc,
  'priority:asc': sortByPriorityAsc,
  'priority:desc': sortByPriorityDesc,
  'createdAt:asc': sortByCreatedAtAsc,
  'createdAt:desc': sortByCreatedAtDesc,
  'updatedAt:asc': sortedByUpdatedAtAsc,
  'updatedAt:desc': sortedByUpdatedAtDesc,
}