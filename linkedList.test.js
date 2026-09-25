import { linkList } from './main.js';


describe('Structure de Données : linkList', () => {
  let list;

  // Ce bloc s'exécute AVANT chaque test pour te donner une liste neuve et vide
  beforeEach(() => {
    list = new linkList();
  });

  // : Le départ (À tester après avoir créé ton squelette)
  test('devrait initialiser une liste vide', () => {
    expect(list.head).toBeNull();
  });

  //  Prepend (O(1) - Ajouter au début)
  test('devrait ajouter un élément au tout début de la liste (prepend)', () => {
    list.prepend('wagon_B');
    list.prepend('wagon_A');
    expect(list.head.value).toBe('wagon_A');
    expect(list.head.next.value).toBe('wagon_B');
  });

  //  Append (O(n) - Ajouter à la fin)
  test('devrait ajouter un élément à la toute fin de la liste (append)', () => {
    list.append('wagon_X');
    list.append('wagon_Y');
    expect(list.head.value).toBe('wagon_X');
    expect(list.head.next.value).toBe('wagon_Y');
    
  });

  // Size (Compter les éléments)
  test('devrait retourner la taille exacte de la liste (size)', () => {
    expect(list.size()).toBe(0);
    list.append('cat');
    list.append('dog');
    list.prepend('horse');
    expect(list.size()).toBe(3);
  });


  test('devrait retourner le premier nœud de la liste (head)', () => {
    expect(list.head()).toBe(undefined); 
    
    list.append('wagon_A');
    list.append('wagon_B');
    
    expect(list.head().value).toBe('wagon_A');
  });

  test('devrait retourner le tout dernier nœud de la liste (tail)', () => {
    expect(list.tail()).toBe('undefined'); 
    
    list.append('wagon_A');
    list.append('wagon_B');
    list.append('wagon_C');
    
    expect(list.tail().value).toBe('wagon_C');
    expect(list.tail().next).toBeNull(); 
  });


});
