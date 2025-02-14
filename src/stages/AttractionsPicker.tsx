import React from 'react';
import { MapPin, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import { attractions } from '../data/attractions';
import { AttractionCard } from '../components/AttractionCard';
import type { Attraction, AttractionType } from '../types';

interface AttractionsPickerProps {
  selectedDestination: string;
  onBack: () => void;
  onNext: (selectedAttractions: Attraction[]) => void;
}

export function AttractionsPicker({ selectedDestination, onBack, onNext }: AttractionsPickerProps) {
  const [selectedAttractions, setSelectedAttractions] = React.useState<Attraction[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState<AttractionType | 'all'>('all');
  const [error, setError] = React.useState<string | null>(null);

  const destinationAttractions = React.useMemo(() => {
    return attractions.filter(attraction => attraction.destinationId === selectedDestination);
  }, [selectedDestination]);

  const filteredAttractions = React.useMemo(() => {
    const query = searchQuery.toLowerCase();
    return destinationAttractions.filter(
      attraction => (
        (typeFilter === 'all' || attraction.type === typeFilter) &&
        (
        attraction.name.toLowerCase().includes(query) ||
        attraction.description.toLowerCase().includes(query)
        )
      )
    );
  }, [destinationAttractions, searchQuery, typeFilter]);

  const selectedType: AttractionType | null = React.useMemo(() => {
    if (selectedAttractions.length === 0) return null;
    return selectedAttractions[0].type;
  }, [selectedAttractions]);

  const handleSelect = (attraction: Attraction) => {
    setError(null);
    
    // Check if attraction is already selected
    const isSelected = selectedAttractions.some(a => a.id === attraction.id);
    
    // If it's already selected, remove it
    if (isSelected) {
      setSelectedAttractions(prev => prev.filter(a => a.id !== attraction.id));
      return;
    }
    
    // If selecting a new attraction
    if (selectedType && attraction.type !== selectedType) {
      setError(
        selectedType === 'regular'
          ? 'You cannot mix regular attractions with full package attractions'
          : 'You can only select one full package attraction'
      );
      return;
    }

    // Handle full package selection
    if (attraction.type === 'full_package') {
      setSelectedAttractions([attraction]);
      return;
    }

    // Add new regular attraction
    setSelectedAttractions(prev => [...prev, attraction]);
  };

  const isValidSelection = React.useMemo(() => {
    if (selectedAttractions.length === 0) return false;
    if (selectedType === 'full_package') return selectedAttractions.length === 1;
    return selectedAttractions.length >= 3;
  }, [selectedAttractions, selectedType]);

  const totalPrice = React.useMemo(() => {
    return selectedAttractions.reduce((sum, attraction) => sum + attraction.price, 0);
  }, [selectedAttractions]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          Choose Your Attractions
        </h1>
        <p className="text-lg text-gray-500 text-center mb-8 max-w-2xl">
          Select either one full package or at least three regular attractions
        </p>
        <div className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search attractions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setTypeFilter('all')}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all
              ${typeFilter === 'all'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
          >
            All Attractions
          </button>
          <button
            onClick={() => setTypeFilter('regular')}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all
              ${typeFilter === 'regular'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
          >
            Regular Attractions
          </button>
          <button
            onClick={() => setTypeFilter('full_package')}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all
              ${typeFilter === 'full_package'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
          >
            Full Package Attractions
          </button>
        </div>
      </div>

      {error && (
        <div className="max-w-xl mx-auto mb-8">
          <p className="text-red-500 text-sm text-center font-medium">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAttractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            isSelected={selectedAttractions.some(a => a.id === attraction.id)}
            onSelect={handleSelect}
            disabled={
              selectedType &&
              ((selectedType === 'full_package' && attraction.type === 'regular') ||
               (selectedType === 'regular' && attraction.type === 'full_package'))
            }
          />
        ))}
      </div>

      <div className="sticky bottom-8 mt-12 flex justify-center gap-4">
        <button
          className="bg-white text-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
          Change Dates
        </button>
        {isValidSelection && (
          <button
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            onClick={() => onNext(selectedAttractions)}
          >
            Select Accommodation
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}