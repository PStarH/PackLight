import React from 'react';
import { Template } from '../types';
import { Backpack } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  return (
    <div 
      className="relative group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onSelect(template)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={template.image} 
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <Backpack className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-800">{template.name}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-600">{template.description}</p>
        <p className="mt-2 text-sm text-indigo-600">{template.items.length} items</p>
      </div>
    </div>
  );
}