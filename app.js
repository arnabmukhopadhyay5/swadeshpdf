// Configure PDF.js worker
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Tool Definitions
const TOOLS = {
  merge: {
    id: 'merge',
    title: 'Merge PDF',
    desc: 'Combine multiple PDFs in the order you want with visual reordering and rotation.',
    color: '#e5322d',
    bg: '#fff1f0',
    accept: 'application/pdf,.pdf',
    multiple: true,
    btnLabel: 'Select PDF files',
    actionLabel: 'Merge PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>'
  },
  split: {
    id: 'split',
    title: 'Split PDF',
    desc: 'Separate PDF pages into individual files or extract custom page ranges into a new PDF.',
    color: '#ea580c',
    bg: '#fff7ed',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Split PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>'
  },
  compress: {
    id: 'compress',
    title: 'Compress PDF',
    desc: 'Reduce PDF file size while optimizing image resolution and document structure.',
    color: '#16a34a',
    bg: '#f0fdf4',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Compress PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>'
  },
  pdf2word: {
    id: 'pdf2word',
    title: 'PDF to Word',
    desc: 'Convert PDF documents into editable Microsoft Word (.docx) files cleanly.',
    color: '#2563eb',
    bg: '#eff6ff',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Convert to DOCX',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13l1.5 5 1.5-3 1.5 3 1.5-5"/></svg>'
  },
  word2pdf: {
    id: 'word2pdf',
    title: 'Word to PDF',
    desc: 'Convert Microsoft Word (.docx) documents into clean, printable PDF files.',
    color: '#1d4ed8',
    bg: '#eef2ff',
    accept: '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    multiple: false,
    btnLabel: 'Select DOCX file',
    actionLabel: 'Convert to PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
  },
  pdf2jpg: {
    id: 'pdf2jpg',
    title: 'PDF to JPG',
    desc: 'Convert every PDF page into high-resolution JPG images downloaded as a ZIP archive.',
    color: '#d97706',
    bg: '#fffbeb',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Convert to JPG',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
  },
  jpg2pdf: {
    id: 'jpg2pdf',
    title: 'JPG to PDF',
    desc: 'Create a single PDF document from JPG, PNG, or WebP images with custom page margins.',
    color: '#ca8a04',
    bg: '#fefce8',
    accept: 'image/jpeg,image/png,image/webp,.jpg,.jpeg,.png',
    multiple: true,
    btnLabel: 'Select Images',
    actionLabel: 'Create PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><circle cx="10" cy="13" r="2"/><path d="M20 17l-3.5-3.5L11 19"/></svg>'
  },
  rotate: {
    id: 'rotate',
    title: 'Rotate PDF',
    desc: 'Rotate individual pages or all pages at once clockwise or counter-clockwise.',
    color: '#9333ea',
    bg: '#faf5ff',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Save Rotated PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>'
  },
  unlock: {
    id: 'unlock',
    title: 'Unlock PDF',
    desc: 'Remove permitted restrictions and owner locks or decrypt a PDF with its password.',
    color: '#0d9488',
    bg: '#f0fdfa',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Unlock PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>'
  },
  protect: {
    id: 'protect',
    title: 'Protect PDF',
    desc: 'Add AES/RC4 password protection and restrict printing or copying on your PDF.',
    color: '#4f46e5',
    bg: '#eef2ff',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Protect PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  },
  watermark: {
    id: 'watermark',
    title: 'Watermark PDF',
    desc: 'Stamp custom diagonal text or an image logo watermark across every PDF page.',
    color: '#db2777',
    bg: '#fdf2f8',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Add Watermark',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>'
  },
  organize: {
    id: 'organize',
    title: 'Organize PDF',
    desc: 'Drag and drop pages to reorder, duplicate, rotate, or delete unwanted PDF pages.',
    color: '#e11d48',
    bg: '#fff1f2',
    accept: 'application/pdf,.pdf',
    multiple: false,
    btnLabel: 'Select PDF file',
    actionLabel: 'Save Organized PDF',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'
  }
};

// Global State
const state = {
  currentTool: null,
  files: [],        // For multi-file tools (merge, jpg2pdf) or single-file metadata
  pages: [],        // For page-level tools (split, rotate, organize)
  docxHtml: '',     // For word2pdf
  watermarkImage: null,
  resultUrl: null,
  resultFilename: 'SwadeshPDF_Output.pdf',
  draggedIndex: null
};

// DOM Elements
const homeSection = document.getElementById('homeSection');
const uploadSection = document.getElementById('uploadSection');
const workspaceSection = document.getElementById('workspaceSection');
const downloadSection = document.getElementById('downloadSection');

const toolsGrid = document.getElementById('toolsGrid');
const toolIconBadge = document.getElementById('toolIconBadge');
const toolTitle = document.getElementById('toolTitle');
const toolDesc = document.getElementById('toolDesc');
const selectBtnLabel = document.getElementById('selectBtnLabel');
const dropHintLabel = document.getElementById('dropHintLabel');
const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');

const workspaceDropArea = document.getElementById('workspaceDropArea');
const workspaceSummaryLabel = document.getElementById('workspaceSummaryLabel');
const toolbarActions = document.getElementById('toolbarActions');
const workspaceGrid = document.getElementById('workspaceGrid');
const addMoreBtn = document.getElementById('addMoreBtn');
const fabCountBadge = document.getElementById('fabCountBadge');

const sidebarToolTitle = document.getElementById('sidebarToolTitle');
const sidebarOptions = document.getElementById('sidebarOptions');
const processBtn = document.getElementById('processBtn');
const processBtnText = document.getElementById('processBtnText');

const downloadHeading = document.getElementById('downloadHeading');
const downloadSummary = document.getElementById('downloadSummary');
const downloadBtnLabel = document.getElementById('downloadBtnLabel');

const loadingOverlay = document.getElementById('loadingOverlay');
const loadingText = document.getElementById('loadingText');
const toastEl = document.getElementById('toast');

// Utilities
function formatBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.remove('hidden');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toastEl.classList.add('hidden'), 3400);
}

function setLoading(show, text = 'Processing...') {
  loadingText.textContent = text;
  loadingOverlay.classList.toggle('hidden', !show);
}

function switchView(view) {
  homeSection.classList.toggle('hidden', view !== 'home');
  uploadSection.classList.toggle('hidden', view !== 'upload');
  workspaceSection.classList.toggle('hidden', view !== 'workspace');
  downloadSection.classList.toggle('hidden', view !== 'download');

  document.querySelectorAll('.nav-link-btn').forEach((btn) => {
    if (btn.dataset.nav === 'home') {
      btn.classList.toggle('active', view === 'home');
    } else {
      btn.classList.toggle('active', view !== 'home' && btn.dataset.tool === state.currentTool?.id);
    }
  });
}

function resetState() {
  state.files = [];
  state.pages = [];
  state.docxHtml = '';
  state.watermarkImage = null;
  if (state.resultUrl) {
    URL.revokeObjectURL(state.resultUrl);
    state.resultUrl = null;
  }
}

// Render Home Grid
function initHomeGrid() {
  toolsGrid.innerHTML = '';
  Object.values(TOOLS).forEach((tool) => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <div class="tool-card-icon" style="background:${tool.bg}; color:${tool.color};">
        ${tool.icon}
      </div>
      <h3>${tool.title}</h3>
      <p>${tool.desc}</p>
    `;
    card.addEventListener('click', () => selectTool(tool.id));
    toolsGrid.appendChild(card);
  });
}

// Select a Tool
function selectTool(toolId) {
  const tool = TOOLS[toolId];
  if (!tool) return;
  resetState();
  state.currentTool = tool;

  toolIconBadge.innerHTML = tool.icon;
  toolIconBadge.style.background = tool.bg;
  toolIconBadge.style.color = tool.color;
  toolTitle.textContent = tool.title;
  toolDesc.textContent = tool.desc;
  selectBtnLabel.textContent = tool.btnLabel;
  dropHintLabel.textContent = tool.multiple ? 'or drop multiple files here' : 'or drop your file here';

  fileInput.accept = tool.accept;
  fileInput.multiple = tool.multiple;
  fileInput.value = '';

  switchView('upload');
}

// Render PDF Pages Thumbnails via PDF.js
async function renderPdfPages(arrayBuffer) {
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer.slice(0) });
  const pdf = await loadingTask.promise;
  const renderedPages = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 0.42 });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: ctx, viewport }).promise;

    renderedPages.push({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()),
      origPageIndex: i - 1,
      rotation: 0,
      selected: true,
      thumbUrl: canvas.toDataURL('image/png')
    });
  }
  return renderedPages;
}

// Handle Uploaded Files
async function handleFiles(fileList) {
  const files = Array.from(fileList);
  if (!files.length || !state.currentTool) return;
  const tool = state.currentTool;

  setLoading(true, 'Analyzing document(s)...');

  try {
    if (tool.id === 'word2pdf') {
      const file = files[0];
      if (!file.name.toLowerCase().endsWith('.docx')) {
        showToast('Please select a valid .docx Word document.');
        return;
      }
      const buffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer: buffer });
      state.docxHtml = result.value || '<p>(Empty document)</p>';
      state.files = [{
        id: 'docx1',
        name: file.name,
        size: file.size,
        bytes: buffer
      }];
    } else if (tool.id === 'jpg2pdf') {
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        const dataUrl = await new Promise((res) => {
          const reader = new FileReader();
          reader.onload = () => res(reader.result);
          reader.readAsDataURL(file);
        });
        const buffer = await file.arrayBuffer();
        state.files.push({
          id: String(Date.now() + Math.random()),
          name: file.name,
          size: file.size,
          type: file.type,
          bytes: buffer,
          rotation: 0,
          thumbUrl: dataUrl
        });
      }
      if (!state.files.length) {
        showToast('Please upload JPG, PNG, or WebP images.');
        return;
      }
    } else {
      // PDF-based tools
      const pdfFiles = files.filter((f) => f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf'));
      if (!pdfFiles.length) {
        showToast('Please select valid PDF file(s).');
        return;
      }

      if (tool.id === 'merge') {
        for (const file of pdfFiles) {
          const buffer = await file.arrayBuffer();
          const pages = await renderPdfPages(buffer);
          state.files.push({
            id: String(Date.now() + Math.random()),
            name: file.name,
            size: file.size,
            bytes: buffer,
            pageCount: pages.length,
            rotation: 0,
            thumbUrl: pages[0]?.thumbUrl || null
          });
        }
      } else {
        // Single PDF tools
        const file = pdfFiles[0];
        const buffer = await file.arrayBuffer();
        let pages = [];
        try {
          pages = await renderPdfPages(buffer);
        } catch (e) {
          // Encrypted PDF fallback for Unlock PDF
          if (tool.id === 'unlock') {
            pages = [{
              id: 'locked-1',
              origPageIndex: 0,
              rotation: 0,
              selected: true,
              thumbUrl: null,
              isLocked: true
            }];
          } else {
            throw e;
          }
        }
        state.files = [{
          id: 'main-pdf',
          name: file.name,
          size: file.size,
          bytes: buffer,
          pageCount: pages.length
        }];
        state.pages = pages;
      }
    }

    renderWorkspace();
    switchView('workspace');
  } catch (err) {
    console.error(err);
    showToast('Error reading file. If the PDF is password-locked, try Unlock PDF first.');
  } finally {
    setLoading(false);
    fileInput.value = '';
  }
}

// Render Workspace & Sidebar
function renderWorkspace() {
  const tool = state.currentTool;
  if (!tool) return;

  sidebarToolTitle.textContent = tool.title;
  processBtnText.textContent = tool.actionLabel;
  addMoreBtn.classList.toggle('hidden', !tool.multiple);
  fabCountBadge.textContent = state.files.length;

  renderToolbarActions();
  renderSidebarOptions();
  renderCardsGrid();
}

function renderToolbarActions() {
  const tool = state.currentTool;
  toolbarActions.innerHTML = '';

  if (tool.id === 'merge' || tool.id === 'jpg2pdf') {
    workspaceSummaryLabel.textContent = `${state.files.length} file(s) selected`;
    toolbarActions.innerHTML = `
      <button type="button" class="btn-ghost" id="tbSortAsc">A–Z</button>
      <button type="button" class="btn-ghost" id="tbReverse">Reverse</button>
      <button type="button" class="btn-ghost text-danger" id="tbClear">Clear</button>
    `;
    document.getElementById('tbSortAsc').onclick = () => {
      state.files.sort((a, b) => a.name.localeCompare(b.name));
      renderWorkspace();
    };
    document.getElementById('tbReverse').onclick = () => {
      state.files.reverse();
      renderWorkspace();
    };
    document.getElementById('tbClear').onclick = () => {
      resetState();
      switchView('upload');
    };
  } else if (tool.id === 'split') {
    const selCount = state.pages.filter((p) => p.selected).length;
    workspaceSummaryLabel.textContent = `${selCount} of ${state.pages.length} pages selected`;
    toolbarActions.innerHTML = `
      <button type="button" class="btn-ghost" id="tbSelectAll">Select All</button>
      <button type="button" class="btn-ghost" id="tbDeselectAll">Deselect All</button>
    `;
    document.getElementById('tbSelectAll').onclick = () => {
      state.pages.forEach((p) => (p.selected = true));
      renderWorkspace();
    };
    document.getElementById('tbDeselectAll').onclick = () => {
      state.pages.forEach((p) => (p.selected = false));
      renderWorkspace();
    };
  } else if (tool.id === 'rotate' || tool.id === 'organize') {
    workspaceSummaryLabel.textContent = `${state.pages.length} page(s)`;
    toolbarActions.innerHTML = `
      <button type="button" class="btn-ghost" id="tbRotLeft">↺ Rotate All Left</button>
      <button type="button" class="btn-ghost" id="tbRotRight">↻ Rotate All Right</button>
    `;
    document.getElementById('tbRotLeft').onclick = () => {
      state.pages.forEach((p) => (p.rotation = (p.rotation + 270) % 360));
      renderWorkspace();
    };
    document.getElementById('tbRotRight').onclick = () => {
      state.pages.forEach((p) => (p.rotation = (p.rotation + 90) % 360));
      renderWorkspace();
    };
  } else {
    const f = state.files[0];
    workspaceSummaryLabel.textContent = f ? `${f.name} (${formatBytes(f.size)})` : '';
  }
}

function renderSidebarOptions() {
  const tool = state.currentTool;
  const baseName = (state.files[0]?.name || 'SwadeshPDF_Document').replace(/\.[^/.]+$/, '');

  switch (tool.id) {
    case 'merge':
      sidebarOptions.innerHTML = `
        <div class="info-box">Drag & drop PDF cards to reorder them before combining into one document.</div>
        <div class="form-group">
          <label>Output Filename</label>
          <input type="text" id="optFilename" class="form-control" value="SwadeshPDF_Merged" />
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="optPageNums" />
            <span>Stamp "Page X of Y" footer</span>
          </label>
        </div>
      `;
      break;

    case 'split':
      sidebarOptions.innerHTML = `
        <div class="info-box">Click page cards to toggle selection, or choose how you want to separate pages.</div>
        <div class="form-group">
          <label>Split Mode</label>
          <div class="radio-cards">
            <label class="radio-card active">
              <input type="radio" name="splitMode" value="extract" checked />
              <div>
                <span class="radio-card-title">Extract Selected Pages</span>
                <span class="radio-card-desc">Merge selected pages into one new PDF</span>
              </div>
            </label>
            <label class="radio-card">
              <input type="radio" name="splitMode" value="all" />
              <div>
                <span class="radio-card-title">Separate Every Page (ZIP)</span>
                <span class="radio-card-desc">Download each page as a separate PDF in a ZIP</span>
              </div>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label>Page Range (optional, e.g. 1-3, 5)</label>
          <input type="text" id="optSplitRange" class="form-control" placeholder="e.g. 1-2, 4" />
        </div>
      `;
      bindRadioCardStyles();
      break;

    case 'compress':
      sidebarOptions.innerHTML = `
        <div class="info-box">Choose your compression level. Higher compression rasterizes pages at optimized DPI to shrink heavy scans.</div>
        <div class="form-group">
          <label>Compression Level</label>
          <div class="radio-cards">
            <label class="radio-card">
              <input type="radio" name="compLevel" value="extreme" />
              <div>
                <span class="radio-card-title">Extreme Compression</span>
                <span class="radio-card-desc">Smallest size (96 DPI JPEG), ideal for email</span>
              </div>
            </label>
            <label class="radio-card active">
              <input type="radio" name="compLevel" value="recommended" checked />
              <div>
                <span class="radio-card-title">Recommended Compression</span>
                <span class="radio-card-desc">Balanced quality & file size (135 DPI)</span>
              </div>
            </label>
            <label class="radio-card">
              <input type="radio" name="compLevel" value="less" />
              <div>
                <span class="radio-card-title">Lossless Structural Clean</span>
                <span class="radio-card-desc">Preserves vector text & removes unused objects</span>
              </div>
            </label>
          </div>
        </div>
      `;
      bindRadioCardStyles();
      break;

    case 'pdf2word':
      sidebarOptions.innerHTML = `
        <div class="info-box">Extracts structured paragraphs and page breaks from your PDF into an editable Microsoft Word (.docx) file.</div>
        <div class="form-group">
          <label>Output DOCX Filename</label>
          <input type="text" id="optFilename" class="form-control" value="${baseName}" />
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="optPageBreaks" checked />
            <span>Insert page breaks between PDF pages</span>
          </label>
        </div>
      `;
      break;

    case 'word2pdf':
      sidebarOptions.innerHTML = `
        <div class="info-box">Converts your Word (.docx) content and formatting directly into an A4 PDF document.</div>
        <div class="form-group">
          <label>Output PDF Filename</label>
          <input type="text" id="optFilename" class="form-control" value="${baseName}" />
        </div>
      `;
      break;

    case 'pdf2jpg':
      sidebarOptions.innerHTML = `
        <div class="info-box">Renders each PDF page as a crisp JPG image and bundles them into a downloadable ZIP file.</div>
        <div class="form-group">
          <label>Image Quality</label>
          <select id="optJpgQuality" class="form-control">
            <option value="2.0" selected>High Quality (150 DPI)</option>
            <option value="2.8">Ultra HD (200+ DPI)</option>
            <option value="1.2">Web / Compact (90 DPI)</option>
          </select>
        </div>
      `;
      break;

    case 'jpg2pdf':
      sidebarOptions.innerHTML = `
        <div class="info-box">Drag images to reorder them. Choose page size and orientation below.</div>
        <div class="form-group">
          <label>Page Size</label>
          <select id="optPageSize" class="form-control">
            <option value="a4" selected>A4 (210 × 297 mm)</option>
            <option value="letter">US Letter</option>
            <option value="fit">Fit to Image Size</option>
          </select>
        </div>
        <div class="form-group">
          <label>Page Margin</label>
          <select id="optMargin" class="form-control">
            <option value="20" selected>Small Margin</option>
            <option value="0">No Margin (Full Bleed)</option>
            <option value="45">Large Margin</option>
          </select>
        </div>
      `;
      break;

    case 'rotate':
    case 'organize':
      sidebarOptions.innerHTML = `
        <div class="info-box">
          ${tool.id === 'organize'
            ? 'Drag & drop pages to reorder, duplicate pages using the + icon, rotate, or delete unwanted pages.'
            : 'Use the rotate buttons on individual page cards or rotate all pages from the top toolbar.'}
        </div>
        <div class="form-group">
          <label>Output Filename</label>
          <input type="text" id="optFilename" class="form-control" value="${baseName}_${tool.id}" />
        </div>
      `;
      break;

    case 'unlock':
      sidebarOptions.innerHTML = `
        <div class="info-box">Removes permitted owner restrictions (printing/copying locks) or decrypts a password-protected PDF.</div>
        <div class="form-group">
          <label>PDF Password (if required to open)</label>
          <input type="password" id="optUnlockPass" class="form-control" placeholder="Leave blank if no open password" />
        </div>
      `;
      break;

    case 'protect':
      sidebarOptions.innerHTML = `
        <div class="info-box">Encrypts your PDF with a password so unauthorized users cannot open or modify it.</div>
        <div class="form-group">
          <label>Set Open Password *</label>
          <input type="password" id="optUserPass" class="form-control" placeholder="Enter strong password" />
        </div>
        <div class="form-group">
          <label>Confirm Password *</label>
          <input type="password" id="optConfirmPass" class="form-control" placeholder="Re-enter password" />
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="optAllowPrint" checked />
            <span>Allow printing</span>
          </label>
        </div>
      `;
      break;

    case 'watermark':
      sidebarOptions.innerHTML = `
        <div class="info-box">Customize your text or image watermark. It will be stamped across every page.</div>
        <div class="form-group">
          <label>Watermark Type</label>
          <select id="optWmType" class="form-control">
            <option value="text" selected>Text Watermark</option>
            <option value="image">Image / Logo Watermark</option>
          </select>
        </div>
        <div id="wmTextFields">
          <div class="form-group">
            <label>Watermark Text</label>
            <input type="text" id="optWmText" class="form-control" value="CONFIDENTIAL" />
          </div>
          <div class="form-group">
            <label>Text Color</label>
            <input type="color" id="optWmColor" class="form-control" value="#e5322d" style="height:40px;padding:4px;" />
          </div>
        </div>
        <div id="wmImageFields" class="hidden">
          <div class="form-group">
            <label>Select Logo Image (PNG/JPG)</label>
            <input type="file" id="optWmFile" accept="image/png,image/jpeg" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label>Opacity (<span id="wmOpVal">35</span>%)</label>
          <input type="range" id="optWmOpacity" min="10" max="90" value="35" style="width:100%;" />
        </div>
      `;
      const wmTypeEl = document.getElementById('optWmType');
      wmTypeEl.onchange = () => {
        const isImg = wmTypeEl.value === 'image';
        document.getElementById('wmTextFields').classList.toggle('hidden', isImg);
        document.getElementById('wmImageFields').classList.toggle('hidden', !isImg);
      };
      const wmOpEl = document.getElementById('optWmOpacity');
      wmOpEl.oninput = () => (document.getElementById('wmOpVal').textContent = wmOpEl.value);
      document.getElementById('optWmFile').onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          state.watermarkImage = {
            bytes: await file.arrayBuffer(),
            type: file.type
          };
        }
      };
      break;
  }
}

function bindRadioCardStyles() {
  document.querySelectorAll('.radio-card input').forEach((inp) => {
    inp.addEventListener('change', () => {
      document.querySelectorAll('.radio-card').forEach((c) => c.classList.remove('active'));
      inp.closest('.radio-card').classList.add('active');
    });
  });
}

// Render Cards Grid in Workspace
function renderCardsGrid() {
  const tool = state.currentTool;
  workspaceGrid.innerHTML = '';

  // Word to PDF Preview Card
  if (tool.id === 'word2pdf') {
    workspaceGrid.style.display = 'block';
    workspaceGrid.innerHTML = `
      <div style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:28px; max-width:720px; margin:0 auto; box-shadow:var(--shadow-sm);">
        <div style="font-size:0.8rem; font-weight:700; color:var(--primary); margin-bottom:12px; text-transform:uppercase;">Document Preview (${state.files[0].name})</div>
        <div style="line-height:1.6; color:#1e2029; max-height:460px; overflow-y:auto;">${state.docxHtml}</div>
      </div>
    `;
    return;
  }

  workspaceGrid.style.display = 'grid';

  // Multi-file cards (Merge, JPG to PDF)
  if (tool.id === 'merge' || tool.id === 'jpg2pdf') {
    state.files.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'pdf-card';
      card.draggable = true;
      card.innerHTML = `
        <span class="card-order-badge">${index + 1}</span>
        <div class="card-actions">
          <button type="button" class="card-icon-btn rot-btn" title="Rotate 90°">↻</button>
          <button type="button" class="card-icon-btn rem-btn" title="Remove">✕</button>
        </div>
        <div class="thumb-wrapper">
          <img src="${item.thumbUrl}" alt="${item.name}" style="transform:rotate(${item.rotation}deg);" />
        </div>
        <div class="card-title" title="${item.name}">${item.name}</div>
        <div class="card-meta">${item.pageCount ? item.pageCount + ' pages • ' : ''}${formatBytes(item.size)}</div>
      `;

      card.querySelector('.rot-btn').onclick = (e) => {
        e.stopPropagation();
        item.rotation = (item.rotation + 90) % 360;
        renderWorkspace();
      };
      card.querySelector('.rem-btn').onclick = (e) => {
        e.stopPropagation();
        state.files.splice(index, 1);
        if (!state.files.length) switchView('upload');
        else renderWorkspace();
      };

      bindDragEvents(card, state.files, index);
      workspaceGrid.appendChild(card);
    });
    return;
  }

  // Page-level cards (Split, Compress, PDF2Word, PDF2JPG, Rotate, Unlock, Protect, Watermark, Organize)
  state.pages.forEach((page, index) => {
    const card = document.createElement('div');
    card.className = 'pdf-card';
    if (tool.id === 'split' && page.selected) {
      card.classList.add('selected-card');
    }
    if (tool.id === 'organize') {
      card.draggable = true;
    }

    let actionButtonsHtml = '';
    if (tool.id === 'rotate' || tool.id === 'organize') {
      actionButtonsHtml += `<button type="button" class="card-icon-btn rot-btn" title="Rotate 90°">↻</button>`;
    }
    if (tool.id === 'organize') {
      actionButtonsHtml += `<button type="button" class="card-icon-btn dup-btn" title="Duplicate Page">+</button>`;
      actionButtonsHtml += `<button type="button" class="card-icon-btn del-btn" title="Delete Page">✕</button>`;
    }
    if (tool.id === 'split') {
      actionButtonsHtml += `<button type="button" class="card-icon-btn sel-btn" title="Toggle Select">${page.selected ? '✓' : '○'}</button>`;
    }

    card.innerHTML = `
      <span class="card-order-badge">P.${index + 1}</span>
      <div class="card-actions">${actionButtonsHtml}</div>
      <div class="thumb-wrapper">
        ${
          page.thumbUrl
            ? `<img src="${page.thumbUrl}" alt="Page ${index + 1}" style="transform:rotate(${page.rotation}deg);" />`
            : `<span style="font-weight:700;color:#0d9488;">🔒 Encrypted PDF</span>`
        }
      </div>
      <div class="card-title">Page ${page.origPageIndex + 1}</div>
      <div class="card-meta">${tool.id === 'split' ? (page.selected ? 'Included' : 'Excluded') : (page.rotation ? `Rotated ${page.rotation}°` : 'Original')}</div>
    `;

    if (tool.id === 'split') {
      card.style.cursor = 'pointer';
      card.onclick = () => {
        page.selected = !page.selected;
        renderWorkspace();
      };
    }

    const rotBtn = card.querySelector('.rot-btn');
    if (rotBtn) {
      rotBtn.onclick = (e) => {
        e.stopPropagation();
        page.rotation = (page.rotation + 90) % 360;
        renderWorkspace();
      };
    }

    const dupBtn = card.querySelector('.dup-btn');
    if (dupBtn) {
      dupBtn.onclick = (e) => {
        e.stopPropagation();
        state.pages.splice(index + 1, 0, { ...page, id: String(Math.random()) });
        renderWorkspace();
      };
    }

    const delBtn = card.querySelector('.del-btn');
    if (delBtn) {
      delBtn.onclick = (e) => {
        e.stopPropagation();
        if (state.pages.length <= 1) {
          showToast('A PDF must keep at least 1 page.');
          return;
        }
        state.pages.splice(index, 1);
        renderWorkspace();
      };
    }

    if (tool.id === 'organize') {
      bindDragEvents(card, state.pages, index);
    }

    workspaceGrid.appendChild(card);
  });
}

function bindDragEvents(card, arrayRef, index) {
  card.addEventListener('dragstart', () => {
    state.draggedIndex = index;
    card.classList.add('dragging');
  });
  card.addEventListener('dragend', () => {
    state.draggedIndex = null;
    document.querySelectorAll('.pdf-card').forEach((c) => c.classList.remove('dragging', 'drag-target'));
  });
  card.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (state.draggedIndex !== null && state.draggedIndex !== index) {
      card.classList.add('drag-target');
    }
  });
  card.addEventListener('dragleave', () => card.classList.remove('drag-target'));
  card.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (state.draggedIndex === null || state.draggedIndex === index) return;
    const [moved] = arrayRef.splice(state.draggedIndex, 1);
    arrayRef.splice(index, 0, moved);
    state.draggedIndex = null;
    renderWorkspace();
  });
}

// Helper to finish and present download
function completeWithBlob(blob, filename, heading, summary) {
  if (state.resultUrl) URL.revokeObjectURL(state.resultUrl);
  state.resultUrl = URL.createObjectURL(blob);
  state.resultFilename = filename;

  downloadHeading.textContent = heading;
  downloadSummary.textContent = `${filename} (${formatBytes(blob.size)}) — ${summary}`;
  downloadBtnLabel.textContent = `Download ${filename}`;

  switchView('download');
  triggerDownload();
}

function triggerDownload() {
  if (!state.resultUrl) return;
  const a = document.createElement('a');
  a.href = state.resultUrl;
  a.download = state.resultFilename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Parse range string like "1-3, 5"
function parsePageRange(str, maxPages) {
  const indices = new Set();
  str.split(',').forEach((part) => {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [s, e] = trimmed.split('-').map((n) => parseInt(n, 10));
      if (!isNaN(s) && !isNaN(e)) {
        for (let i = Math.max(1, s); i <= Math.min(maxPages, e); i++) {
          indices.add(i - 1);
        }
      }
    } else {
      const n = parseInt(trimmed, 10);
      if (!isNaN(n) && n >= 1 && n <= maxPages) {
        indices.add(n - 1);
      }
    }
  });
  return Array.from(indices).sort((a, b) => a - b);
}

// MASTER PROCESSING ENGINE FOR ALL 12 FUNCTIONS
async function executeToolAction() {
  const tool = state.currentTool;
  if (!tool) return;
  const { PDFDocument, degrees, StandardFonts, rgb } = PDFLib;

  setLoading(true, `Running ${tool.title}...`);

  try {
    const baseName = (state.files[0]?.name || 'SwadeshPDF').replace(/\.[^/.]+$/, '');

    // 1. MERGE PDF
    if (tool.id === 'merge') {
      const outDoc = await PDFDocument.create();
      for (const f of state.files) {
        const src = await PDFDocument.load(f.bytes, { ignoreEncryption: true });
        const copied = await outDoc.copyPages(src, src.getPageIndices());
        copied.forEach((p) => {
          if (f.rotation) p.setRotation(degrees((p.getRotation().angle + f.rotation) % 360));
          outDoc.addPage(p);
        });
      }
      if (document.getElementById('optPageNums')?.checked) {
        const font = await outDoc.embedFont(StandardFonts.Helvetica);
        const pages = outDoc.getPages();
        pages.forEach((p, idx) => {
          const txt = `Page ${idx + 1} of ${pages.length}`;
          p.drawText(txt, {
            x: (p.getSize().width - font.widthOfTextAtSize(txt, 10)) / 2,
            y: 18,
            size: 10,
            font,
            color: rgb(0.35, 0.35, 0.4)
          });
        });
      }
      const bytes = await outDoc.save();
      const fname = `${(document.getElementById('optFilename')?.value || 'SwadeshPDF_Merged').trim()}.pdf`;
      completeWithBlob(new Blob([bytes], { type: 'application/pdf' }), fname, 'PDFs Merged!', `${outDoc.getPageCount()} pages combined.`);
    }

    // 2. SPLIT PDF
    else if (tool.id === 'split') {
      const mode = document.querySelector('input[name="splitMode"]:checked').value;
      const srcDoc = await PDFDocument.load(state.files[0].bytes, { ignoreEncryption: true });

      if (mode === 'all') {
        const zip = new JSZip();
        for (let i = 0; i < srcDoc.getPageCount(); i++) {
          const single = await PDFDocument.create();
          const [p] = await single.copyPages(srcDoc, [i]);
          single.addPage(p);
          zip.file(`${baseName}_page_${i + 1}.pdf`, await single.save());
        }
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        completeWithBlob(zipBlob, `${baseName}_split_pages.zip`, 'PDF Split Complete!', `${srcDoc.getPageCount()} separate PDF files packaged.`);
      } else {
        const rangeInput = document.getElementById('optSplitRange')?.value.trim();
        let targetIndices = rangeInput
          ? parsePageRange(rangeInput, srcDoc.getPageCount())
          : state.pages.filter((p) => p.selected).map((p) => p.origPageIndex);

        if (!targetIndices.length) {
          showToast('Select at least one page to extract.');
          return;
        }
        const outDoc = await PDFDocument.create();
        const copied = await outDoc.copyPages(srcDoc, targetIndices);
        copied.forEach((p) => outDoc.addPage(p));
        const bytes = await outDoc.save();
        completeWithBlob(new Blob([bytes], { type: 'application/pdf' }), `${baseName}_extracted.pdf`, 'Pages Extracted!', `${targetIndices.length} page(s) saved.`);
      }
    }

    // 3. COMPRESS PDF
    else if (tool.id === 'compress') {
      const level = document.querySelector('input[name="compLevel"]:checked').value;
      const origSize = state.files[0].size;

      if (level === 'less') {
        const srcDoc = await PDFDocument.load(state.files[0].bytes, { ignoreEncryption: true });
        const bytes = await srcDoc.save({ useObjectStreams: true });
        completeWithBlob(
          new Blob([bytes], { type: 'application/pdf' }),
          `${baseName}_compressed.pdf`,
          'PDF Optimized!',
          `Original: ${formatBytes(origSize)} → New: ${formatBytes(bytes.byteLength)}`
        );
      } else {
        const scale = level === 'extreme' ? 1.15 : 1.65;
        const quality = level === 'extreme' ? 0.52 : 0.72;
        const pdfJsDoc = await pdfjsLib.getDocument({ data: state.files[0].bytes.slice(0) }).promise;
        const outDoc = await PDFDocument.create();

        for (let i = 1; i <= pdfJsDoc.numPages; i++) {
          const page = await pdfJsDoc.getPage(i);
          const vp = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = vp.width;
          canvas.height = vp.height;
          await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;

          const jpgDataUrl = canvas.toDataURL('image/jpeg', quality);
          const jpgBytes = await fetch(jpgDataUrl).then((r) => r.arrayBuffer());
          const jpgImg = await outDoc.embedJpg(jpgBytes);
          const origVp = page.getViewport({ scale: 1.0 });
          const pdfPage = outDoc.addPage([origVp.width, origVp.height]);
          pdfPage.drawImage(jpgImg, { x: 0, y: 0, width: origVp.width, height: origVp.height });
        }
        const bytes = await outDoc.save({ useObjectStreams: true });
        completeWithBlob(
          new Blob([bytes], { type: 'application/pdf' }),
          `${baseName}_compressed.pdf`,
          'PDF Compressed!',
          `Reduced from ${formatBytes(origSize)} to ${formatBytes(bytes.byteLength)}.`
        );
      }
    }

    // 4. PDF TO WORD (.docx)
    else if (tool.id === 'pdf2word') {
      const pdfJsDoc = await pdfjsLib.getDocument({ data: state.files[0].bytes.slice(0) }).promise;
      const addBreaks = document.getElementById('optPageBreaks')?.checked;
      const docChildren = [];

      for (let i = 1; i <= pdfJsDoc.numPages; i++) {
        const page = await pdfJsDoc.getPage(i);
        const textContent = await page.getTextContent();
        const lines = {};

        textContent.items.forEach((item) => {
          const y = Math.round(item.transform[5] / 6) * 6;
          if (!lines[y]) lines[y] = [];
          lines[y].push(item);
        });

        const sortedYs = Object.keys(lines).map(Number).sort((a, b) => b - a);
        sortedYs.forEach((y, lineIdx) => {
          const lineText = lines[y]
            .sort((a, b) => a.transform[4] - b.transform[4])
            .map((it) => it.str)
            .join(' ')
            .trim();
          if (lineText) {
            docChildren.push(
              new docx.Paragraph({
                children: [new docx.TextRun({ text: lineText, size: 22 })],
                spacing: { after: 120 }
              })
            );
          }
        });

        if (addBreaks && i < pdfJsDoc.numPages) {
          docChildren.push(new docx.Paragraph({ children: [new docx.PageBreak()] }));
        }
      }

      const wordDoc = new docx.Document({
        sections: [{ children: docChildren.length ? docChildren : [new docx.Paragraph('No selectable text found in PDF.')] }]
      });
      const blob = await docx.Packer.toBlob(wordDoc);
      const fname = `${(document.getElementById('optFilename')?.value || baseName).trim()}.docx`;
      completeWithBlob(blob, fname, 'Converted to Word!', 'Editable DOCX document generated.');
    }

    // 5. WORD TO PDF (.docx -> .pdf)
    else if (tool.id === 'word2pdf') {
      const container = document.createElement('div');
      container.style.padding = '24px';
      container.style.fontFamily = 'Arial, sans-serif';
      container.style.fontSize = '12pt';
      container.style.lineHeight = '1.6';
      container.style.color = '#111';
      container.innerHTML = state.docxHtml;

      const pdfBlob = await html2pdf()
        .set({
          margin: 15,
          image: { type: 'jpeg', quality: 0.96 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(container)
        .outputPdf('blob');

      const fname = `${(document.getElementById('optFilename')?.value || baseName).trim()}.pdf`;
      completeWithBlob(pdfBlob, fname, 'Word Converted to PDF!', 'Clean A4 PDF ready.');
    }

    // 6. PDF TO JPG
    else if (tool.id === 'pdf2jpg') {
      const scale = parseFloat(document.getElementById('optJpgQuality')?.value || '2.0');
      const pdfJsDoc = await pdfjsLib.getDocument({ data: state.files[0].bytes.slice(0) }).promise;
      const zip = new JSZip();

      for (let i = 1; i <= pdfJsDoc.numPages; i++) {
        const page = await pdfJsDoc.getPage(i);
        const vp = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = vp.width;
        canvas.height = vp.height;
        await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
        const blob = await new Promise((res) => canvas.toBlob(res, 'image/jpeg', 0.92));
        zip.file(`${baseName}_page_${i}.jpg`, blob);
      }
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      completeWithBlob(zipBlob, `${baseName}_images.zip`, 'PDF Converted to JPG!', `${pdfJsDoc.numPages} JPG image(s) archived.`);
    }

    // 7. JPG TO PDF
    else if (tool.id === 'jpg2pdf') {
      const sizeOpt = document.getElementById('optPageSize')?.value || 'a4';
      const margin = parseInt(document.getElementById('optMargin')?.value || '20', 10);
      const outDoc = await PDFDocument.create();

      for (const imgFile of state.files) {
        const embeddedImg = imgFile.type.includes('png')
          ? await outDoc.embedPng(imgFile.bytes)
          : await outDoc.embedJpg(imgFile.bytes);

        const dims = embeddedImg.scale(1);
        let pageW = dims.width + margin * 2;
        let pageH = dims.height + margin * 2;

        if (sizeOpt === 'a4') {
          pageW = 595.28;
          pageH = 841.89;
        } else if (sizeOpt === 'letter') {
          pageW = 612;
          pageH = 792;
        }

        const page = outDoc.addPage([pageW, pageH]);
        const availW = pageW - margin * 2;
        const availH = pageH - margin * 2;
        const ratio = Math.min(availW / dims.width, availH / dims.height);
        const drawW = dims.width * ratio;
        const drawH = dims.height * ratio;

        page.drawImage(embeddedImg, {
          x: (pageW - drawW) / 2,
          y: (pageH - drawH) / 2,
          width: drawW,
          height: drawH
        });
        if (imgFile.rotation) {
          page.setRotation(degrees(imgFile.rotation));
        }
      }
      const bytes = await outDoc.save();
      completeWithBlob(new Blob([bytes], { type: 'application/pdf' }), 'SwadeshPDF_Images.pdf', 'Images Converted to PDF!', `${state.files.length} image(s) combined.`);
    }

    // 8 & 12. ROTATE PDF / ORGANIZE PDF
    else if (tool.id === 'rotate' || tool.id === 'organize') {
      const srcDoc = await PDFDocument.load(state.files[0].bytes, { ignoreEncryption: true });
      const outDoc = await PDFDocument.create();

      for (const pState of state.pages) {
        const [copiedPage] = await outDoc.copyPages(srcDoc, [pState.origPageIndex]);
        if (pState.rotation) {
          copiedPage.setRotation(degrees((copiedPage.getRotation().angle + pState.rotation) % 360));
        }
        outDoc.addPage(copiedPage);
      }
      const bytes = await outDoc.save();
      const fname = `${(document.getElementById('optFilename')?.value || baseName + '_' + tool.id).trim()}.pdf`;
      completeWithBlob(new Blob([bytes], { type: 'application/pdf' }), fname, 'PDF Saved!', `${outDoc.getPageCount()} page(s) updated.`);
    }

    // 9. UNLOCK PDF
    else if (tool.id === 'unlock') {
      const pass = document.getElementById('optUnlockPass')?.value || '';
      const srcDoc = await PDFDocument.load(state.files[0].bytes, {
        ignoreEncryption: true,
        password: pass
      });
      const outDoc = await PDFDocument.create();
      const copied = await outDoc.copyPages(srcDoc, srcDoc.getPageIndices());
      copied.forEach((p) => outDoc.addPage(p));
      const bytes = await outDoc.save();
      completeWithBlob(new Blob([bytes], { type: 'application/pdf' }), `${baseName}_unlocked.pdf`, 'PDF Unlocked!', 'Permitted restrictions and encryption removed.');
    }

    // 10. PROTECT PDF
    else if (tool.id === 'protect') {
      const pass = document.getElementById('optUserPass')?.value;
      const confirm = document.getElementById('optConfirmPass')?.value;
      if (!pass) {
        showToast('Please enter a password.');
        return;
      }
      if (pass !== confirm) {
        showToast('Passwords do not match.');
        return;
      }
      const allowPrint = document.getElementById('optAllowPrint')?.checked;
      const srcDoc = await PDFDocument.load(state.files[0].bytes);

      if (typeof srcDoc.encrypt === 'function') {
        await srcDoc.encrypt({
          userPassword: pass,
          ownerPassword: pass + '_owner',
          permissions: {
            printing: allowPrint ? 'highResolution' : false,
            modifying: false,
            copying: false
          }
        });
      }
      const bytes = await srcDoc.save();
      completeWithBlob(new Blob([bytes], { type: 'application/pdf' }), `${baseName}_protected.pdf`, 'PDF Protected!', 'Password security applied.');
    }

    // 11. WATERMARK PDF
    else if (tool.id === 'watermark') {
      const wmType = document.getElementById('optWmType').value;
      const opacity = parseInt(document.getElementById('optWmOpacity').value, 10) / 100;
      const srcDoc = await PDFDocument.load(state.files[0].bytes, { ignoreEncryption: true });
      const pages = srcDoc.getPages();

      if (wmType === 'image' && state.watermarkImage) {
        const wmImg = state.watermarkImage.type.includes('png')
          ? await srcDoc.embedPng(state.watermarkImage.bytes)
          : await srcDoc.embedJpg(state.watermarkImage.bytes);
        const dims = wmImg.scale(0.45);
        pages.forEach((p) => {
          const { width, height } = p.getSize();
          p.drawImage(wmImg, {
            x: (width - dims.width) / 2,
            y: (height - dims.height) / 2,
            width: dims.width,
            height: dims.height,
            opacity
          });
        });
      } else {
        const text = (document.getElementById('optWmText')?.value || 'CONFIDENTIAL').trim();
        const hex = document.getElementById('optWmColor')?.value || '#e5322d';
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        const font = await srcDoc.embedFont(StandardFonts.HelveticaBold);

        pages.forEach((p) => {
          const { width, height } = p.getSize();
          const fontSize = Math.max(28, Math.min(54, width / (text.length * 0.65)));
          const textWidth = font.widthOfTextAtSize(text, fontSize);
          p.drawText(text, {
            x: (width - textWidth * 0.7) / 2,
            y: height / 2 - 40,
            size: fontSize,
            font,
            color: rgb(r, g, b),
            opacity,
            rotate: degrees(35)
          });
        });
      }

      const bytes = await srcDoc.save();
      completeWithBlob(new Blob([bytes], { type: 'application/pdf' }), `${baseName}_watermarked.pdf`, 'Watermark Added!', `Applied across ${pages.length} page(s).`);
    }
  } catch (err) {
    console.error(err);
    showToast('Operation failed: ' + (err.message || 'Check file integrity or password.'));
  } finally {
    setLoading(false);
  }
}

// Generate Sample File(s) for any selected tool
async function loadSampleForCurrentTool() {
  const tool = state.currentTool;
  if (!tool) return;
  setLoading(true, 'Creating sample document...');

  try {
    const { PDFDocument, StandardFonts, rgb } = PDFLib;

    if (tool.id === 'word2pdf') {
      const sampleDoc = new docx.Document({
        sections: [{
          children: [
            new docx.Paragraph({
              children: [new docx.TextRun({ text: 'SwadeshPDF Sample Word Document', bold: true, size: 32 })],
              spacing: { after: 200 }
            }),
            new docx.Paragraph({
              children: [new docx.TextRun({ text: 'This sample DOCX file was generated in your browser to test Word-to-PDF conversion.', size: 24 })]
            })
          ]
        }]
      });
      const blob = await docx.Packer.toBlob(sampleDoc);
      const file = new File([blob], 'Swadesh_Sample.docx', {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });
      await handleFiles([file]);
      return;
    }

    if (tool.id === 'jpg2pdf') {
      const sampleFiles = [];
      for (let i = 1; i <= 2; i++) {
        const c = document.createElement('canvas');
        c.width = 600;
        c.height = 800;
        const ctx = c.getContext('2d');
        ctx.fillStyle = i === 1 ? '#e5322d' : '#2563eb';
        ctx.fillRect(0, 0, 600, 800);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Inter, sans-serif';
        ctx.fillText(`SwadeshPDF Image #${i}`, 110, 400);
        const blob = await new Promise((res) => c.toBlob(res, 'image/jpeg', 0.9));
        sampleFiles.push(new File([blob], `Sample_Photo_${i}.jpg`, { type: 'image/jpeg' }));
      }
      await handleFiles(sampleFiles);
      return;
    }

    // Create 3-page sample PDF(s)
    const count = tool.id === 'merge' ? 2 : 1;
    const generated = [];

    for (let fIdx = 1; fIdx <= count; fIdx++) {
      const doc = await PDFDocument.create();
      const bold = await doc.embedFont(StandardFonts.HelveticaBold);
      const reg = await doc.embedFont(StandardFonts.Helvetica);

      for (let p = 1; p <= 3; p++) {
        const page = doc.addPage([595, 842]);
        page.drawRectangle({ x: 45, y: 730, width: 505, height: 55, color: fIdx === 1 ? rgb(0.89, 0.2, 0.18) : rgb(0.15, 0.38, 0.85) });
        page.drawText(`SwadeshPDF Sample Doc ${fIdx} — Page ${p}`, { x: 65, y: 750, size: 17, font: bold, color: rgb(1, 1, 1) });
        page.drawText(`Testing tool: ${tool.title}`, { x: 45, y: 690, size: 14, font: bold, color: rgb(0.15, 0.15, 0.2) });
        page.drawText('All processing happens 100% locally in your web browser without uploading files.', { x: 45, y: 660, size: 11, font: reg, color: rgb(0.35, 0.38, 0.45) });
      }
      const bytes = await doc.save();
      generated.push(new File([bytes], `Swadesh_Sample_Doc${fIdx}.pdf`, { type: 'application/pdf' }));
    }

    await handleFiles(generated);
  } catch (err) {
    console.error(err);
    showToast('Could not generate sample.');
  } finally {
    setLoading(false);
  }
}

// Event Bindings
document.getElementById('homeLogoBtn').onclick = (e) => {
  e.preventDefault();
  resetState();
  switchView('home');
};

document.querySelectorAll('.nav-link-btn').forEach((btn) => {
  btn.onclick = () => {
    if (btn.dataset.nav === 'home') {
      resetState();
      switchView('home');
    } else if (btn.dataset.tool) {
      selectTool(btn.dataset.tool);
    }
  };
});

document.getElementById('backToHomeFromUpload').onclick = () => switchView('home');
document.getElementById('backToHomeFromWork').onclick = () => switchView('home');
document.getElementById('allToolsBtn').onclick = () => switchView('home');
document.getElementById('backToEditBtn').onclick = () => switchView('workspace');

document.getElementById('selectFilesBtn').onclick = () => fileInput.click();
addMoreBtn.onclick = () => fileInput.click();
fileInput.onchange = (e) => handleFiles(e.target.files);
document.getElementById('loadSampleBtn').onclick = loadSampleForCurrentTool;

processBtn.onclick = executeToolAction;
document.getElementById('downloadAgainBtn').onclick = triggerDownload;

// Drag & Drop File Upload
['dragenter', 'dragover'].forEach((ev) => {
  dropZone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });
});
['dragleave', 'drop'].forEach((ev) => {
  dropZone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
  });
});
dropZone.addEventListener('drop', (e) => {
  if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
});

workspaceDropArea.addEventListener('dragover', (e) => {
  if (state.draggedIndex === null && state.currentTool?.multiple) {
    e.preventDefault();
    workspaceDropArea.classList.add('drag-over');
  }
});
workspaceDropArea.addEventListener('dragleave', () => workspaceDropArea.classList.remove('drag-over'));
workspaceDropArea.addEventListener('drop', (e) => {
  workspaceDropArea.classList.remove('drag-over');
  if (state.draggedIndex === null && state.currentTool?.multiple && e.dataTransfer.files?.length) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }
});

// Boot
initHomeGrid();
switchView('home');
