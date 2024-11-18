import React from 'react';
import { PackingItem } from '../types';
import { Check, Square, CheckSquare } from 'lucide-react';

interface PackingListProps {
  items: PackingItem[];
  onToggleItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
}

export function PackingList({ items, onToggleItem, onRemoveItem }: PackingListProps) {
  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div className="space-y-6">
      {categories.map(category => (
        <div key={category} className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">{category}</h3>
          <div className="space-y-2">
            {items
              .filter(item => item.category === category)
              .map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm group hover:shadow-md transition-shadow"
                >
                  <div 
                    className="flex items-center gap-3 cursor-pointer flex-1"
                    onClick={() => onToggleItem(item.id)}
                  >
                    {item.checked ? (
                      <CheckSquare className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-400" />
                    )}
                    <span className={`${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {item.name}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity"
                  >
                    Remove
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}