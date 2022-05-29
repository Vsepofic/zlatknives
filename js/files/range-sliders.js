//! https://www.youtube.com/watch?v=kWoAKq7N2Ew

const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [5000, 40000],
    connect: true,
    tooltips: [true, true],
    step: 10,
    range: {
        'min': 500,
        'max': 50000
    }
  });
  const input0 = document.getElementById('price-input-0');
  const input1 = document.getElementById('price-input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  })

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  }

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

const rangeSliderTotalLenght = document.getElementById('range-slider-total-lenght');
if (rangeSliderTotalLenght) {
  noUiSlider.create(rangeSliderTotalLenght, {
    start: [0, 100],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 100
    }
  });
  const input2 = document.getElementById('price-input-2');
  const input3 = document.getElementById('price-input-3');
  const inputs2 = [input2, input3];

  rangeSliderTotalLenght.noUiSlider.on('update', function (values, handle) {
    inputs2[handle].value = Math.round(values[handle]);
  })

  const setRangeSliderTotalLenght = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSliderTotalLenght.noUiSlider.set(arr);
  }

  inputs2.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSliderTotalLenght(index, e.currentTarget.value);
    });
  });
}

const rangeSliderLenght = document.getElementById('range-slider-lenght');
if (rangeSliderLenght) {
  noUiSlider.create(rangeSliderLenght, {
    start: [0, 100],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 100
    }
  });
  const input4 = document.getElementById('price-input-4');
  const input5 = document.getElementById('price-input-5');
  const inputs3 = [input4, input5];

  rangeSliderLenght.noUiSlider.on('update', function (values, handle) {
    inputs3[handle].value = Math.round(values[handle]);
  })

  const setRangeSliderLenght = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSliderLenght.noUiSlider.set(arr);
  }

  inputs3.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSliderLenght(index, e.currentTarget.value);
    });
  });
}

const rangeSliderWidth = document.getElementById('range-slider-width');
if (rangeSliderWidth) {
  noUiSlider.create(rangeSliderWidth, {
    start: [0, 100],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 100
    }
  });
  const input6 = document.getElementById('price-input-6');
  const input7 = document.getElementById('price-input-7');
  const inputs4 = [input6, input7];

  rangeSliderWidth.noUiSlider.on('update', function (values, handle) {
    inputs4[handle].value = Math.round(values[handle]);
  })

  const setRangeSliderWidth = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSliderWidth.noUiSlider.set(arr);
  }

  inputs4.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSliderWidth(index, e.currentTarget.value);
    });
  });
}