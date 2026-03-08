import { tData } from '../data.js';
import { i18n } from '../i18n.js';

export class HierarchyView {
    constructor(infoPanel, systemsData) {
        this.infoPanel = infoPanel;
        this.systemsData = systemsData;
        this.systemSelectorList = document.getElementById('system-selector-list');
        this.treeContainer = document.getElementById('tree-container');

        this.activeSystem = null;
        this.init();

        // Listen for language changes and re-render
        i18n.onChange(() => {
            if (this.activeSystem) {
                this.renderTree(this.activeSystem.tree);
            }
            // Also need to re-render the sidebar since titles changed
            this.populateSystemSidebar();
        });
    }

    init() {
        this.populateSystemSidebar();
    }

    populateSystemSidebar() {
        // Clear existing to avoid duplicates on re-render
        this.systemSelectorList.innerHTML = '';

        // Only show systems that have tree data defined
        const systemsWithTrees = this.systemsData.filter(s => s.tree);

        systemsWithTrees.forEach(system => {
            const li = document.createElement('li');
            li.className = 'system-item';

            // Mark active if this was the previously active item before language shift
            if (this.activeSystem && this.activeSystem.id === system.id) {
                li.classList.add('active');
            }

            li.textContent = tData(system.title);
            li.addEventListener('click', () => {
                this.activeSystem = system;

                // Update active state in sidebar
                document.querySelectorAll('.system-item').forEach(el => el.classList.remove('active'));
                li.classList.add('active');

                // Parse and render the tree
                this.renderTree(system.tree);
            });
            this.systemSelectorList.appendChild(li);
        });
    }

    renderTree(treeData) {
        // Clear canvas
        this.treeContainer.innerHTML = '';

        // Helper to recursively build DOM nodes
        const buildNode = (nodeData) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'tree-node-wrapper';

            // The box itself
            const nodeEl = document.createElement('div');
            nodeEl.className = 'tree-node';

            const html = `
                <div class="node-title">${tData(nodeData.name)}</div>
                <div class="node-rank">${tData(nodeData.rank) || ''}</div>
            `;
            nodeEl.innerHTML = html;

            nodeEl.addEventListener('click', (e) => {
                e.stopPropagation();

                const isLeaf = !nodeData.children || nodeData.children.length === 0;

                // We mock an 'item' to use the existing showPanel method
                this.infoPanel.showPanel({
                    title: nodeData.name, // Keep the object reference so the panel can translate it
                    startYear: null,
                    endYear: null,
                    description: nodeData.description || 'No description available for this group.',
                    treeImageQuery: nodeData.imageQuery,
                    species: nodeData.species || [],
                    isHierarchyView: true,
                    isLeaf: isLeaf
                });
            });

            wrapper.appendChild(nodeEl);

            // Children
            if (nodeData.children && nodeData.children.length > 0) {
                const childrenContainer = document.createElement('div');
                childrenContainer.className = 'tree-children';

                nodeData.children.forEach(child => {
                    const childWrapper = buildNode(child);
                    childrenContainer.appendChild(childWrapper);
                });

                wrapper.appendChild(childrenContainer);
            }

            return wrapper;
        };

        // Build and inject the root
        const rootWrapper = buildNode(treeData);
        this.treeContainer.appendChild(rootWrapper);
    }
}
