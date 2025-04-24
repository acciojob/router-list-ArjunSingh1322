import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data - same as in ItemList.js
const items = [
  { id: '1', name: 'Item 1', description: 'This is the first item' },
  { id: '2', name: 'Item 2', description: 'This is the second item' },
  { id: '3', name: 'Item 3', description: 'This is the third item' },
  { id: '4', name: 'Item 4', description: 'This is the fourth item' },
];

function ItemDetail() {
  const { id } = useParams();
  
  // Find the item with the matching ID
  const item = items.find(item => item.id === id);
  
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;