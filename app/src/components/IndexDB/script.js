export const DBConfig = {
    name: 'Brain Fort',
    version: 1,
    objectStoresMeta: [
      {
        store: 'Prescriptions',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'days', keypath: 'days', options: { unique: false } }
        ]
      }
    ]
  };