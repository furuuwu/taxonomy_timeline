import { formatYear } from '../config.js';
import { speciesDictionary, tData } from '../data.js';
import { i18n } from '../i18n.js';

export class InfoPanel {
    constructor() {
        this.infoPanel = document.getElementById('info-panel');
        this.panelTitle = document.getElementById('panel-title');
        this.panelDate = document.getElementById('panel-date');
        this.panelDescription = document.getElementById('panel-description');
        this.closePanelBtn = document.getElementById('close-panel');

        // Species Grid & Modal Elements
        this.speciesGridContainer = document.getElementById('species-grid-container');
        this.speciesGrid = document.getElementById('species-grid');
        this.speciesModal = document.getElementById('species-modal');
        this.modalImg = document.getElementById('modal-species-img');
        this.modalName = document.getElementById('modal-species-name');
        this.modalReason = document.getElementById('modal-species-reason');
        this.modalDesc = document.getElementById('modal-species-desc');
        this.closeModalBtn = document.getElementById('close-modal');

        this.activeItem = null;
        this.activeSpeciesModalData = null;

        this.bindEvents();

        // Listen for language changes
        i18n.onChange(() => {
            if (!this.infoPanel.classList.contains('hidden') && this.activeItem) {
                // Re-render the panel
                this.showPanel(this.activeItem);
            }
            if (this.speciesModal.classList.contains('active') && this.activeSpeciesModalData) {
                // Re-render the modal
                this.openSpeciesModal(this.activeSpeciesModalData);
            }
        });
    }

    bindEvents() {
        // Close panel and modals
        this.closePanelBtn.addEventListener('click', () => this.hidePanel());
        this.closeModalBtn.addEventListener('click', () => this.closeSpeciesModal());

        // Close modal if clicking outside the content box
        this.speciesModal.addEventListener('click', (e) => {
            if (e.target === this.speciesModal) {
                this.closeSpeciesModal();
            }
        });
    }

    showPanel(item) {
        this.activeItem = item;
        this.panelTitle.textContent = tData(item.title);

        if (item.startYear !== null && item.endYear !== null) {
            this.panelDate.textContent = `${formatYear(item.startYear)} – ${formatYear(item.endYear)}`;
            this.panelDate.style.display = 'block';
        } else {
            // For tree nodes which don't have dates
            this.panelDate.style.display = 'none';
        }

        // Clear previous content
        this.panelDescription.innerHTML = '';

        const p = document.createElement('p');
        p.textContent = tData(item.description);
        this.panelDescription.appendChild(p);

        // Render Species Grid if available and the item belongs exclusively to a leaf node in the hierarchy view
        if (item.isHierarchyView && item.isLeaf && item.species && item.species.length > 0) {
            this.speciesGrid.innerHTML = ''; // Clear old grid

            item.species.forEach(speciesId => {
                const sData = speciesDictionary[speciesId];
                if (!sData) return;

                const thumb = document.createElement('div');
                thumb.className = 'species-thumbnail';
                thumb.setAttribute('data-tooltip', `${tData(sData.name)} - ${tData(sData.reason)}`);

                const img = document.createElement('img');
                img.src = `img/${sData.fileName}`;
                img.alt = tData(sData.name);

                thumb.appendChild(img);

                // Click to expand modal
                thumb.addEventListener('click', () => {
                    this.openSpeciesModal(sData);
                });

                this.speciesGrid.appendChild(thumb);
            });

            this.speciesGridContainer.classList.remove('hidden');
        } else {
            this.speciesGridContainer.classList.add('hidden');
        }

        this.infoPanel.classList.remove('hidden');
    }

    openSpeciesModal(sData) {
        this.activeSpeciesModalData = sData;
        this.modalImg.src = `img/${sData.fileName}`;
        this.modalName.textContent = tData(sData.name);
        this.modalReason.textContent = tData(sData.reason);
        this.modalDesc.textContent = tData(sData.description);
        this.speciesModal.classList.add('active');
    }

    closeSpeciesModal() {
        this.activeSpeciesModalData = null;
        this.speciesModal.classList.remove('active');
    }

    hidePanel() {
        this.activeItem = null;
        this.infoPanel.classList.add('hidden');
    }
}
