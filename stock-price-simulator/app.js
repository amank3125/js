(function () {
    "use strict";

    var slider = document.getElementById("priceSlider");
    var fill = document.getElementById("iosFill");
    var readout = document.getElementById("sliderReadout");

    var priceDigits = document.getElementById("priceDigits");
    var priceCard = document.getElementById("priceCard");
    var changeAmount = document.getElementById("changeAmount");
    var changePercent = document.getElementById("changePercent");

    var qtyInput = document.getElementById("qtyInput");
    var positionValue = document.getElementById("positionValue");

    // displayed = the number currently shown (animated toward target)
    var displayed = parseFloat(slider.value);
    var target = displayed;
    // reference = last "settled" price we measure change against
    var reference = displayed;
    var rafId = null;
    var bumpTimer = null;

    function fmt(n) {
        return n.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function updateSliderVisuals() {
        var min = parseFloat(slider.min);
        var max = parseFloat(slider.max);
        var pct = ((target - min) / (max - min)) * 100;
        fill.style.width = pct + "%";
        readout.textContent = "$" + fmt(target);
    }

    function updatePosition() {
        var qty = parseFloat((qtyInput.value || "").replace(/[^0-9.]/g, "")) || 0;
        positionValue.textContent = "$" + fmt(qty * displayed);
    }

    function setDirection(dir) {
        priceCard.classList.remove("up", "down");
        if (dir > 0) priceCard.classList.add("up");
        else if (dir < 0) priceCard.classList.add("down");

        // brief scale "bump" on the number for a lively feel
        priceCard.classList.add("bump");
        if (bumpTimer) clearTimeout(bumpTimer);
        bumpTimer = setTimeout(function () {
            priceCard.classList.remove("bump");
        }, 180);
    }

    function renderChange() {
        var diff = displayed - reference;
        var pct = reference !== 0 ? (diff / reference) * 100 : 0;
        changeAmount.textContent = (diff >= 0 ? "+" : "−") + fmt(Math.abs(diff));
        changePercent.textContent = "(" + (diff >= 0 ? "+" : "−") + Math.abs(pct).toFixed(2) + "%)";
    }

    // Running-numbers animation toward `target`
    function animate() {
        var delta = target - displayed;

        if (Math.abs(delta) < 0.01) {
            displayed = target;
            priceDigits.textContent = fmt(displayed);
            renderChange();
            updatePosition();
            rafId = null;
            return;
        }

        // Ease toward the target — fast when far, gentle when close
        displayed += delta * 0.18;
        priceDigits.textContent = fmt(displayed);
        renderChange();
        updatePosition();

        rafId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (rafId === null) {
            rafId = requestAnimationFrame(animate);
        }
    }

    function onSliderInput() {
        var newTarget = parseFloat(slider.value);
        var dir = newTarget - target;
        // reference is the value the display had when this move started
        reference = displayed;
        target = newTarget;

        if (dir !== 0) setDirection(dir);
        updateSliderVisuals();
        startAnimation();
    }

    slider.addEventListener("input", onSliderInput);

    qtyInput.addEventListener("input", function () {
        // keep only digits (and a single decimal point) so the field feels numeric
        var cleaned = qtyInput.value.replace(/[^0-9.]/g, "");
        var parts = cleaned.split(".");
        if (parts.length > 2) cleaned = parts[0] + "." + parts.slice(1).join("");
        if (qtyInput.value !== cleaned) qtyInput.value = cleaned;
        updatePosition();
    });

    // Initial paint
    updateSliderVisuals();
    priceDigits.textContent = fmt(displayed);
    renderChange();
    updatePosition();
})();
