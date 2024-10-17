import { openDB } from 'idb';

const dbPromise = openDB('rpg-web-app', 1, {
  upgrade(db) {
    db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('characters', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('gameSessions', { keyPath: 'id', autoIncrement: true });
  },
});

export async function getAll(storeName) {
  return (await dbPromise).getAll(storeName);
}

export async function get(storeName, id) {
  return (await dbPromise).get(storeName, id);
}

export async function add(storeName, item) {
  return (await dbPromise).add(storeName, item);
}

export async function update(storeName, item) {
  return (await dbPromise).put(storeName, item);
}

export async function remove(storeName, id) {
  return (await dbPromise).delete(storeName, id);
}