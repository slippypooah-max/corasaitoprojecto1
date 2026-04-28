const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

if (cursor && ring) {
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
    });

    (function tick() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
        requestAnimationFrame(tick);
    })();

    document.querySelectorAll('a, button, label, input, select, textarea').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'var(--amber)';
            ring.style.width = '54px';
            ring.style.height = '54px';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.width = '12px';
            cursor.style.height = '12px';
            cursor.style.background = 'var(--purple)';
            ring.style.width = '36px';
            ring.style.height = '36px';
        });
    });
}

const obs = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
}), { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((reveal) => obs.observe(reveal));

const checkoutForm = document.querySelector('[data-checkout-form]');

if (checkoutForm) {
    const fallbackBasePrice = Number(checkoutForm.dataset.basePrice || 0);
    const engravingInput = document.querySelector('[data-engraving-input]');
    const summaryPrice = document.querySelector('[data-summary-price]');
    const summaryProduct = document.querySelector('[data-summary-product]');
    const summaryColor = document.querySelector('[data-summary-color]');
    const summaryProfile = document.querySelector('[data-summary-profile]');
    const summaryPack = document.querySelector('[data-summary-pack]');
    const summaryEngraving = document.querySelector('[data-summary-engraving]');
    const summaryDelivery = document.querySelector('[data-summary-delivery]');
    const summaryTotal = document.querySelectorAll('[data-summary-total]');
    const summaryColorPrice = document.querySelector('[data-summary-color-price]');
    const summaryPackPrice = document.querySelector('[data-summary-pack-price]');
    const summaryEngravingPrice = document.querySelector('[data-summary-engraving-price]');
    const summaryDeliveryPrice = document.querySelector('[data-summary-delivery-price]');
    const buildName = document.querySelector('[data-summary-build]');
    const productStage = document.querySelector('[data-product-stage]');
    const stageProduct = document.querySelector('[data-stage-product]');
    const stageCopy = document.querySelector('[data-stage-copy]');
    const stagePrice = document.querySelector('[data-stage-price]');
    const stageColorName = document.querySelector('[data-stage-color-name]');
    const stageSwatches = document.querySelectorAll('[data-stage-swatch]');

    const formatCad = (value) => `${value.toFixed(2).replace('.', ',')} ca$`;

    const getSelectedOption = (name) => checkoutForm.querySelector(`input[name="${name}"]:checked`);

    const getPrice = (input) => Number(input?.dataset.price || 0);
    const pulsePrice = (node) => {
        node.classList.remove('price-shift');
        void node.offsetWidth;
        node.classList.add('price-shift');
    };
    const setText = (node, text, animate = false) => {
        if (!node || node.textContent === text) return;
        node.textContent = text;
        if (animate) pulsePrice(node);
    };
    const setTextAll = (nodes, text, animate = false) => {
        nodes.forEach((node) => setText(node, text, animate));
    };
    let hasRendered = false;

    const updateCheckoutSummary = () => {
        const product = getSelectedOption('product');
        const color = getSelectedOption('color');
        const profile = getSelectedOption('profile');
        const pack = getSelectedOption('pack');
        const delivery = getSelectedOption('delivery');
        const engraving = engravingInput ? engravingInput.value.trim() : '';
        const engravingPrice = engraving ? 24 : 0;

        const basePrice = getPrice(product) || fallbackBasePrice;
        const colorPrice = getPrice(color);
        const packPrice = getPrice(pack);
        const deliveryPrice = getPrice(delivery);
        const total = basePrice + colorPrice + packPrice + deliveryPrice + engravingPrice;
        const animatePrices = hasRendered;

        setText(summaryPrice, formatCad(basePrice), animatePrices);
        if (summaryProduct) summaryProduct.textContent = product?.dataset.label || 'cora';
        if (summaryColor) summaryColor.textContent = color?.dataset.label || '';
        if (summaryProfile) summaryProfile.textContent = profile?.dataset.label || '';
        if (summaryPack) summaryPack.textContent = pack?.dataset.label || '';
        if (summaryEngraving) summaryEngraving.textContent = engraving || 'sans gravure';
        if (summaryDelivery) summaryDelivery.textContent = delivery?.dataset.label || '';
        setTextAll(summaryTotal, formatCad(total), animatePrices);
        setText(summaryColorPrice, colorPrice ? `+ ${formatCad(colorPrice)}` : 'inclus', animatePrices);
        setText(summaryPackPrice, packPrice ? `+ ${formatCad(packPrice)}` : 'inclus', animatePrices);
        setText(summaryEngravingPrice, engravingPrice ? `+ ${formatCad(engravingPrice)}` : 'inclus', animatePrices);
        setText(summaryDeliveryPrice, deliveryPrice ? `+ ${formatCad(deliveryPrice)}` : 'inclus', animatePrices);
        if (buildName) buildName.textContent = `${product?.dataset.label || 'cora'} - ${color?.dataset.label || 'ivoire fumee'}`;

        if (productStage) {
            productStage.dataset.product = product?.dataset.visual || 'earbuds';
            productStage.dataset.color = color?.dataset.color || 'ivory';
        }
        if (stageProduct) stageProduct.textContent = product?.dataset.label || 'ecouteurs cora';
        if (stageCopy) stageCopy.textContent = product?.dataset.stageCopy || '';
        setText(stagePrice, formatCad(basePrice), animatePrices);
        if (stageColorName) stageColorName.textContent = color?.dataset.label || 'ivoire fumee';
        stageSwatches.forEach((swatch) => {
            swatch.classList.toggle('is-active', swatch.dataset.stageSwatch === (color?.dataset.color || 'ivory'));
        });
        hasRendered = true;
    };

    checkoutForm.addEventListener('input', updateCheckoutSummary);
    checkoutForm.addEventListener('change', updateCheckoutSummary);
    updateCheckoutSummary();
}