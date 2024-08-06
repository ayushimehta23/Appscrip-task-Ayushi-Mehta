"use client";
import { useState } from 'react';
import styles from './Filter.module.css';

// Define the type for filter categories
type FilterCategory = 'idealFor' | 'occasion' | 'work' | 'fabric' | 'segment' | 'suitableFor' | 'rawMaterials' | 'pattern';

const Filter = () => {
  // Define the state with the specific filter categories
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<FilterCategory, boolean>>({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  // Define the state for individual category filters
  const [filters, setFilters] = useState<Record<FilterCategory, Set<string>>>({
    idealFor: new Set(),
    occasion: new Set(),
    work: new Set(),
    fabric: new Set(),
    segment: new Set(),
    suitableFor: new Set(),
    rawMaterials: new Set(),
    pattern: new Set(),
  });

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Toggle filter category visibility
  const toggleFilter = (filterCategory: FilterCategory) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterCategory]: !prev[filterCategory],
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (filterCategory: FilterCategory, value: string) => {
    setFilters((prev) => {
      const newFilters = new Set(prev[filterCategory]);
      if (newFilters.has(value)) {
        newFilters.delete(value);
      } else {
        newFilters.add(value);
      }
      return { ...prev, [filterCategory]: newFilters };
    });
  };

  // Unselect all filters
  const handleUnselectAll = (filterCategory: FilterCategory) => {
    setFilters((prev) => ({ ...prev, [filterCategory]: new Set() }));
  };

  return (
    <div className={styles.filterContainer}>
      <button className={styles.filterButton} onClick={toggleSidebar}>
        {isSidebarVisible ? 'Hide Filter' : 'Show Filter'}
      </button>
      <div
        className={`${styles.filterSidebar} ${isSidebarVisible ? styles.show : ''}`}
      >
        <div className={styles.filterContent}>
          {/* Customizable Filter */}
          <div className={styles.filterOption}>
            <input type="checkbox" id="customizable" name="customizable" />
            <label htmlFor="customizable">Customizable</label>
          </div>

          {/* Ideal For Filter */}
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('idealFor')}
            >
              <span>Ideal For</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.idealFor ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.idealFor && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('idealFor')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="idealFor"
                    value="men"
                    checked={filters.idealFor.has('men')}
                    onChange={() => handleCheckboxChange('idealFor', 'men')}
                  />
                  Men
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="idealFor"
                    value="women"
                    checked={filters.idealFor.has('women')}
                    onChange={() => handleCheckboxChange('idealFor', 'women')}
                  />
                  Women
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="idealFor"
                    value="baby-kids"
                    checked={filters.idealFor.has('baby-kids')}
                    onChange={() => handleCheckboxChange('idealFor', 'baby-kids')}
                  />
                  Baby & Kids
                </label>
              </div>
            )}
          </div>

          {/* Occasion Filter */}
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('occasion')}
            >
              <span>Occasion</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.occasion ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.occasion && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('occasion')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="occasion"
                    value="formal"
                    checked={filters.occasion.has('formal')}
                    onChange={() => handleCheckboxChange('occasion', 'formal')}
                  />
                  Formal
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="occasion"
                    value="casual"
                    checked={filters.occasion.has('casual')}
                    onChange={() => handleCheckboxChange('occasion', 'casual')}
                  />
                  Casual
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="occasion"
                    value="sports"
                    checked={filters.occasion.has('sports')}
                    onChange={() => handleCheckboxChange('occasion', 'sports')}
                  />
                  Sports
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="occasion"
                    value="party"
                    checked={filters.occasion.has('party')}
                    onChange={() => handleCheckboxChange('occasion', 'party')}
                  />
                  Party
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="occasion"
                    value="wedding"
                    checked={filters.occasion.has('wedding')}
                    onChange={() => handleCheckboxChange('occasion', 'wedding')}
                  />
                  Wedding
                </label>
              </div>
            )}
          </div>

          {/* Work Filter */}
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('work')}
            >
              <span>Work</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.work ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.work && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('work')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="work"
                    value="office"
                    checked={filters.work.has('office')}
                    onChange={() => handleCheckboxChange('work', 'office')}
                  />
                  Office
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="work"
                    value="business"
                    checked={filters.work.has('business')}
                    onChange={() => handleCheckboxChange('work', 'business')}
                  />
                  Business
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="work"
                    value="remote"
                    checked={filters.work.has('remote')}
                    onChange={() => handleCheckboxChange('work', 'remote')}
                  />
                  Remote
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="work"
                    value="fieldwork"
                    checked={filters.work.has('fieldwork')}
                    onChange={() => handleCheckboxChange('work', 'fieldwork')}
                  />
                  Fieldwork
                </label>
              </div>
            )}
          </div>

          {/* Fabric Filter */}
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('fabric')}
            >
              <span>Fabric</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.fabric ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.fabric && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('fabric')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="fabric"
                    value="cotton"
                    checked={filters.fabric.has('cotton')}
                    onChange={() => handleCheckboxChange('fabric', 'cotton')}
                  />
                  Cotton
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="fabric"
                    value="silk"
                    checked={filters.fabric.has('silk')}
                    onChange={() => handleCheckboxChange('fabric', 'silk')}
                  />
                  Silk
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="fabric"
                    value="wool"
                    checked={filters.fabric.has('wool')}
                    onChange={() => handleCheckboxChange('fabric', 'wool')}
                  />
                  Wool
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="fabric"
                    value="linen"
                    checked={filters.fabric.has('linen')}
                    onChange={() => handleCheckboxChange('fabric', 'linen')}
                  />
                  Linen
                </label>
              </div>
            )}
          </div>

          {/* Segment Filter */}
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('segment')}
            >
              <span>Segment</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.segment ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.segment && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('segment')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="segment"
                    value="luxury"
                    checked={filters.segment.has('luxury')}
                    onChange={() => handleCheckboxChange('segment', 'luxury')}
                  />
                  Luxury
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="segment"
                    value="economy"
                    checked={filters.segment.has('economy')}
                    onChange={() => handleCheckboxChange('segment', 'economy')}
                  />
                  Economy
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="segment"
                    value="mid-range"
                    checked={filters.segment.has('mid-range')}
                    onChange={() => handleCheckboxChange('segment', 'mid-range')}
                  />
                  Mid-Range
                </label>
              </div>
            )}
          </div>

          {/* Suitable For Filter */}
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('suitableFor')}
            >
              <span>Suitable For</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.suitableFor ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.suitableFor && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('suitableFor')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="suitableFor"
                    value="outdoor"
                    checked={filters.suitableFor.has('outdoor')}
                    onChange={() => handleCheckboxChange('suitableFor', 'outdoor')}
                  />
                  Outdoor
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="suitableFor"
                    value="indoor"
                    checked={filters.suitableFor.has('indoor')}
                    onChange={() => handleCheckboxChange('suitableFor', 'indoor')}
                  />
                  Indoor
                </label>
              </div>
            )}
          </div>
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('rawMaterials')}
            >
              <span>Raw Materials</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.rawMaterials ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.rawMaterials && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('rawMaterials')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="rawMaterials"
                    value="leather"
                    checked={filters.rawMaterials.has('leather')}
                    onChange={() => handleCheckboxChange('rawMaterials', 'leather')}
                  />
                  Leather
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="rawMaterials"
                    value="metal"
                    checked={filters.rawMaterials.has('metal')}
                    onChange={() => handleCheckboxChange('rawMaterials', 'metal')}
                  />
                  Metal
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="rawMaterials"
                    value="plastic"
                    checked={filters.rawMaterials.has('plastic')}
                    onChange={() => handleCheckboxChange('rawMaterials', 'plastic')}
                  />
                  Plastic
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="rawMaterials"
                    value="wood"
                    checked={filters.rawMaterials.has('wood')}
                    onChange={() => handleCheckboxChange('rawMaterials', 'wood')}
                  />
                  Wood
                </label>
              </div>
            )}
          </div>
          <div className={styles.filterCategory}>
            <div
              className={styles.filterHeader}
              onClick={() => toggleFilter('pattern')}
            >
              <span>Pattern</span>
              <span className={styles.dropdownIcon}>
                {activeFilters.pattern ? '▲' : '▼'}
              </span>
            </div>
            <div className={styles.totalItems}>
              <span>All</span>
            </div>
            {activeFilters.pattern && (
              <div className={styles.filterOptions}>
                <a href="#" className={styles.unselectAll} onClick={() => handleUnselectAll('pattern')}>Unselect all</a>
                <label>
                  <input
                    type="checkbox"
                    name="pattern"
                    value="striped"
                    checked={filters.pattern.has('striped')}
                    onChange={() => handleCheckboxChange('pattern', 'striped')}
                  />
                  Striped
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="pattern"
                    value="polka-dots"
                    checked={filters.pattern.has('polka-dots')}
                    onChange={() => handleCheckboxChange('pattern', 'polka-dots')}
                  />
                  Polka Dots
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="pattern"
                    value="plaid"
                    checked={filters.pattern.has('plaid')}
                    onChange={() => handleCheckboxChange('pattern', 'plaid')}
                  />
                  Plaid
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="pattern"
                    value="floral"
                    checked={filters.pattern.has('floral')}
                    onChange={() => handleCheckboxChange('pattern', 'floral')}
                  />
                  Floral
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
