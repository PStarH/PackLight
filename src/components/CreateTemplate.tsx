import React, { useState } from 'react';
import { Template } from '../types';
import { Plus, Image as ImageIcon } from 'lucide-react';

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
].map(url => `${url}?auto=format&fit=crop&w=800&q=80`);

interface CreateTemplateProps {
  onSave: (template: Omit<Template, 'id'>) => void;
  onCancel: () => void;
}

export function CreateTemplate({ onSave, onCancel }: CreateTemplateProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(DEFAULT_IMAGES[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      onSave({
        name: name.trim(),
        description: description.trim(),
        image: selectedImage,
        items: [],
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Create Custom Template</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Template Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="e.g., Camping Trip"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Describe your template..."
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Cover Image
          </label>
          <div className="grid grid-cols-3 gap-4">
            {DEFAULT_IMAGES.map((image, index) => (
              <div
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-video cursor-pointer rounded-lg overflow-hidden ${
                  selectedImage === image ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Template cover ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Template
          </button>
        </div>
      </form>
    </div>
  );
}