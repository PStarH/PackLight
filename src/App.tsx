import React, { useState } from 'react';
import { templates as defaultTemplates } from './data/templates';
import { Template, PackingItem } from './types';
import { TemplateCard } from './components/TemplateCard';
import { PackingList } from './components/PackingList';
import { AddItemForm } from './components/AddItemForm';
import { CreateTemplate } from './components/CreateTemplate';
import { Backpack, ArrowLeft, Plus } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [customTemplates, setCustomTemplates] = useLocalStorage<Template[]>('custom-templates', []);
  const [selectedTemplate, setSelectedTemplate] = useLocalStorage<Template | null>('selected-template', null);
  const [items, setItems] = useLocalStorage<PackingItem[]>('packing-items', []);
  const [categories, setCategories] = useLocalStorage<string[]>('categories', ['General']);
  const [isCreating, setIsCreating] = useState(false);

  const allTemplates = [...defaultTemplates, ...customTemplates];

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setItems(template.items);
    // Update categories with any new ones from the template
    const templateCategories = template.items.map(item => item.category);
    setCategories(prev => [...new Set([...prev, ...templateCategories])]);
  };

  const handleToggleItem = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddItem = (name: string, category: string) => {
    if (category === '__add_new__') return;
    
    const newItem: PackingItem = {
      id: Date.now().toString(),
      name,
      category,
      checked: false,
    };
    setItems([...items, newItem]);
    
    // Add new category if it doesn't exist
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };

  const handleCreateTemplate = (templateData: Omit<Template, 'id'>) => {
    const newTemplate: Template = {
      ...templateData,
      id: `custom-${Date.now()}`,
    };
    setCustomTemplates([...customTemplates, newTemplate]);
    setIsCreating(false);
  };

  const progress = items.length > 0 
    ? Math.round((items.filter(item => item.checked).length / items.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Backpack className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">PackLight</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isCreating ? (
          <CreateTemplate
            onSave={handleCreateTemplate}
            onCancel={() => setIsCreating(false)}
          />
        ) : selectedTemplate ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between sticky top-[73px] bg-gray-50 py-4 z-10">
              <button
                onClick={() => setSelectedTemplate(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Templates
              </button>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  Progress: {progress}%
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedTemplate.name} Packing List
              </h2>
              
              <AddItemForm
                onAdd={handleAddItem}
                categories={categories}
              />

              <PackingList
                items={items}
                onToggleItem={handleToggleItem}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Choose a Packing Template
              </h2>
              <button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Plus className="w-5 h-5" />
                Create Template
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTemplates.map(template => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onSelect={handleTemplateSelect}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;