
db.issues.remove({});

const issuesDB = [
  {
    id: 1, name: 'John', phone: '111111111', time: new Date("Sep 20,2021 9:35:12").toISOString()
  },
  {
    id: 2, name: 'Mike', phone: '222222222', time: new Date("Sep 20,2021 12:44:33").toISOString()
  },
  {
    id: 3, name: 'Mary', phone: '33333333', time: new Date("Sep 20,2021 17:56:04").toISOString()
  },
];

db.issues.insertMany(issuesDB);
const count = db.issues.count();
print('Inserted', count, 'issues');

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count });

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ name: 1 });
db.issues.createIndex({ phone: 1 });
db.issues.createIndex({ time: 1 });
