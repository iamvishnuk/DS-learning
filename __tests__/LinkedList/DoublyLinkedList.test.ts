import { describe, it, expect } from 'vitest';
import DoublyLinkedList from '../../typescript/LinkedList/DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('append should add items to the end', () => {
    const list = new DoublyLinkedList<number>();

    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBe(30);
  });

  it('prepend should add items to the start', () => {
    const list = new DoublyLinkedList<number>();

    list.prepend(10);
    list.prepend(20);

    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(20);
    expect(list.get(1)).toBe(10);
  });

  it('insertAt should insert at correct index', () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);
    list.append(3);
    list.insertAt(2, 1);

    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  it('remove should delete an item by value', () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    const removed = list.remove(2);

    expect(removed).toBe(2);
    expect(list.length).toBe(2);
    expect(list.get(1)).toBe(3);
  });

  it('removeAt should remove item by index', () => {
    const list = new DoublyLinkedList<number>();

    list.append(10);
    list.append(20);
    list.append(30);

    const removed = list.removeAt(1);

    expect(removed).toBe(20);
    expect(list.length).toBe(2);
    expect(list.get(1)).toBe(30);
  });

  it('get should return undefined for invalid index', () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);

    expect(list.get(5)).toBeUndefined();
  });
});
