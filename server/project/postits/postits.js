module.exports = [{
  id: 1,
  title: 'Buy concert tickets',
  body: 'Suspendisse potenti. Donec posuere vulputate arcu.',
  status: 'todo',
  dates: {
    createdAt: new Date(2016, 5, 12, 16, 55),
    dueAt: new Date(2016, 6, 12, 16, 55),
  },
}, {
  id: 2,
  title: 'Call Marco',
  body: 'Suspendisse potenti. Donec posuere vulputate arcu.',
  status: 'done',
  dates: {
    createdAt: new Date(2016, 2, 17, 12, 23),
    doneAt: new Date(2016, 2, 17, 19, 23),
    dueAt: new Date(2016, 3, 12, 19, 23),
    inProgressAt: new Date(2016, 2, 17, 19, 23),
  },
}, {
  id: 3,
  title: 'Renew my personal domain',
  body: 'Suspendisse potenti. Donec posuere vulputate arcu.',
  status: 'progress',
  dates: {
    createdAt: new Date(2016, 5, 16, 12, 23),
    dueAt: new Date(2016, 6, 20, 12, 23),
    inProgressAt: new Date(2016, 5, 18, 19, 22),
  },
}];