export const sortFunctions = {
  'title:asc': (a, b) => a.title.localeCompare(b.title),
  'title:desc': (a, b) => b.title.localeCompare(a.title),
  'priority:asc': (a, b) => a.priority - b.priority,
  'priority:desc': (a, b) => b.priority - a.priority,
  'createdAt:asc': (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  'createdAt:desc': (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  'updatedAt:asc': (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
  'updatedAt:desc': (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
}