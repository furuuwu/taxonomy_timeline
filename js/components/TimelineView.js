import { CONFIG, totalWidth, yearToX, formatYear } from '../config.js';
import { tData } from '../data.js';
import { i18n } from '../i18n.js';

export class TimelineView {
    constructor(infoPanel) {
        this.infoPanel = infoPanel;
        this.container = document.getElementById('timeline-container');
        this.content = document.getElementById('timeline-content');
        this.scientistsTrack = document.getElementById('scientists-track');
        this.systemsTrack = document.getElementById('systems-track');
        this.gridLayer = document.getElementById('grid-layer');

        this.scale = 1;
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;

        this.init();
    }

    init() {
        this.content.style.width = `${totalWidth}px`;
        this.renderGrid();
        this.bindEvents();

        i18n.onChange(() => this.reRenderAll());
    }

    reRenderAll() {
        // Clear tracks (keep the label elements, just update their text later)
        this.scientistsTrack.innerHTML = '<div class="track-label" data-i18n="track-scientists"></div>';
        this.systemsTrack.innerHTML = '<div class="track-label" data-i18n="track-systems"></div>';

        // Re-apply static translations
        this.scientistsTrack.querySelector('.track-label').textContent = i18n.t('track-scientists');
        this.systemsTrack.querySelector('.track-label').textContent = i18n.t('track-systems');

        // We can just trigger a custom event or wait for main to call renderBars again?
        // Actually, TimelineView doesn't store the data itself. It's passed in.
        // Let's store a reference to the active data so we can re-render ourselves.
        if (this.lastScientistsData) {
            this.renderBars(this.lastScientistsData, this.scientistsTrack, 'bar-scientist');
        }
        if (this.lastSystemsData) {
            this.renderBars(this.lastSystemsData, this.systemsTrack, 'bar-system');
        }

        // Clear and re-render grid
        this.gridLayer.innerHTML = '';
        this.renderGrid();
    }

    renderGrid() {
        // Render a grid line every 100 years
        for (let y = Math.ceil(CONFIG.minYear / 100) * 100; y <= CONFIG.maxYear; y += 100) {
            const x = yearToX(y);

            const line = document.createElement('div');
            line.className = 'grid-line';
            line.style.left = `${x}px`;

            const label = document.createElement('div');
            label.className = 'grid-label';

            let text = formatYear(y);
            if (Math.abs(y) % 100 === 0 && y !== 0) {
                const centuryStr = i18n.t('timeline-century');
                text = y < 0 ? `${Math.abs(y) / 100}º ${centuryStr} AC` : `Século ${y / 100}`;
                if (i18n.getLanguage() === 'en') {
                    text = y < 0 ? `${Math.abs(y) / 100}th Century BC` : `${y / 100}th Century`;
                }
            }
            label.textContent = text;

            line.appendChild(label);

            this.gridLayer.appendChild(line);
        }
    }

    /**
     * @param {TimelineItem[]} data 
     * @param {HTMLElement} track 
     * @param {string} className 
     */
    renderBars(data, trackElement, className) {
        // Store for re-rendering
        if (className === 'bar-scientist') this.lastScientistsData = data;
        if (className === 'bar-system') this.lastSystemsData = data;

        const levels = [];
        const verticalSpacing = 44;
        const baseTopOffset = 50;

        const sortedData = [...data].sort((a, b) => a.startYear - b.startYear);

        sortedData.forEach(item => {
            const startX = yearToX(item.startYear);
            const endX = yearToX(item.endYear);
            const width = Math.max(endX - startX, 30);

            let assignedLevel = 0;
            const itemTitle = tData(item.title);
            const bufferRoom = 120 + ((itemTitle ? itemTitle.length : 0) * 7);

            while (
                levels[assignedLevel] !== undefined &&
                levels[assignedLevel] > startX
            ) {
                assignedLevel++;
            }

            levels[assignedLevel] = Math.max(endX, startX + bufferRoom);

            const bar = document.createElement('div');
            bar.className = `timeline-bar ${className}`;
            bar.style.left = `${startX}px`;
            bar.style.width = `${width}px`;
            bar.style.top = `${baseTopOffset + (assignedLevel * verticalSpacing)}px`;

            bar.textContent = itemTitle;
            bar.title = `${itemTitle} (${item.startYear} - ${item.endYear})`;

            // Handle panel opening on click
            bar.addEventListener('click', (e) => {
                e.stopPropagation();
                this.infoPanel.showPanel(item);
            });

            trackElement.appendChild(bar);
        });

        if (levels.length > 0) {
            trackElement.style.height = `${baseTopOffset + (levels.length * verticalSpacing) + 20}px`;
        }
    }

    centerOnYear(year) {
        const targetX = yearToX(year) - (window.innerWidth / 2);
        this.container.scrollLeft = Math.max(0, targetX);
    }

    bindEvents() {
        // Panning (Drag)
        this.container.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.startX = e.pageX - this.container.offsetLeft;
            this.scrollLeft = this.container.scrollLeft;
        });

        this.container.addEventListener('mouseleave', () => {
            this.isDragging = false;
        });

        this.container.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        this.container.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - this.container.offsetLeft;
            const walk = (x - this.startX) * 1.5; // Drag speed multiplier
            this.container.scrollLeft = this.scrollLeft - walk;
        });

        // Zooming (Scroll)
        this.container.addEventListener('wheel', (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();

                const zoomIntensity = 0.005;
                const delta = e.deltaY * -zoomIntensity;

                let newScale = this.scale + delta;
                newScale = Math.min(Math.max(0.3, newScale), 3); // Constrain zoom

                // Keep the mouse position anchored while zooming
                const rect = this.container.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;

                // Calculate position before scaling
                const contentXBefore = (this.container.scrollLeft + mouseX) / this.scale;

                this.scale = newScale;
                this.content.style.transform = `scale(${this.scale})`;

                // Adjust scroll position after scaling
                this.container.scrollLeft = (contentXBefore * this.scale) - mouseX;
            } else if (e.deltaY !== 0) {
                // If not zooming, translate vertical scroll to horizontal scroll
                e.preventDefault();
                this.container.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }
}
